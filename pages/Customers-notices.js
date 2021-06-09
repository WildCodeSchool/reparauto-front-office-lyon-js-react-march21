import React from 'react';
import {useForm} from "react-hook-form";
import ReactStars from "react-rating-stars-component";





export default function Avis() {

  const { register, handleSubmit, watch, formState: { errors }, setValue } = useForm();
  
  const ratingChanged = (newRating) => {
    setValue("rating", newRating);
    console.log(newRating);
    
    // data.newRating = newRating
  };
  const onSubmit = data => console.log(data);
  // data.rate = {newRating}
  // console.log(watch("example")); // watch input value by passing the name of it

  

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="min-h-screen bg-gray-300 py-6 flex flex-col justify-center sm:py-12">
        <div className="py-3 m-auto">
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
                required
                value="3"
                edit={true}
                type="input"
                />
                   
                 </div>
              </div>
              <div className="w-3/4 flex flex-col">
                <textarea {...register("content",{ required: true })}
                  rows="3"
                  className="p-4 text-gray-500 rounded-xl resize-none"
                  placeholder="Rédigez votre avis :"
                  
                />
                <input placeholder="Votre email:" {...register("email",{ required: true })}
                  rows="3"
                  className="p-4 text-gray-500 my-1 rounded-xl resize-none"
                  
                />
                <input placeholder="Votre nom:" {...register("userNameRequired", { required: true })}
                  rows="3"
                  className="p-4 text-gray-500 rounded-xl resize-none"
                  
                />
                {errors.userNameRequired && <span>Cette information est requise pour l'envoi du formulaire</span>}
                <button
                  // onClick={() => {
                   // setValue("newRating", {newRating});
                  // }}
                  className="py-3 my-8 text-lg bg-gradient-to-r from-yellow-500 to-red-600 rounded-xl text-white"
                >
                  Envoyer
                </button>
              </div>
            </div>
            <div className="h-20 flex items-center justify-center">
              <a className="text-gray-600">
                Merci pour votre avis
              </a>
            </div>
          </div>
        </div>
      </div>
      
    
  
    </form>
  );
}