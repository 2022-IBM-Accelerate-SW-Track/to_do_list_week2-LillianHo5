import React, { Component } from "react";
import "./About.css";
import profile_pic from "../assets/profile_pic.jpg";

export default class About extends Component {
  render() {
    return (
      <div>
        <div>
          <div class="split left">
            <div className="centered">
              <img
                className="profile_image"
                src={profile_pic}
                alt="Profile Pic"
              ></img>
            </div>
          </div>
          <div className="split right">
            <div className="centered">
              <div className="name_title">Lillian Ho</div>
              <div className="brief_description">
                <p>
                  Hello! My name is Lillian Ho, and I am a rising second year at UC San Diego studying computer science. In 
                  my free time, I enjoy going on hikes and spending time with my loved ones. I also enjoy playing video
                  games and occasionally knitting.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    )
  }
}