import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useToasts } from 'react-toast-notifications';

export default function Contact() {
  // affichage miniatures des file uploads
  /*
  function handleFiles(files) {
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const imageType = /^image\//;
  
      if (!imageType.test(file.type)) {
        continue;
      }
  
      const img = document.createElement("img");
      img.classList.add("obj");
      img.file = file;
      const preview = document.querySelector('#preview');
      preview.appendChild(img); // En admettant que "preview" est l'élément div qui contiendra le contenu affiché.
  
      const reader = new FileReader();
      reader.onload = (function(aImg) { return function(e) { aImg.src = e.target.result; }; })(img);
      reader.readAsDataURL(file);
    }
  }
  */

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
          <div className="bg-gray-200 flex flex-col items-center shadow-md transform hover:shadow-2xl transition duration-500">
            <div className="flex flex-col items-center py-2 space-y-3" />
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="w-3/4 flex flex-col "
            >
              <input
                {...register('contactUserName', {
                  // pattern: /^[A-Za-z]+$/i,
                  required: true,
                  minLength: { value: 3 },
                })}
                className="p-3 my-2 text-gray-500 rounded-xl resize-none hover:shadow-lg"
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
                className="p-3 my-2 text-gray-500 rounded-xl resize-none  hover:shadow-lg"
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
                className="p-3 my-2 text-gray-500 rounded-xl resize-none shadow-md transform hover:shadow-xl transition duration-400"
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
                className="p-3 my-2 text-gray-500 rounded-xl resize-none shadow-md transform hover:shadow-xl transition duration-400"
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
                className="p-3 h-24 my-2 text-gray-500 rounded-xl resize-none shadow-md transform hover:shadow-xl transition duration-400"
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

              <button
                type="submit"
                className="py-4 mt-2 mb-20 text-lg bg-gradient-to-r from-yellow-400 to-red-500 rounded-xl text-gray-800 shadow-md transform hover:shadow-xl transition duration-400"
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
