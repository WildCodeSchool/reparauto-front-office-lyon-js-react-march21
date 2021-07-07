import { useForm, Controller } from 'react-hook-form';
import { motion } from 'framer-motion';
import ReactDatePicker from 'react-datepicker';
// import {useState} from'react';
import Calendar from 'react-calendar'
import {useState} from'react'
import axios from 'axios';
import { useToasts } from 'react-toast-notifications';



export default function Appointements() {
  // const [date, setDate] = useState()
  const {register, handleSubmit, control, formState: { errors },} = useForm();
  const [date, setDate] = useState(new Date())

  const { addToast } = useToasts()

  const onChange = date => {
    setDate(date)

  }

  const onSubmit = (data) => {
    console.log(data)
    axios({
      method:'post',
      url:(process.env.NEXT_PUBLIC_APPOINTMENTS_URL),
      data: {
        Brand: data.Brand,
        Model: data.Model,
        AppointmentDate: data.date,
        AppointmentsEmail: data.email,
        AppointmentsName: data.lastName,
        AppointmentsContent: data.content,
        AppointmentsImmatriculation: data.immatriculation,
    }})
    .then(function (response) {
      console.log(response),
      addToast(`Merci M.${data.lastName}, votre demande de rendez-vous a bien été prise en compte pour le ${data.date}`, {
        appearance:'success',
        autoDismiss: true,
      })
    
    })
  .catch((err) => console.log(err))
};

  return (
    <motion.div
    initial={{ opacity:0}}
    animate={{ opacity: 1}}
    exit={{opacity:0}}
    transition={{duration:1.1}}
    className="flex flex-col md:mt-10 sm:mt-0 justify-center ">
      <div className="h-full sm:max-w-xl sm:mx-auto">
        <div className="flex flex-col item-center shadow-lg ">
          <div className="bg-white flex justify-center md:rounded-t-xl sm:py-6 md:py-6  hover:shadow-l">
            <h2 className="text-gray-800 text-xl font-semibold py-2">
              Prenons rendez-vous !
            </h2>
          </div>
          <div className="bg-gray-200 max-w-80 flex flex-col items-center md:rounded-b-xl ">
            <div className="flex flex-col items-center py-2 space-y-3" />
            <form
              onSubmit={handleSubmit(onSubmit)}
              className=" flex flex-col "
            >
              <input
                {...register('firstName', {
                  pattern: /^[A-Za-z]+$/i,
                  required: true,
                  minLength: { value: 3 },
                })}
                className="p-3 my-2 text-gray-500 rounded-xl resize-none hover:shadow-lg"
                name="firstName"
                placeholder="Prénom"
                type="text"
              />
              {errors.firstName && <p>Prénom requis (lettres uniquement)</p>}
              <input
                {...register('lastName', {
                  pattern: /^[A-Za-z]+$/i,
                  required: true,
                  minLength: { value: 3 },
                })}
                className="p-3 my-2 text-gray-500 rounded-xl resize-none  hover:shadow-lg"
                name="lastName"
                placeholder="Nom"
                type="text"
              />
              {errors.lastName && <p>Nom requis (lettres uniquement)</p>}
              <input
                {...register('email', {
                  required: false,
                  minLength: { value: 3 },
                })}
                className="p-3 my-2 text-gray-500 rounded-xl resize-none hover:shadow-lg"
                placeholder="Email"
                type="email"
                name="email"
              />
              {errors.email && <p>Email requis</p>}
              <input
                {...register('immatriculation', {
                  required: true,
                  minLength: { value: 3 },
                })}
                className="p-3 my-2 text-gray-500 rounded-xl resize-none hover:shadow-lg"
                placeholder="Immatriculation"
                type="text"
                name="immatriculation"
              />
              {errors.immatriculation && <p>Immatriculation requise</p>}
              <textarea
                {...register('message', {
                  required: true,
                  minLength: { value: 1 },
                })}
                className="p-3 h-24 my-2 text-gray-500 rounded-xl resize-none hover:shadow-lg"
                placeholder='Travaux à réaliser'
                name="message"
                type="text"
              />
              {errors.message && <p>Message requis</p>}
              <Controller 
              name="appointmentDate"
              control={control}
              render={({field:{onChange, value}}) =>(
              <ReactDatePicker
                onChange={onChange}
                selected={value}
                className="p-3 my-2 text-gray-500 rounded-xl hover:shadow-lg"
                placeholderText="Date de rendez-vous souhaité"/>)}
              />
              <input
                type="file"
                className="py-3 my-2 text-lg bg-white  rounded-xl text-gray-800 hover:shadow-lg"
              >
              </input>
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
    </motion.div>
  );
}