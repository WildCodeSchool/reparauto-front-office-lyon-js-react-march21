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
    data.rating &&
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
      className="flex justify-center sm:flex-row md:flex flex-col-reverse"
    >
      <div>
        {reviews.map((review) => (
          <div className="max-w-md mb-20 md:m-6 bg-white rounded-xl shadow-lg overflow-hidden md:max-w-xl my-10 ">
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
          </div>
        ))}
      </div>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className=" py-4 flex flex-col justify-center sm:py-3">
            <div className="py-3 m-auto mt-0 mb-0">
              <div className="bg-white w-full flex flex-col rounded-xl shadow-lg">
                <div className="px-12 py-5">
                  <h2 className="text-gray-800 text-xl font-semibold">
                    Votre avis nous intéresse !
                  </h2>
                </div>
                <div className="bg-gray-200 w-full flex flex-col items-center">
                  <div className="flex flex-col items-center py-3 space-y-1">
                    <span className="text-lg text-gray-800">
                      Quelle à été la qualité du service rendu ?
                    </span>

                    <div className="flex space-x-3">
                      <ReactStars
                        size={65}
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
                      className="p-4 my-2 text-gray-500 rounded-xl resize-none hover:shadow-xl"
                      placeholder="Rédigez votre avis :"
                    />
                    <input
                      placeholder="Votre email:"
                      {...register('clientEmail', { required: true })}
                      rows="3"
                      className="p-4 text-gray-500 my-2 rounded-xl resize-none hover:shadow-lg"
                      type="email"
                    />
                    <input
                      placeholder="Votre nom:"
                      {...register('userNameRequired', { required: true })}
                      rows="3"
                      className="p-4 my-2 text-gray-500 rounded-xl resize-none hover:shadow-lg"
                    />
                    {errors.userNameRequired && (
                      <span>
                        Cette information est requise pour l'envoi du formulaire
                      </span>
                    )}
                    <button
                      type="submit"
                      className="py-3 my-8 text-lg bg-gradient-to-r from-yellow-500 to-red-600 rounded-xl text-white hover:shadow-lg"
                    >
                      Envoyer
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </motion.div>
  );
}

export async function getStaticProps() {
  const res = await axios.get(process.env.NEXT_PUBLIC_REVIEWS_URL);
  const reviews = res.data;

  return {
    props: { reviews },
  };
}
