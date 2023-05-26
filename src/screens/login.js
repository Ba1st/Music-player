import React from "react";
import { login } from "./spotify";
import "./login.css";

export default function Login() {
  return (
    <div className="login-page">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Spotify_icon.svg/991px-Spotify_icon.svg.png"
        alt="logo-spotify"
        className="logo"
      />
      <a href={login}>
        <div className="login-btn">LOG IN</div>
      </a>
    </div>
  );
}
