import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

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
        "http://localhost:5000/login",
        loginData
      );

      if (response.data.message === "Login successful") {

        alert("Login Successful");

        // Go to Dashboard page
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
    <div>

      <h1>Login Page</h1>

      <form onSubmit={handleLogin}>

        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          onChange={handleChange}
        />

        <br /><br />

        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          onChange={handleChange}
        />

        <br /><br />

        <button type="submit">
          Login
        </button>

      </form>

    </div>
  );
}

export default Login;