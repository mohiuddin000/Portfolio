import React from 'react'
import './Myproject.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import blogapp from '../../assets/blogapp.png'
import youtubeclone from '../../assets/youTube.png'


const projects = [
    {
      title: "YouTube Clone",
      description:
        "A responsive video platform built with React. Features include video browsing, search, and suggestions.",
      tech: "React, HTML, CSS",
      image: youtubeclone, // use your generated image here
      github: "https://github.com/mohiuddin000/youtobe-clone.git",
    },
    {
      title: "Blog App",
      description:
        "A blog platform using Redux for state management. Designed with a clean and readable UI.",
      tech: "React, Redux",
      image: blogapp,
      github: "https://github.com/mohiuddin000/Blog-App.git",
    },
    // {
    //   title: "YouTube-Tweeter",
    //   description:
    //     "A social video-sharing app with commenting, likes, and uploads. Built with React and Appwrite.",
    //   tech: "React, CSS, Appwrite",
    //   image: "path/to/youtube-tweeter-image.png",
    //   github: "https://github.com/mohiuddin000/Backend-tweeter-youtube.git",
    // },
  ];

  
function Myproject() {
  return (
    <section id='project' className="projects-section">
     <div className="project-title">
     <h2>Projects</h2>
     <img src={theme_pattern} alt="" />
     </div>
      <div className="project-cards">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.image} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <p><strong>Tech Stack:</strong> {project.tech}</p>
            <a href={project.github} target="_blank" rel="noopener noreferrer">
              View Code
            </a>
          </div>
        ))}

      </div>
    </section>
  )
}

export default Myproject