import { useForm, Controller } from 'react-hook-form';
import { motion } from 'framer-motion';
import axios from 'axios';
import { useToasts } from 'react-toast-notifications';
import ReactDatePicker, { registerLocale } from 'react-datepicker';

import fr from 'date-fns/locale/fr';

registerLocale('fr', fr);

export default function Appointements() {
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm();

  const { addToast } = useToasts();

  const isWeekDay = (date) => {
    const day = date.getDay();
    return day !== 0 && day !== 6;
  };

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
    reset();
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1.1 }}
        className="flex flex-col md:mt-8 xl:mt-18 sm:mt-0 justify-center "
      >
        <div className="h-full sm:max-w-xl sm:mx-auto">
          <div className="flex flex-col item-center shadow-lg ">
            <div className="bg-gray-600 flex justify-center md:rounded-t-xl hover:shadow-lg">
              <h2 className="custom-font text-yellow-400 text-2xl font-semibold md:py-5 py-4">
                Prenons rendez-vous !
              </h2>
            </div>
            <hr className="  w-6/6 bg-gradient-to-r from-yellow-400 to-red-500 h-px border-none " />
            <div className="bg-gray-500 md:w-auto sm:w-screen flex flex-col items-center">
              <div className="flex flex-col items-center py-2 space-y-3" />
              <form
                onSubmit={handleSubmit(onSubmit)}
                className=" flex flex-col sm:w-screen sm:w-80 md:w-96 md:mx-12 "
              >
                <input
                  {...register('appointmentsUserName', {
                    required: true,
                    minLength: { value: 3 },
                  })}
                  className="p-3 m my-2 text-gray-800 rounded-md resize-none shadow-md transform hover:shadow-xl transition duration-400"
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
                  className="p-3 my-2 text-gray-800 rounded-md resize-none shadow-md transform hover:shadow-xl transition duration-400"
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
                  className="p-3 m my-2 text-gray-800 rounded-md resize-none shadow-md transform hover:shadow-xl transition duration-400"
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
                  className="p-3 my-2 text-gray-800 rounded-md resize-none shadow-md transform hover:shadow-xl transition duration-400"
                  placeholder="Immatriculation"
                  type="text"
                  name="appointmentsImmatriculation"
                />
                {errors.appointmentsImmatriculation && (
                  <p>Immatriculation requise</p>
                )}
                <textarea
                  {...register('appointmentsContent', {
                    required: true,
                    minLength: { value: 1 },
                  })}
                  className="p-3 h-24 my-2 text-gray-800 rounded-md resize-none shadow-md transform hover:shadow-xl transition duration-400"
                  placeholder="Travaux à réaliser"
                  name="appointmentsContent"
                  type="text"
                />
                {errors.appointmentsContent && <p>Texte requis</p>}
                <Controller
                  name="appointmentDate"
                  control={control}
                  render={({ field: { onChange, value } }) => (
                    <ReactDatePicker
                      locale="fr"
                      onChange={onChange}
                      selected={value}
                      calendarStartDay={1}
                      filterDate={isWeekDay}
                      minDate={new Date()}
                      className="p-3 sm:w-screen md:w-96 my-2 text-gray-500 rounded-md shadow-md transform hover:shadow-xl transition duration-400"
                      placeholderText="Date de rendez-vous"
                    />
                  )}
                />
                <motion.button
                  whileHover={{
                    scale: 1.03,
                    originY: 0,
                    color: '#5c5453',
                    backgroundColor: '#fdb31f',
                  }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="flex justify-center bg-gray-300 border-solid border-2 border-yellow-500 text-lg mt-5 mb-10 shadow-lg hover:shadow-2xl cursor-pointer px-4 py-4 rounded-lg align-center"
                >
                  Envoyer
                </motion.button>
              </form>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}
