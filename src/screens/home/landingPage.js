import React from "react";
import imageSrc from "../images/music_note.jpg";
import "./landigPage.css";

export default function LandingPage() {
  return (
    <div className="fullscreen-wrapper">
      <div className="App">
        <img src={imageSrc} className="Music_icon" alt="logo" />
        <h1 className="welc_text">Welcome to music player!</h1>
        <a href="http://localhost:3000/home">
          <button type="button" className="pressButton">
            Star playing music
          </button>
        </a>
      </div>
    </div>
  );
}
