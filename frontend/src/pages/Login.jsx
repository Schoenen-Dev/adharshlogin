import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

function Login() {

  const navigate = useNavigate();

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {

    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
  };



  const handleLogin = async (e) => {

    e.preventDefault();

    try {

      const response = await axios.post(
        " https://adharshlogin.onrender.com/login",
        loginData
      );

      console.log(response.data);

      if (response.data.message === "Login successful") {

        alert("Login Successful");

        navigate("/dashboard");

      } else {

        alert(response.data.message);
      }

    } catch (error) {

      console.log(error);

      alert("Login Failed");
    }
  };



  return (

    <div className="page">

      <form className="auth-form" onSubmit={handleLogin}>

        <h2>Login</h2>

        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          onChange={handleChange}
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          onChange={handleChange}
          required
        />

        <button type="submit">
          Login
        </button>

        <p>
          Don't have account?
          <Link to="/"> Signup</Link>
        </p>

      </form>

    </div>
  );
}

export default Login;