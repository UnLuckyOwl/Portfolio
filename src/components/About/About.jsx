import React, { useRef, useEffect, useState } from 'react'
import './About.css'
import { IconContext } from 'react-icons/lib'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Link } from 'react-scroll'
import { Button } from '../Button/Button'

gsap.registerPlugin(ScrollTrigger)

function About() {
    const aboutRef = useRef()

    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    useEffect(() => {
        gsap.to('.about-body', {
            x: -100,
            duration: 2,
            ease: 'bounce',
            delay: 1,
            scrollTrigger: {
                trigger: '.about-container',
                markers: false,
                start: 'center bottom',
            },
        })
        gsap.to('.about-pic', {
            x: 100,
            duration: 2,
            ease: 'bounce',
            delay: 1,
            scrollTrigger: {
                trigger: '.about-container',
                markers: false,
                start: 'center bottom',
            },
        })
        gsap.to('.about-pic2', {
            x: 100,
            duration: 3,
            ease: 'bounce',
            delay: 1,
            scrollTrigger: {
                trigger: '.about-container',
                markers: false,
                start: 'center bottom',
            },
        })
    }, [])

    return (
        <IconContext.Provider value={{ color: '#fff', size: '40' }}>
            <div id="about" className="about">
                <div className="about-container" ref={aboutRef}>
                    <div className="about-grid-container">
                        <div className="about-grid-item">
                            <div className="about-pic"></div>
                            <div className="about-pic2"></div>
                        </div>
                        <div className="about-body">
                            <div className="about-subtitle">
                                <h2>let me introduce myself</h2>
                                <h1>About Me</h1>
                            </div>
                            <div className="about-text">
                                <p>
                                    Highly organized and detail-oriented
                                    self-taught Software Developer seeking a
                                    position as a React.js Developer. With a
                                    passion for learning, along with never
                                    ending creativity, I strive towards eye
                                    catching responsive/efficient web design.
                                    Having a background in Color Theory and home
                                    design, allows me to create a relaxing and
                                    longer lasting user experience.
                                </p>
                            </div>
                            <div className="about-button">
                                <Link
                                    to="portfolio"
                                    className="btn-link"
                                    onClick={handleClick}
                                    spy={true}
                                    smooth={true}
                                    style={{ cursor: 'pointer' }}
                                >
                                    <Button
                                        buttonStyle="btn--outline"
                                        buttonSize="btn--mobile"
                                    >
                                        <h9>PORTFOLIO</h9>
                                    </Button>
                                </Link>
                                <Link
                                    to="contact"
                                    exact
                                    className="btn-link"
                                    onClick={handleClick}
                                    spy={true}
                                    smooth={true}
                                    style={{ cursor: 'pointer' }}
                                >
                                    <Button
                                        buttonStyle="btn--outline"
                                        buttonSize="btn--mobile"
                                    >
                                        <h9>CONTACT</h9>
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </IconContext.Provider>
    )
}

export default About
