import React from 'react';
import './Css.css'
function Skill() {
    const SkillBox = ({ title, percentage }) => (
        <div className="box">
          <div className="topic">{title}</div>
          <div className="per">{percentage}</div>
        </div>
      );
  return (
    <div>
        <section className="skills" id="skills">
    <div className="content">
      <div className="title"><span>My Skills</span></div>
      <div className="skills-details">
        <div className="text">
          <div className="topic">Skills Reflects Our Knowledge</div>
          <p>
            "I bring a wealth of experience from my time at Infosys, where I excelled in projects focusing on Front-End.
            Proficient in React, React-native, SFMC, Java, I am dedicated to continuous learning, currently exploring
            cloud technologies for future opportunities. Eager to contribute my expertise to dynamic projects and further
            enhance my skills in a collaborative and challenging environment."
          </p>
          <div className="experience">
            <div className="num">2+</div>
            <div className="exp">
              Years Of <br />
              Experience
            </div>
          </div>
        </div>
        <div className="boxes">
          <SkillBox title="React" percentage="90%" />
          <SkillBox title="React-native" percentage="80%" />
          <SkillBox title="JavaScript" percentage="70%" />
          <SkillBox title="SFMC" percentage="60%" />
          {/* Add more skill boxes as needed */}
        </div>
      </div>
    </div>
  </section>
    </div>
  )
}

export default Skill
