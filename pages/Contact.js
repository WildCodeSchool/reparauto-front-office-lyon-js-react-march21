<<<<<<< HEAD
// import Head from 'next/head';
// import Layout, { siteTitle } from '../components/layout';
// import utilStyles from '../styles/utils.module.css';
import { useState } from 'react';
//import { useForm } from 'react-hook-form';

export default function Contact() {
  // const apiBase = process.env.REACT_APP_API_BASE_URL;
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (form) => {
    axios
      .post(`${apiBase}/contact`, form)
      .then((res) => reset())
      .catch((err) => console.log(err));
  };

  return (
    <div className="Contact-form">
      <p>Suggestions, thanks or love notes? Let us know below 😃</p>
      <form
        className=""
        onSubmit={handleSubmit(onSubmit)}
        method="POST"
        action="send"
      >
        <input
          className="{textField}"
          id="outlined-basic"
          label="firstname"
          placeholder="Sarah"
          variant="outlined"
          required
          {...register('firstName')}
        />
        <input
          className="{textField}"
          id="outlined-basic"
          label="Lastname"
          placeholder="Connor"
          variant="outlined"
          required
          {...register('lastName')}
        />
        <input
          className="{textField}"
          id="outlined-basic"
          label="Email"
          name="email"
          placeholder="sarah.connor@skynet.com"
          variant="outlined"
          type="email"
          required
          {...register('email')}
        />
        <input
          className="{textField}"
          id="outlined-multiline-basic"
          label="Text here"
          multiline
          placeholder="Great website! Keep up the good work :)"
          rows={6}
          defaultValue=""
          variant="outlined"
          required
          {...register('text')}
        />
        <div>
          <button
            className="{button}"
            variant="outlined"
            type="submit"
            onClick={handleOpen}
          >
            Send
          </button>
          {/* <input
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            className="{modal}"
            open={open}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
              timeout: 500,
            }}
          >
            <Fade in={open}>
              <div className="{paper}">
                <p>your request has been registered! </p>
              </div>
            </Fade>
          </input> */}
        </div>
      </form>
=======
import { useForm } from 'react-hook-form';

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="flex flex-col md:mt-10 sm:mt-0 justify-center ">
      <div className="h-full sm:max-w-xl sm:mx-auto">
        <div className="flex flex-col item-center shadow-lg ">
          <div className="bg-gray-200 flex justify-center  sm:py-6 md:py-6 px-20 hover:shadow-l">
            <h2 className="text-gray-800 text-xl font-semibold py-4">
              N'hésitez pas à nous contacter !
            </h2>
          </div>
          <div className="bg-gray-300 w-full h-auto flex flex-col items-center ">
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
                {...register('email', {
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
                type="submit"
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
>>>>>>> 5c4afa1466148f994b22accfc0d4f9bba68fa399
    </div>
  );
}
