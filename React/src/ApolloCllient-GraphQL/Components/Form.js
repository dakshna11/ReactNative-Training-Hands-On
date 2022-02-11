import React, { useState } from "react";
import { CREATE_USER_MUTATION } from "../GraphQL/Mutations";
import { useMutation } from "@apollo/client";

function Form() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [createUser, { error }] = useMutation(CREATE_USER_MUTATION);

  const addUser = () => {
    createUser({
      variables: {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
      },
    });

    if (error) {
      console.log(error);
    }
    document.getElementById("sample").reset()
  };
  return (
    <form id="sample">
      <input type="text" placeholder="First Name" onChange={(e) => {
        setFirstName(e.target.value);}}
      /><br/>
      <input type="text" placeholder="Last Name" onChange={(e) => {
          setLastName(e.target.value);}}
      /><br/>
      <input type="text" placeholder="Email" onChange={(e) => {
          setEmail(e.target.value);}}
      /><br/>
      <input type="password" placeholder="Password" onChange={(e) => {
          setPassword(e.target.value);}}
      /><br/>
      <button onClick={addUser}> Create User</button>
    </form>
  );
}

export default Form;