import React from "react";
import { useNavigate } from "react-router-dom";

function NavBar() {
  const navigate = useNavigate();
  return (
    <nav className="navbar">
      <img
        style={{
          width: "100px",
          paddingLeft: "10px",
          marginTop: "3px",
          objectFit: "contain",
        }}
        src="https://cdn-icons-png.flaticon.com/128/5977/5977590.png"
      />
      <div style={{ display: "flex", marginLeft: "90px", fontSize: "17px" }}>
        <a class="nav-item nav-link active" href="/home">
          Home
        </a>
        <a
          style={{ paddingLeft: "20px" }}
          class="nav-item nav-link"
          href="/movies"
        >
          Movies
        </a>
      </div>
      <img
        style={{ width: "30px", marginLeft: "750px", cursor: "pointer" }}
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH8SsHfu3DAVEY1y3auWR4XOLYjs_s7t4XPQ&usqp=CAU"
        onClick={() => {
          navigate("/");
        }}
      />
      <h6 style={{padding:'5px',color:'white'}}>Logout</h6>
    </nav>
  );
}

export default NavBar;
