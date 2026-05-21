import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

function Signup() {

  const navigate = useNavigate();

  const [signupData, setSignupData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {

    setSignupData({
      ...signupData,
      [e.target.name]: e.target.value,
    });
  };



  const handleSignup = async (e) => {

    e.preventDefault();

    try {

      const response = await axios.post(
        " https://adharshlogin.onrender.com/signup",
        signupData
      );

      console.log(response.data);

      if (response.data.message === "Signup successful") {

        alert("Signup Successful");

        // GO TO LOGIN PAGE
        navigate("/login");

      } else {

        alert(response.data.message);
      }

    } catch (error) {

      console.log(error);

      alert("Signup Failed");
    }
  };



  return (

    <div className="page">

      <form className="auth-form" onSubmit={handleSignup}>

        <h2>Signup</h2>

        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          onChange={handleChange}
          required
        />

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
          Signup
        </button>

        <p>
          Already have account?
          <Link to="/login"> Login</Link>
        </p>

      </form>

    </div>
  );
}

export default Signup;