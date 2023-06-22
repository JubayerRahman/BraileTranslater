import React, { useState } from 'react'
import "./Dev.css"
import DevImg from "../Images/Ohee.jpg"

const Dev = () => {
  const [devNavSkillClass, setDevNavSkillClass]= useState("DiactBtnSkill")
  const [devNavExpClass, setDevNavExpClass]= useState("DiactNavBtnExp")
  const [SeacaalAboutCalss, setSeacaalAboutCalss]= useState("specialAbout")
  const [About, setAbout] = useState("About")
  const [Skills, setSkills] = useState("SkillsHide")
  const [Experience, setExperience] = useState("ExperienceHide")
  const AboutClick =()=>{
    setSeacaalAboutCalss("specialAbout")
    setDevNavSkillClass("DiactBtnSkill")
    setDevNavExpClass("DiactNavBtnExp")
    setAbout("About")
    setSkills("SkillsHide")
    setExperience("ExperienceHide")
  }
  const SkillClick =()=>{
    setSeacaalAboutCalss("specialAboutDiact")
    setDevNavSkillClass("activeNavBtnSkill")
    setDevNavExpClass("DiactNavBtnExp")
    setAbout("AboutHide")
    setSkills("Skills")
    setExperience("ExperienceHide")
  }
  const ExperClick =()=>{
    setSeacaalAboutCalss("specialAboutDiact")
    setDevNavSkillClass("DiactBtnSkill")
    setDevNavExpClass("activeNavBtnExp")
    setAbout("AboutHide")
    setSkills("SkillsHide")
    setExperience("Experience")
  }
  return (
    <div className='mainDevSec'>
       <div className='DevNav'>
          <button className={SeacaalAboutCalss} onClick={AboutClick}>About</button>
          <button className={devNavSkillClass} onClick={SkillClick}>Skills</button>
          <button className={devNavExpClass} onClick={ExperClick}>Experience</button>
        </div>
      <div className='devDataSection'>
        <div className={About}>
        <img className='JobayerImg' src={DevImg} alt="Jobayer"/>
        <p>I am Jobayer Rahman Ohee, a passionate computer science student with a keen interest in web development. 
          Through self-learning and hands-on experience, I have gained proficiency in HTML, CSS, JavaScript, and 
          React, enabling me to craft captivating and interactive web applications. The process of bringing ideas 
          to life on the web has always fascinated me, and I constantly strive to enhance my skills and stay up-
          to-date with the latest industry trends.
          <br></br>
          In addition to my web development skills, I have a strong command of WordPress, allowing me to create 
          websites with ease and efficiency. I am well-versed in utilizing the platform's features and plugins 
          to develop dynamic and visually appealing websites that meet clients' specific requirements. Moreover, 
          my proficiency in Photoshop and graphic design enables me to create stunning visuals and engaging user 
          interfaces. I understand the importance of aesthetics in web design and strive to deliver visually 
          compelling experiences that leave a lasting impact on users.
          <br></br>
          As a computer science student, I am dedicated to continuous learning and growth. I actively seek out 
          new challenges and opportunities to expand my knowledge and skill set. I enjoy working collaboratively 
          and thrive in environments that encourage creativity and innovation. Through effective communication 
          and problem-solving skills, I can effectively translate complex technical concepts to clients and team 
          members, ensuring smooth and successful project execution.
          <br></br>
          In conclusion, my passion for web development, coupled with my proficiency in HTML, CSS, JavaScript, 
          React, WordPress, Photoshop, and graphic design, positions me as a well-rounded and capable professional. 
          I am excited to contribute my skills and expertise to create exceptional web experiences and drive digital 
          innovation.</p>
        </div>
        <div className={Skills}>
        <h1>Skills:</h1>
        <h2>HTML</h2>
        <h6>97%</h6>
        <div className='SkillDiv'>
          <div className='progeassHtml'></div>
          <div className='totalBar'></div>
        </div>
        <h2>CSS</h2>
        <h6>95%</h6>
        <div className='SkillDiv'>
          <div className='progeassCss'></div>
          <div className='totalBar'></div>
        </div>
        <h2>Bootstrap</h2>
        <h6>95%</h6>
        <div className='SkillDiv'>
          <div className='progeassBs'></div>
          <div className='totalBar'></div>
        </div>
        <h2>JavaScript</h2>
        <h6>89%</h6>
        <div className='SkillDiv'>
          <div className='progeassJs'></div>
          <div className='totalBar'></div>
        </div>
        <h2>React</h2>
        <h6>70%</h6>
        <div className='SkillDiv'>
          <div className='progeassReact'></div>
          <div className='totalBar'></div>
        </div>
        <h2>Wordpress</h2>
        <h6>89%</h6>
        <div className='SkillDiv'>
          <div className='progeassWp'></div>
          <div className='totalBar'></div>
        </div>
        <h2>Photoshop</h2>
        <h6>70%</h6>
        <div className='SkillDiv'>
          <div className='progeassPs'></div>
          <div className='totalBar'></div>
        </div>
      </div>
      <div className={Experience}>
        <h1>Experience:</h1>
        <p>
          I am a student, as far june 2023 i dont have any fulltime work experience in this field. But I have done 
          some freelance jobs for foreign clients.
        </p>
      </div>
      </div>
    </div>
  )
}

export default Dev
