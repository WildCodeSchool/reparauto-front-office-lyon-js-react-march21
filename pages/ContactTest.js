/* eslint-disable prettier/prettier */
// import { motion } from 'framer-motion';
// import { useForm } from 'react-hook-form';
import axios from 'axios';
// import { useToasts } from 'react-toast-notifications';
import React, { useState } from "react";
// import ReactDOM from "react-dom";
import JSONPretty from "react-json-pretty";

export default function ContactTest() {
  const [file, setFile] = useState(false);
  const [response, setResponse] = useState({});
  const postData = {
    title: "test"
  };
  const handleInputChange = (event) => {
    setFile(event.target.files[0]);
  };
  const upload = (e) => {
    const formData = new FormData();
    formData.append("files.profile_picture", file);
    formData.append("data", JSON.stringify(postData));
    axios({
      method: "post",
      url: "/api/contactTest",
      data: formData
    })
      .then(({ data }) => {
        setResponse(data);
        console.log("Succesfully uploaded: ", JSON.stringify(data));
      })
      .catch((error) => {
        console.log("Error: ", error.message);
      });
  };

  return (
    <div>
      Post Data:
      <JSONPretty id="json-pretty" data={postData} />
      <br />
      <br />
      <input type="file" onChange={handleInputChange} />
      <br />
      <br />
      <button onClick={upload} type='button'>Upload File</button>
      <br />
      <br />
      Response:
      <JSONPretty id="json-pretty" data={response} />
    </div>
  );
}