 import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
 //import utilStyles from '../styles/utils.module.css'
import {useState} from 'react';
import { useForm } from 'react-hook-form';

export default function Contact() {

  //const apiBase = process.env.REACT_APP_API_BASE_URL;
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
      <div class=" bg-gray-300  py-2 flex flex-col justify-center sm:py-0  md:py-6 ">
      <div class=" sm:max-w-xl sm:mx-auto">
        <div class="bg-white min-w-1xl flex flex-col sm:rounded-xl md:rounded-none shadow-lg">
          <div class="px-12 py-2">
            <h2 class="text-gray-800 text-l font-semibold">Besoin de renseignements supplémentaires ?</h2>
          </div>
          <div class="bg-gray-200 w-full h-full flex flex-col items-center ">
            <div class="flex flex-col items-center py-2 space-y-3">
            </div>
            <div class="w-3/4 flex flex-col">
              <input 
              class="p-3 my-2 text-gray-500 rounded-xl resize-none"
              placeholder="Prenom"
              required={true}
              >
              </input>
              <input 
              class="p-3 my-2 text-gray-500 rounded-xl resize-none"
              placeholder="Nom"
              required={true}
              >
              </input>
              <input 
              class="p-3 my-2 text-gray-500 rounded-xl resize-none"
              placeholder="email"
              >
              </input>
              <input
              class="p-3 h-20 my-2 text-gray-500 rounded-xl resize-y"
              placeholder="laisser nous un message"
              >
              </input>
              <button class="py-3 my-2 text-lg bg-gradient-to-r from-yellow-400 to-red-500 rounded-xl text-white"
              >Envoyez
              </button>
            </div>
          </div>
        </div>

      </div>
    
          {/*<input
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
          </input>*/}
    </div>
  )
}