import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useToasts } from 'react-toast-notifications';
// import Image from 'next/image';
// import bgImage from '../public/images/bgCubes.jpg';

export default function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const { addToast } = useToasts();

  const onSubmit = (data) => {
    console.log(data);

    axios({
      method: 'post',
      url: '/api/contact',
      data: {
        contactUserName: data.contactUserName,
        contactContent: data.contactContent,
        contactEmail: data.contactEmail,
        contactImmat: data.contactImmat,
        contactBrandModel: data.contactBrandModel,
      },
    })
      .then((reponse) => {
        // On traite la suite une fois la réponse obtenue

        console.log(reponse.data);
      })
      .catch((erreur) => {
        // On traite ici les erreurs éventuellement survenues

        console.log(erreur);
      });
    addToast(
      `Votre mail a bien été envoyé, je vous répondrais dés que possible a votre adresse: ${data.contactEmail}, merci !`,
      {
        appearance: 'success',
        autoDismissTimeout: '4000',
        autoDismiss: true,
      }
    );
    reset();
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.1 }}
      className="flex flex-col sm:mt-0 md:mt-10 xl:mt-32 justify-center "
    >
      <div className=" sm:max-w-xl sm:mx-auto">
        <div className="flex flex-col item-center shadow-lg transform hover:shadow-2xl transition duration-400">
          <div className="bg-gray-600 flex justify-center md:rounded-t-xl sm:py-4 md:py-6 shadow-lg transform hover:shadow-2xl transition duration-400 px-14">
            <h2 className="flex justify-center align-center text-yellow-400 text-xl font-semibold md:py-8 py-4">
              N'hésitez pas à nous contacter !
            </h2>
          </div>
          <hr className="  w-6/6 bg-gradient-to-r from-yellow-400 to-red-500 h-px border-none " />
          <div className="bg-gray-500 flex flex-col items-center">
            <div className="flex flex-col items-center py-2 space-y-3" />
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="w-3/4 flex flex-col "
            >
              <input
                {...register('contactUserName', {
                  required: true,
                  minLength: { value: 3 },
                })}
                className="p-3 my-2 text-gray-500 rounded-lg resize-none shadow-lg transform hover:shadow-2xl transition duration-400"
                name="contactUserName"
                placeholder="Nom et prénom"
                type="text"
              />
              {errors.contactUserName && <p>Nom et prénom requis</p>}
              <input
                {...register('contactBrandModel', {
                  required: true,
                  minLength: { value: 2 },
                })}
                className="p-3 my-2 text-gray-500 rounded-lg resize-none shadow-lg transform hover:shadow-2xl transition duration-400"
                name="contactBrandModel"
                placeholder="Marque et modèle"
                type="text"
              />
              {errors.contactBrandModel && <p>Marque et modèle requis</p>}
              <input
                {...register('contactEmail', {
                  required: true,
                  minLength: { value: 3 },
                })}
                className="p-3 my-2 text-gray-500 rounded-lg resize-none shadow-lg transform hover:shadow-2xl transition duration-400"
                placeholder="Email"
                type="email"
                name="contactEmail"
              />
              {errors.contactEmail && <p>Email requis</p>}
              <input
                {...register('contactImmat', {
                  required: true,
                  minLength: { value: 3 },
                })}
                className="p-3 my-2 text-gray-500 rounded-lg resize-none shadow-lg transform hover:shadow-2xl transition duration-400"
                placeholder="Immatriculation"
                type="text"
                name="contactImmat"
              />
              {errors.contactImmat && <p>Immatriculation requise</p>}
              <textarea
                {...register('contactContent', {
                  required: true,
                  minLength: { value: 1 },
                })}
                className="p-3 h-24 my-2 text-gray-500 rounded-lg resize-none shadow-lg transform hover:shadow-2xl transition duration-400"
                placeholder="Laissez nous un message"
                name="contactContent"
                type="text"
              />
              {errors.contactContent && <p>Message requis</p>}

              {/*
                    <input
                      {...register('ContactPhotos', {
                  name: 'ContactPhotos',
                })}
                      type="file"
                      // onChange={handleFiles}
                      className="py-4 my-2 text-lg bg-white  rounded-xl text-gray-800 hover:shadow-lg"
                    />
                    */}
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
  );
}
