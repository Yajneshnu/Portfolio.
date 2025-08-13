
import React, { useEffect, useState } from 'react';
// import ScrollButton from './components/ScrollButton';

import './App.css';
import '../src/component/About';
import About from '../src/component/About';
import Skill from './component/Skill';
const ScrollButton = () => (
  <div className="scroll-button">
    <a href="#home"><i className="fas fa-arrow-up"></i></a>
  </div>
);



const Navigation = ({ darkMode, toggleDarkMode }) => (
  <nav className={`navbar ${darkMode ? 'dark-mode' : ''}`}>
    <div className="logo"><a href="#">Portfolio.</a></div>
    <ul className="menu">
      <li><a href="#home">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#skills">Skills</a></li>
      <li><a href="#services">Services</a></li>
      <li><a href="#contact">Contact</a></li>
      <div className="bx bx-moon" id="darkmode" onClick={toggleDarkMode}></div>
      <div className="cancel-btn">
        <i className="fas fa-times"></i>
      </div>
    </ul>
  </nav>
);

function App() {
  
  const [scrollPosition, setScrollPosition] = useState(0);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    document.body.classList.toggle('dark-mode', newDarkMode);
    localStorage.setItem('darkModeEnabled', String(newDarkMode));
  };

  useEffect(() => {
    const isDarkModeEnabled = localStorage.getItem('darkModeEnabled') === 'true';
    setDarkMode(isDarkModeEnabled);
    document.body.classList.toggle('dark-mode', isDarkModeEnabled);
  }, []);
  useEffect(() => {
    // Sticky Navigation Menu
    const handleScroll = () => {
      const nav = document.querySelector("nav");
      const scrollBtn = document.querySelector(".scroll-button a");

      if (nav && scrollBtn) {
        if (document.documentElement.scrollTop > 20) {
          nav.classList.add("sticky");
          scrollBtn.style.display = "block";
        } else {
          nav.classList.remove("sticky");
          scrollBtn.style.display = "none";
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Side Navigation Menu
  useEffect(() => {
    const body = document.querySelector("body");
    const navBar = document.querySelector(".navbar");
    const menuBtn = document.querySelector(".menu-btn");
    const cancelBtn = document.querySelector(".cancel-btn");

    const openMenu = () => {
      if (navBar && menuBtn) {
        navBar.classList.add("active");
        menuBtn.style.opacity = "0";
        menuBtn.style.pointerEvents = "none";
        body.style.overflow = "hidden";
      }
    };

    const closeMenu = () => {
      if (navBar && menuBtn) {
        navBar.classList.remove("active");
        menuBtn.style.opacity = "1";
        menuBtn.style.pointerEvents = "auto";
        body.style.overflow = "auto";
      }
    };

    menuBtn.addEventListener('click', openMenu);
    cancelBtn.addEventListener('click', closeMenu);

    // Cleanup
    return () => {
      menuBtn.removeEventListener('click', openMenu);
      cancelBtn.removeEventListener('click', closeMenu);
    };
  }, []); // Empty dependency array means this effect runs once on mount

  // Close side navigation when clicking on links
  useEffect(() => {
    const navBar = document.querySelector(".navbar");
    const menuBtn = document.querySelector(".menu-btn");
    const navLinks = document.querySelectorAll(".menu li a");

    const closeSideNav = () => {
      if (navBar && menuBtn) {
        navBar.classList.remove("active");
        menuBtn.style.opacity = "1";
        menuBtn.style.pointerEvents = "auto";
      }
    };

    for (let i = 0; i < navLinks.length; i++) {
      navLinks[i].addEventListener("click", closeSideNav);
    }

    // Cleanup
    return () => {
      for (let i = 0; i < navLinks.length; i++) {
        navLinks[i].removeEventListener("click", closeSideNav);
      }
    };
  }, []); // Empty dependency array means this effect runs once on mount


  const openWhatsApp = () => {
    const phoneNumber = '8762120679'; // Replace with your desired phone number
    window.open(`whatsapp://send?phone=${phoneNumber}`, '_blank', 'noopener,noreferrer');
  };
  const email = 'yajneshnu.email@gmail.com';

  const sendEmail = () => {
    window.location.href = `mailto:${email}`;
  };

 
  return (
    <div className={`App ${darkMode ? 'dark-mode' : 'light-mode'}`}>
      <ScrollButton />
      <nav>
        <div className="navbar">
          <div className="logo"><a href="#">Portfolio.</a></div>
          <ul className="menu">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
            <div className="bx bx-moon" id="darkmode" onClick={toggleDarkMode}></div>
            <div className="cancel-btn">
              <i className="fas fa-times"></i>
            </div>
          </ul>
          <div className="media-icons">
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="https://github.com/Yajneshnu" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
          </div>
        </div>
        <div className="menu-btn">
          <i className="fas fa-bars"></i>
        </div>
      </nav>
      <section className="home" id="home">
        <div className="home-content">
          <div className="text">
            <div className="text-one">Hello,</div>
            <div className="text-two">I'm Yajnesh N U</div>
            <div className="text-three">Analyst</div>
            <div className="text-four">From India</div>
            <p className="text-five">
            "I'm an aspiring product analyst with a deep interest in the creative data field,
            <br/>committed to continuous learning and improving processes. <br/>
            And excited to explore new things and stay up-to-date with the latest technologies."
          </p>
          </div>
          <div className="button">
            <button onClick={sendEmail}>Hire Me</button>
          </div>
        </div>
      </section>
<About/>
     <Skill/>
      {/* Add sections for Services, Contact, and Footer */}
      <section className="services" id="services">
        <div className="content">
          <div className="title"><span>My Services</span></div>
          <div className="boxes">
            <div className="box">
              <div className="icon">
                <i className="fas fa-desktop"></i>
              </div>
              <div className="topic">Web/APP Devlopment</div>
              <p>2+ year industrial experience.</p>
            </div>
            {/* ... (Add more service boxes as needed) */}
            <div className="box">
              <div className="icon">
                <i className="fas fa-mobile"></i>
              </div>
              <div className="topic">Data Analysis</div>
              <p>2+ year industrial experience.</p>
            </div>
            <div className="box">
              <div className="icon">
                <i className="fas fa-tools"></i>
              </div>
              <div className="topic">Project Tools</div>
              <p>2+ year experience in Project mangagement Tools like GIT,Jira, ServiceNow.</p>
            </div>
            <div className="box">
              <div className="icon">
                <i className="fas fa-cloud"></i>
              </div>
              <div className="topic">Cloud and Data Base</div>
              <p>A year of industrial experience in SFMC and Currently advancing my skills by mastering cloud technologies(AWS)</p>
            </div>
          

          </div>
        </div>
        
      </section>
      <section className="contact" id="contact">
        <div className="content">
          <div className="title"><span>Contact Me</span></div>
          <div className="text">
          <a href="https://github.com/Yajneshnu"><i className="fab fa-github"></i></a>
            <div className="topic">Have Any Project or Offers?</div>
            <p>For more information feel free to contact me.</p>
            <div className="button">
              <button onClick={openWhatsApp}>Let's Chat</button>
            </div>
          </div>
        </div>
      </section>
      <footer>
        <div className="text">
          <span>Created By <a href="#">Yajnesh NU</a> | &#169; {new Date().getFullYear()} All Rights Reserved</span>
        </div>
      </footer>
    </div>
  );
}

export default App;

