/* eslint-disable prettier/prettier */
import { useForm } from 'react-hook-form';
import axios from 'axios';

// require('dotenv').config();


/*
{
  firstName: "aaaa",
 lastName: "aaaa",
  email: "maupied69@hotmail.com",
   immatriculation: "aaaaaa",
    message: "a"
  }
*/


export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    axios
      // .post(`${process.env.REACT_APP_API_BASE_URL}/contact-mail`, data)
      .post(`http://localhost:1337/contact-mails`, data)
      .then(() => {
        // eslint-disable-next-line no-alert
        console.log(data);
        window.alert('Votre email a bien été envoyé (ne spammez pas trop :-)');
      });
  }

  return (

    <div className="flex flex-col md:mt-10 sm:mt-0 justify-center ">
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
                  required: true,
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
                placeholder="laissez nous un message"
                name="message"
                type="text"
              />
              {errors.message && <p>Message requis</p>}
              <button
                type="button"
                className="py-4 my-2  text-lg bg-white  rounded-xl text-gray-800 hover:shadow-lg"
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
