import React, { useState } from "react";
import "./App.css";

export default function App() {

  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: ""
  });

  const [submit, setSubmit] = useState(false);

  const [valid, setValid] = useState(false);

  const handleFirstName = (e)=>{
    setValues({...values, firstName: e.target.value})
  }

  const handleLastName = (e)=>{
    setValues({...values, lastName: e.target.value})
  }

  const handleEmail = (e)=>{
    setValues({...values, email: e.target.value})
  }

  const handleSubmit = (e)=>{
    e.preventDefault();
    if(values.firstName && values.lastName && values.email){
      setValid(true);
    }
    setSubmit(true);
  }

  return (
    <div class="form-container">
      <form class="register-form" onSubmit={handleSubmit}>
        {submit && valid ? <div class="success-message">Success! Thank you for registering</div>:null}
        <input
          onChange={handleFirstName}
          value = {values.firstName}
          id="first-name"
          class="form-field"
          type="text"
          placeholder="First Name"
          name="firstName"
        />
        {submit && !values.firstName ? <span id="first-name-error">Please enter a first name</span> : null}
        <input
          onChange={handleLastName}
          value = {values.lastName}
          id="last-name"
          class="form-field"
          type="text"
          placeholder="Last Name"
          name="lastName"
        />
        {submit && !values.lastName ? <span id="last-name-error">Please enter a last name</span>:null}
        <input
          onChange={handleEmail}
          value = {values.email}
          id="email"
          class="form-field"
          type="text"
          placeholder="Email"
          name="email"
        />
        {submit && !values.email ? <span id="email-error">Please enter an email address</span> : null}
        <button class="form-field" type="submit">
          Register
        </button>
      </form>
    </div>
  );
}
