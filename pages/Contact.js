// import Head from 'next/head'
// import Layout, { siteTitle } from '../components/layout'
// import utilStyles from '../styles/utils.module.css'
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
      
      <div className="Contact-form">
     <p>
        Suggestions, thanks or love notes? Let us know below 😃
      </p>
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
          required={true}
          {...register('firstName')}
        />
        <input
          className="{textField}"
          id="outlined-basic"
          label="Lastname"
          placeholder="Connor"
          variant="outlined"
          required={true}
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
          required={true}
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
          required={true}
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
      </form>

    </div>
  )
}