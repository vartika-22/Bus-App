import React, { useState, useEffect } from "react";

import  "./Login_style.css";
import axios from "axios";
import { Link } from "react-router-dom/cjs/react-router-dom.min";


const Login = ({ setUserState }) => {
  
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [user, setUserDetails] = useState({
    email: "",
    password: "",
  });

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setUserDetails({
      ...user,
      [name]: value,
    });
  };
  const validateForm = (values) => {
    const error = {};
    const regex = /^[^\s+@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.email) {
      error.email = "Email is required";
    } else if (!regex.test(values.email)) {
      error.email = "Please enter a valid email address";
    }
    if (!values.password) {
      error.password = "Password is required";
    }
    return error;
  };

  const loginHandler = (e) => {
    e.preventDefault();
    setFormErrors(validateForm(user));
    setIsSubmit(true);
    // if (!formErrors) {

    // }
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(user);
      axios.post("http://localhost:9002/login", user).then((res) => {
        alert(res.data.message);
        setUserState(res.data.user);
        
      });
    }
  }, [formErrors]);
  return (
    <div className="login">
      <form >
        <h1 className="h-1">Login</h1>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          onChange={changeHandler}
          value={user.email}
        />
        <p className="error">{formErrors.email}</p>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          onChange={changeHandler}
          value={user.password}
        />
        <p className='error'>{formErrors.password}</p>
        <button className="submit-btn" onClick={loginHandler}>
          Login
        </button>
      </form>
      <small>Not yet registered?</small> <a href="/signup">Register Now</a>
    </div>
  );
};
export default Login;
