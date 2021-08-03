import 'firebase/firestore';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useToasts } from 'react-toast-notifications';

export default function Contact() {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append('picture', data.picture[0]);

    const res = await fetch('http://localhost:4000/picture', {
      method: 'POST',
      body: formData,
    }).then((res) => res.json());
    alert(JSON.stringify(res));
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
            <h2 className="custom-font flex justify-center align-center text-yellow-400 md:text-xl sm:text-lg font-semibold md:py-5 py-4">
              N' hésitez pas à nous contacter !
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
                {...register('picture')}
                type="file"
                name="picture"
                className="py-4 my-2 text-lg bg-white  rounded-xl text-gray-800 hover:shadow-lg"
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
  );
}
