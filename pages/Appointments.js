/* eslint-disable prettier/prettier */
import { useForm } from 'react-hook-form';
import Calendar from 'react-calendar'
import {useState, useEffect} from'react'
import axios from 'axios';


export default function Appointements() {

  const [date, setDate] = useState()
  const {register, handleSubmit, formState: { errors },} = useForm();

  const onSubmit = (data) => {
    axios({
      method:'post',
      url: 'http://localhost:1337/Appointments', 
      data: {
        AppointmentAsk: data.date,
        AppointmentsUserEmail: data.email,
        AppointmentsUserName: data.lastname,
        AppointmentsUserAskContent: data.message,
        AppointmentsImmat: data.immatriculation,
        Brand: data.marque,
        Model: data.model,
    }
      .catch((err) => console.log(err))
  })};

  return (
    <div className="flex flex-col md:mt-10 sm:mt-0 justify-center ">
      <div className="h-full sm:max-w-xl sm:mx-auto">
        <div className="flex flex-col item-center shadow-lg ">
          <div className="bg-white flex justify-center md:rounded-t-xl sm:py-6 md:py-6  hover:shadow-l">
            <h2 className="text-gray-800 text-xl font-semibold py-2">
              Prenons rendez-vous !
            </h2>
          </div>
          <div className="bg-gray-200  flex flex-col items-center md:rounded-b-xl ">
            <div className="flex flex-col items-center py-2 space-y-3" />
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="w-3/4 flex flex-col "
            >
              <input
                {...register('lastName', {
                  pattern: /^[A-Za-z]+$/i,
                  required: true,
                  minLength: { value: 1 },
                })}
                className="p-3 my-2 text-gray-500 rounded-xl resize-none  hover:shadow-lg"
                name="lastName"
                placeholder="Nom"
                type="text"
              />
              {errors.lastName && <p>Nom requis (lettres uniquement)</p>}
                <input
                  {...register('Brand', {
                    pattern: /^[A-Za-z]+$/i,
                    required: true,
                    minLength: { value: 1 },
                  })}
                  className="p-3 my-2 text-gray-500 rounded-xl resize-none hover:shadow-lg"
                  name="Brand"
                  placeholder="Marque"
                  type="text"
                />
                {errors.Brand && <p>Marque requise (lettres uniquement)</p>}
                <input
                  {...register('Model', {
                    required: true,
                    minLength: { value: 1 },
                  })}
                  className="p-3 my-2 text-gray-500 rounded-xl resize-none hover:shadow-lg"
                  name="Model"
                  placeholder="Modèle"
                  type="text"
                />
                {errors.Brand && <p>Modele requis (lettres uniquement)</p>}
                  <input
                    {...register('immatriculation', {
                      required: true,
                      minLength: { value: 1 },
                    })}
                    className="p-3 my-2 text-gray-500 rounded-xl resize-none hover:shadow-lg"
                    placeholder="Immatriculation"
                    type="text"
                    name="immatriculation"
                  />
                  {errors.immatriculation && <p>Immatriculation requise</p>}
              <input
                {...register('email', {
                  required: true,
                  minLength: { value: 1 },
                })}
                className="p-3 my-2 text-gray-500 rounded-xl resize-none hover:shadow-lg"
                name='email'
                placeholder="email"
                type="text"
              />
              {errors.email && <p>Email requis</p>}
              <textarea
                {...register('message', {
                  required: true,
                  minLength: { value: 1 },
                })}
                className="p-3 h-28 my-2 text-gray-500 rounded-xl resize-none hover:shadow-lg"
                placeholder='Travaux à réaliser'
                name="message"
                type="text"
              />
              {errors.message && <p>Message requis</p>}
              <p className='flex justify-center m-2 text-gray-600'>Date de rendez-vous souhaité</p>
              <Calendar
                className=' p-4 my-2 max-w-md bg-white text-gray-600 rounded-xl hover:shadow-lg'
              />
              <button
                type="button"
                className="py-4 my-2 text-lg bg-white rounded-xl text-gray-600 hover:shadow-lg"
              >
                Ajoutez une photo
              </button>
              <button
                type="submit"
                className="py-4 mt-2 mb-20 text-lg bg-gradient-to-r from-yellow-400 to-red-500 rounded-xl text-gray-800 hover:shadow-lg"
              >
                Envoyez
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
