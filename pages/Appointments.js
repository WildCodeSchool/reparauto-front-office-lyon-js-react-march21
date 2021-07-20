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
    reset,
    formState: { errors },
  } = useForm();

  const { addToast } = useToasts();

  const onSubmit = (data) => {
    console.log(data);
    axios({
      method: 'post',
      url: '/api/appointments',
      data: {
        appointmentsUserName: data.appointmentsUserName,
        appointmentsEmail: data.appointmentsEmail,
        brandModel: data.brandModel,
        appointmentsImmatriculation: data.appointmentsImmatriculation,
        appointmentsContent: data.appointmentsContent,
        appointmentDate: data.appointmentDate,
      },
    })
      .then((response) => {
        console.log(response);
      })

      .catch((err) => {
        console.log(err);
      });
    addToast(
      `Merci ${data.appointmentsUserName}, votre demande de rendez-vous a bien été prise en compte pour le ${data.appointmentDate}`,
      {
        appearance: 'success',
        autoDismissTimeout: '6000',
        autoDismiss: true,
      }
    );
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
          <div className="bg-gray-600 flex justify-center md:rounded-t-xl sm:py-6 md:py-6 hover:shadow-lg">
            <h2 className="text-yellow-400 text-xl font-semibold py-2">
              Prenons rendez-vous !
            </h2>
          </div>
          <div className="bg-gray-500 w-96 flex flex-col items-center">
            <div className="flex flex-col items-center py-2 space-y-3" />
            <form
              onSubmit={handleSubmit(onSubmit)}
              className=" flex flex-col w-80"
            >
              <input
                {...register('appointmentsUserName', {
                  required: true,
                  minLength: { value: 3 },
                })}
                className="p-3 m my-2 text-gray-800 rounded-xl resize-none shadow-md transform hover:shadow-xl transition duration-400"
                name="appointmentsUserName"
                placeholder="Nom, Prénom"
                type="text"
              />
              {errors.appointmentsUserName && <p>Nom et prénom requis</p>}
              <input
                {...register('appointmentsEmail', {
                  required: true,
                  minLength: { value: 3 },
                })}
                className="p-3 my-2 text-gray-800 rounded-xl resize-none shadow-md transform hover:shadow-xl transition duration-400"
                placeholder="Email"
                type="email"
                name="appointmentsEmail"
              />
              {errors.appointmentsEmail && <p>Email requis</p>}
              <input
                {...register('brandModel', {
                  required: true,
                  minLength: { value: 3 },
                })}
                className="p-3 m my-2 text-gray-800 rounded-xl resize-none shadow-md transform hover:shadow-xl transition duration-400"
                name="brandModel"
                placeholder="Marque, Modèle"
                type="text"
              />
              {errors.brandModel && <p>Marque et modèle requis</p>}
              <input
                {...register('appointmentsImmatriculation', {
                  required: true,
                  minLength: { value: 3 },
                })}
                className="p-3 my-2 text-gray-800 rounded-xl resize-none shadow-md transform hover:shadow-xl transition duration-400"
                placeholder="Immatriculation"
                type="text"
                name="appointmentsImmatriculation"
              />
              {errors.immatriculation && <p>Immatriculation requise</p>}
              <textarea
                {...register('appointmentsContent', {
                  required: true,
                  minLength: { value: 1 },
                })}
                className="p-3 h-24 my-2 text-gray-800 rounded-xl resize-none shadow-md transform hover:shadow-xl transition duration-400"
                placeholder="Travaux à réaliser"
                name="appointmentsContent"
                type="text"
              />
              {errors.appointmentsContent && <p>Date requise</p>}
              <Controller
                name="appointmentDate"
                control={control}
                render={({ field: { onChange, value } }) => (
                  <ReactDatePicker
                    onChange={onChange}
                    selected={value}
                    className="p-3 my-2 w-80 text-gray-800 rounded-xl shadow-md transform hover:shadow-xl transition duration-400"
                    placeholderText="Date de rendez-vous"
                  />
                )}
              />
              <button
                type="submit"
                className="py-4 mt-2 mb-10 text-lg bg-gradient-to-r from-yellow-400 to-red-500 rounded-xl text-gray-800 shadow-md transform hover:shadow-xl transition duration-400"
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
