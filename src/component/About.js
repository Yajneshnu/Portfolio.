import React from 'react'
import './Css.css'


function About() {
    const pdfFilePath = './YajneshNU.pdf';
  return (
    <div>
            <section className="about" id="about">
        <div className="content">
          <div className="title"><span>About Me</span></div>
          <div className="about-details">
            <div className="left">
              <img src="https://cdn.glitch.global/a2d5a354-21e4-46c3-b866-966647dcd298/office-worker.png?v=1699896161441" alt="About Me" />
            </div>
            <div className="right">
              <div className="topic">
Designing Is My Passion</div>
              <p>
              "Hi, I'm Yajnesh NU, a product analyst and developemt with over a 2+    year of experience at Infosys and consilio. I'm skilled in Java, HTML, CSS, and JavaScript, React, React-native and have worked in various industries. Now, I'm seeking new challenges and opportunities for growth in a new company. I'm a team player committed to delivering high-quality solutions and exploring new possibilities together."
              </p>
              <div className="button">
                <div className="information">
                <div className="info-box">
                 
                 <i class="bx bxs-phone"></i>
                 <span> : +91 8762120679</span>
            
               </div>
               <div className="info-box">
                 <i className="bx bxs-envelope"></i>
                 
                 <span > : yajneshnu@gmail.com</span>
            
               </div>
               
               <a href="mailto:yajneshnu@gmail.com" className="btn"></a>
                </div>
                <a href={pdfFilePath} download="Yajnesh-U.pdf">
                <button  style={{marginTop:50}}>Download CV</button> </a>
              </div>
              
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
