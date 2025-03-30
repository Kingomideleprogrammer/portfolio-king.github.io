import React from "react";
import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import profile_img from "../../assets/king_about_profile.svg";
const About = () => {
  return (
    <div className="about">
      <div className="about-title">
        <h1>About Me</h1>
        <img src={theme_pattern} alt="about me" />
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={profile_img} alt="profile img" className="profile_img" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              I'm a dynamic Full Stack Developer with a robust background in
              computer science and a passion for creating innovative software
              solutions.
            </p>
            <p>
              With expertise spanning Java, Python, and JavaScript, I thrive in
              collaborative environments where I can contribute to projects from
              concept to deployment
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>HTML & CSS</p>
              <hr style={{ width: "70%" }} />
            </div>
            <div className="about-skill">
              <p>React JS</p>
              <hr style={{ width: "70%" }} />
            </div>
            <div className="about-skill">
              <p>JavaScript</p>
              <hr style={{ width: "60%" }} />
            </div>
            <div className="about-skill">
              <p>Next JS</p>
              <hr style={{ width: "30%" }} />
            </div>
            <div className="about-skill">
              <p>Java</p>
              <hr style={{ width: "80%" }} />
            </div>
            <div className="about-skill">
              <p>Python</p>
              <hr style={{ width: "40%" }} />
            </div>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>4+</h1>
          <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>90+</h1>
          <p>PROJECTS COMPLETED</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>15+</h1>
          <p>HAPPY CLIENTS</p>
        </div>
      </div>
    </div>
  );
};

export default About;
