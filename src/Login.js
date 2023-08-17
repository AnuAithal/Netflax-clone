import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    if (username.trim() === '' || password.trim() === '') {
      toast.error('Enter a valid username and password', {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 4000,
      });
    }else{
      navigate('/home');
    }
  };
  const imageURL =
    "https://149695847.v2.pressablecdn.com/wp-content/uploads/2019/05/apps.55787.9007199266246365.687a10a8-4c4a-4a47-8ec5-a95f70d8852d.jpg";
  return (
    <div className="login" style={{ backgroundImage: `url(${imageURL})` }}>
      <img
        style={{ width: "130px", paddingTop: "10px", paddingLeft: "20px" }}
        src="https://www.freepnglogos.com/uploads/netflix-logo-0.png"
      />
      <div class="login-page">
        <div class="form">
          <form class="login-form" onSubmit={handleSubmit}>
            <h2
              style={{
                color: "white",
                marginLeft: "-140px",
                marginTop: "-10px",
                paddingBottom: "10px",
              }}
            >
              Sign In
            </h2>

            <input
              class="inp"
              type="text"
              id="username"
              placeholder="Email"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              style={{color:'white'}}
            />
            <input
              class="inp"
              type="password"
              id="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{color:'white'}}
            />
            <button type="submit" style={{ alignContent: "center" }}>
              Sign in
            </button>
          </form>
          <p
            style={{
              color: "white",
              fontSize: "13px",
              marginLeft: "-75px",
              paddingTop: "40px",
            }}
          >
            New to Netflix?{" "}
            <span style={{ fontWeight: "bold", cursor:'pointer' }} onClick={()=> {navigate("/signin")}}>Sign up now.</span>
          </p>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
