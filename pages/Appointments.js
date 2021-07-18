import { useForm, Controller } from 'react-hook-form';
import { motion } from 'framer-motion';
import ReactDatePicker from 'react-datepicker';

import axios from 'axios';
import { useToasts } from 'react-toast-notifications';

export default function Appointements() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const { addToast } = useToasts();

  const onSubmit = (data) => {
    console.log(data);
    axios({
      method: 'post',
      url: '/api/appointments',
      data: {
        Brand: data.Brand,
        Model: data.Model,
        AppointmentDate: data.date,
        AppointmentsEmail: data.email,
        AppointmentsName: data.lastName,
        AppointmentsContent: data.content,
        AppointmentsImmatriculation: data.immatriculation,
      },
    })
      .then((response) => {
        console.log(response);
        addToast(
          `Merci M.${data.lastName}, votre demande de rendez-vous a bien été prise en compte pour le ${data.date}`,
          {
            appearance: 'success',
            autoDismissTimeout: '4000',
            autoDismiss: true,
          }
        );
      })

      .catch(function (err) {
        console.log(err);
      });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.1 }}
      className="flex flex-col md:mt-28 sm:mt-0 justify-center "
    >
      <div className="h-full sm:max-w-xl sm:mx-auto">
        <div className="flex flex-col item-center shadow-lg ">
          <div className="bg-white flex justify-center md:rounded-t-xl sm:py-6 md:py-6 hover:shadow-lg">
            <h2 className="text-gray-800 text-2xl font-semibold py-3">
              Prenons rendez-vous !
            </h2>
          </div>
          <div className="bg-gray-200 flex flex-col items-center shadow-md transform hover:shadow-xl transition duration-400">
            <div className="flex flex-col items-center py-2 space-y-3" />
            <form
              onSubmit={handleSubmit(onSubmit)}
              className=" flex flex-col mx-10"
            >
              <input
                {...register('firstName', {
                  pattern: /^[A-Za-z]+$/i,
                  required: true,
                  minLength: { value: 3 },
                })}
                className="p-3 m my-2 text-gray-500 rounded-xl resize-none shadow-md transform hover:shadow-xl transition duration-400"
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
                className="p-3 my-2 text-gray-500 rounded-xl resize-none  shadow-md transform hover:shadow-xl transition duration-400"
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
                className="p-3 my-2 text-gray-500 rounded-xl resize-none shadow-md transform hover:shadow-xl transition duration-400"
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
                className="p-3 my-2 text-gray-500 rounded-xl resize-none shadow-md transform hover:shadow-xl transition duration-400"
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
                className="p-3 h-24 my-2 text-gray-500 rounded-xl resize-none shadow-md transform hover:shadow-xl transition duration-400"
                placeholder="Travaux à réaliser"
                name="message"
                type="text"
              />
              {errors.message && <p>Message requis</p>}
              <Controller
                name="appointmentDate"
                control={control}
                render={({ field: { onChange, value } }) => (
                  <ReactDatePicker
                    onChange={onChange}
                    selected={value}
                    className="p-3 px-16 my-2 text-gray-500 rounded-xl shadow-md transform hover:shadow-xl transition duration-400"
                    placeholderText="Date de rendez-vous"
                  />
                )}
              />
              <button
                type="submit"
                className="py-4 mx-10 mt-2 mb-10 text-lg bg-gradient-to-r from-yellow-400 to-red-500 rounded-xl text-gray-800 shadow-md transform hover:shadow-xl transition duration-400"
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
