
import {useState} from 'react';
import { useForm } from 'react-hook-form';

export default function Contact() {


  const { register, handleSubmit } = useForm();
  const onSubmit = data => {
    
  }
  

  return (
    <div  className=" bg-gray-300  py-2 flex flex-col justify-center sm:py-0  md:py-6 ">
      <div className=" sm:max-w-xl sm:mx-auto">
        <div className="bg-white min-w-1xl flex flex-col sm:rounded-xl md:rounded-none shadow-lg">
          <div className="px-12 py-2">
            <h2 className="text-gray-800 text-l font-semibold">Besoin de renseignements supplémentaires ?</h2>
          </div>
          <div className="bg-gray-200 w-full h-full flex flex-col items-center ">
            <div className="flex flex-col items-center py-2 space-y-3">
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="w-3/4 flex flex-col">
              <input 
              {...register({required:'Entrer votre Prénom', minLength:{value:3}})}
              className="p-3 my-2 text-gray-500 rounded-xl resize-none"
              name="firstName"
              placeholder="Prénom"
              >
              </input>
              <input 
              {...register({required:'Entrer votre nom', minLength:{value:3}})}
              className="p-3 my-2 text-gray-500 rounded-xl resize-none"
              name="LastName"
              placeholder="Nom"
              >
              </input>
              <input 
              {...register({required:'Entrer votre Email', minLength:{value:3}})}
              className="p-3 my-2 text-gray-500 rounded-xl resize-none"
              placeholder="email"
              name="email"
              >
              </input>
              <input
              {...register({required:'Entrer votre demande', minLength:{value:3}})}
              className="p-3 h-20 my-2 text-gray-500 rounded-xl resize-y"
              placeholder="laisser nous un message"
              name="message"
              >
              </input>
              <button className="py-3 my-2 text-lg bg-gradient-to-r from-yellow-400 to-red-500 rounded-xl text-white"
              >Envoyez
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}