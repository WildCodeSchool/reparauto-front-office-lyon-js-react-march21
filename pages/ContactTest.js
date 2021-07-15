/* eslint-disable prettier/prettier */
// import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import axios from 'axios';
// import { useToasts } from 'react-toast-notifications';
import React from "react";
// import ReactDOM from "react-dom";
// import JSONPretty from "react-json-pretty";

export default function ContactTest() {
  const { handleSubmit, register } = useForm({
    mode: "onBlur"
  });

  // const [imageFile, setImageFile] = useState(null);

  // const handleChange = e => {
  //   e.persist(); // per ParmentierChristophe react-hook-form/issues/274
  //   // console.log("e: ", e);
  //   setImageFile(e.target.files[0]); // oops. Nothing is there..
  //   console.log(imageFile);
  // };

  const fileInput = React.createRef();

  const onSubmitFn = data => {
    // event.preventDefault();  // I believe react-hook-form handles this
    console.log(
      "onSubmitFn:",
      data,
      "  imageFile: ",
      fileInput.current.files[0].name
    );
    const fd = new FormData();
    for (let key in data) {
      fd.append(key, data[key]); // formdata doesn't take objects
    }

    fd.append(
      "image",
      fileInput.current.files[0],
      fileInput.current.files[0].name
    );
    axios
      .post("http://localhost:1337/contact-mails", fd, {
        onUploadProgress: ProgressEvent => {
          console.log(
            `Upload Progress: ${ 
              Math.round((ProgressEvent.loaded / ProgressEvent.total) * 100) 
              }%`
          );
        }
      })
      .then(res => {
        console.log("response from server: ", res);
      });
  };

  return (
    <>
      <h2>Basic Example of File Upload, using React.createRef</h2>
      <form onSubmit={handleSubmit(onSubmitFn)}>
        <div>
          <label htmlFor="avatar">
            Select a Photo
            <input
              type="file"
              id="avatar"
              name="avatar"
              multiple
              ref={fileInput}
            />
          </label>
          
        </div>

        <div>
          <label htmlFor="firstName">
            First Name
            <input
              type="text"
              placeholder="First Name"
              className="form-control"
              name="firstName"
              id="firstName"
              ref={register(...{ required: true, maxLength: 80 })}
            />
          </label>
          
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
}