import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import ReactStars from 'react-rating-stars-component';
import axios from 'axios';
import { motion } from 'framer-motion';
import { useToasts } from 'react-toast-notifications';

export default function Avis({ reviews }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm();

  const { addToast } = useToasts();

  // try react star handling
  const [starRating, setStarRating] = useState(null);

  const ratingChanged = (newRating) => {
    setValue('rating', newRating);
  };
  // form data sending email
  const onSubmit = (data) => {
    if (data.rating) {
      axios({
        method: 'post',
        url: `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/reviews`,
        data: {
          Content: data.content,
          ClientEmail: data.ClientEmail,
          Rating: data.rating,
          ReviewsClientName: data.userNameRequired,
          ValidatedNotice: null,
        },
      })
        .then((reponse) => {
          // On traite la suite une fois la réponse obtenue
          console.log(reponse);
        })
        .catch((erreur) => {
          // On traite ici les erreurs éventuellement survenues
          console.log(erreur);
        });
    }
    if (data.rating !== undefined) {
      addToast(
        `Merci ${data.userNameRequired}, votre message a bien été envoyé avec une note de ${data.rating} étoiles !`,
        {
          appearance: 'success',
          autoDismiss: true,
        }
      );
      reset();
    } else {
      addToast(
        'Tout les champs et une note doivent être enregistrés pour envoyer le formulaire',
        {
          appearance: 'error',
          autoDismiss: false,
        }
      );
    }
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1.1 }}
        className="flex flex-wrap-reverse justify-evenly md:mt-12 sm:mt-0 "
      >
        <div>
          {reviews.map((review) => (
            <motion.div
              key={reviews.id}
              whileHover={{ y: -5 }}
              className="w-screen md:w-96 my-5 md:my-6 md:mb-8 bg-gray-500 rounded-xl shadow-lg transform hover:shadow-2xl overflow-hidden"
            >
              <div className="p-6 md:p-4 text-yellow-500 md:text-lg sm:text:md ">
                <p>Note : {review.Rating} / 5</p>
                <div className="text-sm text-yellow-400 font-semibold">
                  <p>Client: {review.ReviewsClientName}</p>
                </div>
                <p className="mt-2 text-gray-200 sm:text-md md:text-lg">
                  Commentaires: {review.Content}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
        <motion.div whileHover={{ y: -7 }}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className=" flex flex-col justify-center mb-2 sm:py-3 w-screen sm:w-full ">
              <div className="md:py-3 mt-0 mb-0">
                <div className="bg-gray-600 w-full flex flex-col md:rounded-xl shadow-lg transform hover:shadow-2xl transition duration-400">
                  <div className="h-full w-full">
                    <h2 className="custom-font text-yellow-400 py-5 text-xl flex justify-center">
                      Votre avis nous intéresse !
                    </h2>
                  </div>
                  <hr className=" w-full bg-gradient-to-r from-yellow-400 to-red-500 h-px border-none " />
                  <div className="bg-gray-500 w-full flex flex-col items-center">
                    <div className="flex flex-col items-center py-6 px-8 space-y-1">
                      <span className="sm:text-lg md:text-xl text-yellow-400">
                        Quelle a été la qualité du service rendu ?
                      </span>

                      <div className="flex space-x-2 ">
                        <ReactStars
                          size={48}
                          color1="ffffff"
                          color2="#e1870b"
                          value={starRating}
                          onChange={(val) => {
                            setStarRating(val);
                            ratingChanged(val);
                          }}
                          type="input"
                          required
                        />
                      </div>
                      {errors.starRating}
                    </div>
                    <div className="w-3/4 flex flex-col">
                      <textarea
                        {...register('content', { required: true })}
                        rows="3"
                        maxLength="250"
                        className="p-4 my-2 text-gray-500 rounded-xl resize-none shadow-lg transform hover:shadow-2xl transition duration-400"
                        placeholder="Rédigez votre avis :"
                      />
                      <input
                        placeholder="Votre email:"
                        {...register('ClientEmail', { required: true })}
                        rows="3"
                        className="p-4 text-gray-500 my-2 rounded-lg resize-none shadow-lg transform hover:shadow-2xl transition duration-400"
                        type="email"
                      />
                      <input
                        placeholder="Votre nom:"
                        {...register('userNameRequired', { required: true })}
                        rows="3"
                        className="p-4 my-2 text-gray-500 rounded-lg resize-none shadow-lg transform hover:shadow-2xl transition duration-400"
                      />
                      {errors.userNameRequired && (
                        <span>
                          Cette information est requise pour l'envoi du
                          formulaire
                        </span>
                      )}
                      <motion.button
                        whileHover={{
                          scale: 1.02,
                          originY: 0,
                          color: '#5c5453',
                          backgroundColor: '#fdb31f',
                        }}
                        whileTap={{ scale: 0.95 }}
                        type="submit"
                        className="flex justify-center bg-gray-300 border-solid border border-yellow-500 text-lg mt-5 mb-10 shadow-lg hover:shadow-2xl cursor-pointer px-4 py-4 rounded-md align-center"
                      >
                        Envoyer
                      </motion.button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </motion.div>
      </motion.div>
    </>
  );
}

export async function getStaticProps() {
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/reviews`
  );
  console.log('data', res.data);
  const reviews = res.data.slice(0, 5);
  return {
    props: { reviews },
    revalidate: 10,
  };
}
