import React, { useRef, useEffect } from 'react'
import './Skills.css'
import { IconContext } from 'react-icons/lib'
import { RiComputerLine } from 'react-icons/ri'
import { BiCodeAlt } from 'react-icons/bi'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function Skills() {
    const skillsRef = useRef()

    useEffect(() => {
        gsap.to('.skills-title', {
            scale: 1.5,
            duration: 2,
            delay: 1,
            scrollTrigger: {
                trigger: '.skills-title',
                markers: false,
                start: 'top bottom',
            },
        })
        gsap.to('.skills-box', {
            x: 1000,
            duration: 3,
            delay: 1,
            ease: 'bounce',
            scrollTrigger: {
                trigger: '.skills-title',
                markers: false,
                start: 'center bottom',
            },
        })
        gsap.to('.skills_name', {
            duration: 3,
            rotation: 360,
            ease: 'bounce',
            delay: 1,
            scrollTrigger: {
                trigger: '.skills-title',
                markers: false,
                start: 'center bottom',
            },
        })
    }, [])

    return (
        <>
            <IconContext.Provider value={{ color: '#f2f3f4', size: '40' }}>
                <div id="skills" className="skills">
                    <div className="skills-title" ref={skillsRef}>
                        <h2>my current knowledge and</h2>
                        <h1>Skills</h1>
                    </div>
                    <div className="skills-grid-container">
                        <div className="skills-box">
                            <div className="skills-dev">
                                <div className="skills-icon">
                                    <BiCodeAlt />
                                </div>
                                <h3 className="skills_subtitle">
                                    Web Development
                                </h3>
                                <p>
                                    Utilizing React.js, I create high
                                    performance websites developed for
                                    responsiveness and efficiency.
                                </p>
                                <span className="skills_name">HTML5</span>
                                <span className="skills_name">CSS3</span>
                                <span className="skills_name">SASS</span>
                                <span className="skills_name">JavaScript</span>
                                <span className="skills_name">React.js</span>
                                <span className="skills_name">Redux</span>
                                <span className="skills_name">Three.js</span>
                                <span className="skills_name">NPM</span>
                                <span className="skills_name">cPanel</span>
                                <span className="skills_name">Git</span>
                                <span className="skills_name">
                                    RESTful API's
                                </span>
                                <span className="skills_name">
                                    Google Drive
                                </span>
                                <span className="skills_name">
                                    Microsoft 365
                                </span>
                            </div>
                            <div className="skills-des">
                                <div className="skills-icons">
                                    <RiComputerLine />
                                </div>
                                <h3 className="skills_subtitle">Web Design</h3>
                                <p>
                                    Applying my home design experience, I strive
                                    to create unique and relaxing user
                                    experience.
                                </p>
                                <span className="skills_name">Lightroom</span>
                                <span className="skills_name">Photoshop</span>
                                <span className="skills_name">Procreate</span>
                                <span className="skills_name">
                                    Photography(Hobby)
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </IconContext.Provider>
        </>
    )
}

export default Skills
