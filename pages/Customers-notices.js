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
        url: process.env.NEXT_PUBLIC_REVIEWS_URL,
        data: {
          Content: data.content,
          ClientEmail: data.ClientEmail,
          Rating: data.rating,
          ReviewsClientName: data.userNameRequired,
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
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.1 }}
      className="flex justify-evenly md:mt-12 sm:mt-0 sm:flex-row md:flex flex-col-reverse"
    >
      <div>
        {reviews.map((review) => (
          <motion.div
            key={reviews.id}
            whileHover={{ y: -7 }}
            className="max-w-m mt-5 md:my-6 md:mb-8 bg-white rounded-xl shadow-lg transform hover:shadow-2xl overflow-hidden md:max-w-xl "
          >
            {reviews.ValidatedNotice && (
              <div className="p-6 md:p-4 ">
                <p>Note : {review.Rating} / 5</p>
                <div className="tracking-wide text-sm text-indigo-500 font-semibold">
                  <p>Client: {review.ReviewsClientName}</p>
                </div>
                <p className="mt-2 text-gray-500">
                  Commentaires: {review.Content}
                </p>
                {console.log(reviews)}
              </div>
            )}
          </motion.div>
        ))}
      </div>
      <motion.div whileHover={{ y: -7 }}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className=" flex flex-col justify-center mb-10 sm:py-3">
            <div className="md:py-3 m-auto mt-0 mb-0">
              <div className="bg-white w-full flex flex-col md:rounded-xl shadow-lg transform hover:shadow-2xl transition duration-400">
                <div className="px-12 ">
                  <h2 className="text-gray-800 py-5 text-xl font-semibold flex justify-center">
                    Votre avis nous intéresse !
                  </h2>
                </div>
                <div className="bg-gray-200 w-full flex flex-col items-center">
                  <div className="flex flex-col items-center py-6 px-10 space-y-1">
                    <span className="text-lg text-gray-800">
                      Quelle a été la qualité du service rendu ?
                    </span>

                    <div className="flex space-x-3">
                      <ReactStars
                        size={48}
                        activeColor="#ffd700"
                        value={starRating}
                        onChange={(setStarRating, ratingChanged)}
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
                      className="p-4 my-2 text-gray-500 rounded-xl resize-none shadow-lg transform hover:shadow-2xl transition duration-400"
                      placeholder="Rédigez votre avis :"
                    />
                    <input
                      placeholder="Votre email:"
                      {...register('ClientEmail', { required: true })}
                      rows="3"
                      className="p-4 text-gray-500 my-2 rounded-xl resize-none shadow-lg transform hover:shadow-2xl transition duration-400"
                      type="email"
                    />
                    <input
                      placeholder="Votre nom:"
                      {...register('userNameRequired', { required: true })}
                      rows="3"
                      className="p-4 my-2 text-gray-500 rounded-xl resize-none shadow-lg transform hover:shadow-2xl transition duration-400"
                    />
                    {errors.userNameRequired && (
                      <span>
                        Cette information est requise pour l'envoi du formulaire
                      </span>
                    )}
                    <button
                      type="submit"
                      className="py-3 mt-3 mb-16 text-lg bg-gradient-to-r from-yellow-500 to-red-600 rounded-xl text-white shadow-lg transform hover:shadow-2xl transition duration-400"
                    >
                      Envoyer
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </motion.div>
    </motion.div>
  );
}

export async function getStaticProps() {
  const res = await axios.get(process.env.NEXT_PUBLIC_REVIEWS_URL);
  const reviews = res.data;
  return {
    props: { reviews },
    revalidate: 10,
  };
}
