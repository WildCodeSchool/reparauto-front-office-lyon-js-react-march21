import { useForm } from 'react-hook-form';

export default function Contact() {

  const { register, handleSubmit, formState:{ errors }} = useForm();
  const onSubmit = data => {
    console.log(data)
  }
  
  return (
    <div  className="flex flex-col justify-center ">
      <div className="h-full sm:max-w-xl sm:mx-auto">
        <div className="flex flex-col shadow-lg">
          <div className="bg-gray-200 flex justify-center sm:mt-10 md:mt-0 sm:py-10 md:py-8 px-20">
            <h2 className="text-gray-800 text-xl font-semibold py-4">N'hésitez pas à nous contacter !</h2>
          </div>
          <div className="bg-gray-300 w-full h-auto flex flex-col items-center ">
            <div className="flex flex-col items-center py-2 space-y-3">
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="w-3/4 flex flex-col ">
              <input 
              {...register("firstName",{ pattern: /^[A-Za-z]+$/i, required:true, minLength:{value:3, }})}
              className="p-3 my-2 text-gray-500 rounded-xl resize-none hover:shadow-2xl"
              name="firstName"
              placeholder="Prénom"
              type='text'
              >
              </input>
              {errors.firstName && <p>Prénom requis (lettres uniquement)</p>}
              <input 
              {...register('lastName',{ pattern: /^[A-Za-z]+$/i, required:true, minLength:{value:3}})}
              className="p-3 my-2 text-gray-500 rounded-xl resize-none  hover:shadow-2xl"
              name="lastName"
              placeholder="Nom"
              type='text'
              >
              </input>
              {errors.lastName && <p>Nom requis (lettres uniquement)</p>}
              <input 
              {...register('email',{required:true, minLength:{value:3}})}
              className="p-3 my-2 text-gray-500 rounded-xl resize-none hover:shadow-2xl"
              placeholder="Email"
              type='email'
              name="email"
              >
              </input>
              {errors.email && <p>Email requis</p>}
              <textarea
              {...register('message',{required:true, minLength:{value:1}})}
              className="p-3 h-24 my-2 text-gray-500 rounded-xl resize-none hover:shadow-2xl"
              placeholder="laisser nous un message"
              name="message"
              type='text'
              >
              </textarea>
              {errors.message && <p>Message requis</p>}
              <button  className="py-4 mt-2 mb-20 text-lg bg-gradient-to-r from-yellow-400 to-red-500 rounded-xl text-gray-800 hover:shadow-2xl"
              >Envoyez
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}