import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

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
        "http://localhost:5000/signup",
        signupData
      );

      if (response.data.message === "Signup successful") {

        alert("Signup Successful");

        // Go to login page ONLY after signup success
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
    <div>

      <h1>Signup Page</h1>

      <form onSubmit={handleSignup}>

        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          onChange={handleChange}
        />

        <br /><br />

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
          Signup
        </button>

      </form>

      <br />

      <Link to="/login">
        Already have account? Login
      </Link>

    </div>
  );
}

export default Signup;