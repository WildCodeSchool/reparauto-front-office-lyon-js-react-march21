import axios from 'axios';
import Image from 'next/image';
import fr from 'date-fns/locale/fr';
import { motion } from 'framer-motion';
import { useForm, Controller } from 'react-hook-form';
import { useToasts } from 'react-toast-notifications';
import ReactDatePicker, { registerLocale } from 'react-datepicker';
import avatar from '../public/images/avatar.png';

export default function Appointements() {
  registerLocale('fr', fr);
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
        className="flex justify-center mt-10"
      >
        <div className=" bg-gray-500">
          <div className="bg-gray-600 md:rounded-t-xl hover:shadow-lg">
            <h2 className=" mx-20 custom-font flex justify-center text-yellow-400 text-2xl  md:py-5 py-4">
              Prenons rendez-vous !
            </h2>
          </div>
          <hr className="   bg-gradient-to-r from-yellow-400 to-red-500 h-px border-none " />
          <div className="flex  justify-evenly  bg-gray-500">
            <Image
              src={avatar}
              alt="avatar"
              layout="responsive"
              width="30"
              height="30"
            />
            <Image
              src={avatar}
              alt="avatar"
              layout="responsive"
              width="30"
              height="30"
            />
          </div>
        </div>
      </motion.div>
    </>
  );
}
