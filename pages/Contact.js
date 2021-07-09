/* eslint-disable prettier/prettier */
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useToasts } from 'react-toast-notifications';


export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { addToast } = useToasts();

  const onSubmit = (data) => {
    console.log(data);
    axios({
      method: 'post',
      url: '/api/contact',
      data: {
        ContactContent: data.ContactContent,
        UserEmail: data.UserEmail,
        CarDescription: data.CarDescription,
        ContactPhotos: data.ContactPhotos,
        ContactImmat: data.ContactImmat,
        ContactModel: data.ContactModel,
        ContactBrand: data.ContactBrand,
      },
    })
      .then(function (reponse) {
        // On traite la suite une fois la réponse obtenue
        addToast(
          'Votre mail a bien été envoyé, je vous répondrais dés que possible, merci !',
          {
            appearance: 'success',
            autoDismiss: true,
          }
        );
        console.log(reponse.data);
      })
      .catch(function (erreur) {
        // On traite ici les erreurs éventuellement survenues
        console.log(erreur);
      });
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.1 }}
      className="flex flex-col md:mt-10 sm:mt-0 justify-center "
    >
      <div className="h-full sm:max-w-xl sm:mx-auto">
        <div className="flex flex-col item-center shadow-lg ">
          <div className="bg-white flex justify-center md:rounded-t-xl sm:py-6 md:py-6 hover:shadow-lg px-14">
            <h2 className="text-gray-800 text-xl font-semibold py-2">
              N'hésitez pas à nous contacter !
            </h2>
          </div>
          <div className="bg-gray-200  flex flex-col items-center md:rounded-b-xl ">
            <div className="flex flex-col items-center py-2 space-y-3" />
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="w-3/4 flex flex-col "
            >
              <input
                {...register('ContactBrand', {
                  // pattern: /^[A-Za-z]+$/i,
                  required: true,
                  minLength: { value: 3 },
                })}
                className="p-3 my-2 text-gray-500 rounded-xl resize-none hover:shadow-lg"
                name="ContactBrand"
                placeholder="Marque du vehicule"
                type="text"
              />
              <input
                {...register('CarDescription', {
                  // pattern: /^[A-Za-z]+$/i,
                  required: true,
                  minLength: { value: 3 },
                })}
                className="p-3 my-2 text-gray-500 rounded-xl resize-none hover:shadow-lg"
                name="CarDescription"
                placeholder="Description du vehicule"
                type="text"
              />
              {errors.firstName && <p>Prénom requis (lettres uniquement)</p>}
              <input
                {...register('ContactModel', {
                  // pattern: /^[A-Za-z]+$/i,
                  required: true,
                  minLength: { value: 3 },
                })}
                className="p-3 my-2 text-gray-500 rounded-xl resize-none  hover:shadow-lg"
                name="ContactModel"
                placeholder="Modele du véhicule"
                type="text"
              />
              {errors.lastName && <p>Nom requis (lettres uniquement)</p>}
              <input
                {...register('UserEmail', {
                  required: true,
                  minLength: { value: 3 },
                })}
                className="p-3 my-2 text-gray-500 rounded-xl resize-none hover:shadow-lg"
                placeholder="Email"
                type="email"
                name="UserEmail"
              />
              {errors.email && <p>Email requis</p>}
              <input
                {...register('ContactImmat', {
                  required: true,
                  minLength: { value: 3 },
                })}
                className="p-3 my-2 text-gray-500 rounded-xl resize-none hover:shadow-lg"
                placeholder="Immatriculation"
                type="text"
                name="ContactImmat"
              />
              {errors.immatriculation && <p>Immatriculation requise</p>}
              <textarea
                {...register('ContactContent', {
                  required: true,
                  minLength: { value: 1 },
                })}
                className="p-3 h-24 my-2 text-gray-500 rounded-xl resize-none hover:shadow-lg"
                placeholder="laissez nous un message"
                name="ContactContent"
                type="text"
              />
              {errors.message && <p>Message requis</p>}
              <input
                {...register('ContactPhotos', {
                  name: 'ContactPhotos',
                })}
                type="file"
                className="py-4 my-2  text-lg bg-white  rounded-xl text-gray-800 hover:shadow-lg"
              />
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
