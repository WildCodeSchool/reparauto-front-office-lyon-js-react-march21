// import { data } from 'autoprefixer';
import React from 'react';
import { useForm } from 'react-hook-form';
import ReactStars from 'react-rating-stars-component';

export default function Avis() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  const ratingChanged = (newRating) => {
    setValue('rating', newRating);
  };
  const onSubmit = (data) => {
    // eslint-disable-next-line no-unused-expressions
    data.rating && console.log(data);
    if (data.rating !== undefined) {
      window.alert(
        `Merci ${data.userNameRequired}, votre message a bien été envoyé avec une note de ${data.rating} étoiles !`
      );
    } else {
      window.alert(
        'Tout les champs et une note doivent être enregistrés pour envoyer le formulaire'
      );
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="min-h-screen bg-gray-300 py-6 flex flex-col justify-center sm:py-12">
        <div className="py-3 m-auto mt-0 mb-0">
          <div className="bg-white w-full flex flex-col rounded-xl shadow-lg">
            <div className="px-12 py-5">
              <h2 className="text-gray-800 text-3xl font-semibold">
                Votre avis nous intéresse !
              </h2>
            </div>
            <div className="bg-gray-200 w-full flex flex-col items-center">
              <div className="flex flex-col items-center py-6 space-y-3">
                <span className="text-lg text-gray-800">
                  Quelle à été la qualité du service rendu ?
                </span>

                <div className="flex space-x-3">
                  <ReactStars
                    size={65}
                    activeColor="#ffd700"
                    onChange={ratingChanged}
                    value="3"
                    edit
                    type="input"
                  />
                </div>
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
                  {...register('email', { required: true })}
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
                  type="button"
                  className="py-3 my-8 text-lg bg-gradient-to-r from-yellow-500 to-red-600 rounded-xl text-white hover:shadow-lg"
                >
                  Envoyer
                </button>
              </div>
            </div>
            <div className="h-20 flex items-center justify-center">
              <p className="text-gray-600">Merci pour votre avis</p>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
