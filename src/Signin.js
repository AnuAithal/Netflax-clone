import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    navigate("/home");
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
        <div class="form" style={{ marginTop: "-25px" }}>
          <form class="login-form" onSubmit={handleSubmit}>
            <h2
              style={{
                color: "white",
                marginLeft: "-133px",
                marginTop: "-10px",
                paddingBottom: "10px",
              }}
            >
              Sign up
            </h2>

            <input
              class="inp"
              type="text"
              id="username"
              placeholder="Email"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              class="inp"
              type="password"
              id="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit" style={{ alignContent: "center" }}>
              Sign up
            </button>
          </form>
          <p
            style={{
              color: "white",
              fontSize: "13px",
              marginLeft: "-47px",
              paddingTop: "40px",
            }}
          >
            Already have an account?{" "}
            <span style={{ fontWeight: "bold", cursor:'pointer' }} onClick={()=> {navigate("/login")}}>Sign in.</span>
          </p>
          
        </div>
      </div>
    </div>
  );
};

export default Signin;
