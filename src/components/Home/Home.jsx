import React from 'react'
import './Home.css'
import propic from '../../media/portrait.jpg'
import { IconContext } from 'react-icons/lib'
import { AiFillLinkedin } from 'react-icons/ai'
import { AiFillGithub } from 'react-icons/ai'
// import { AiFillInstagram } from 'react-icons/ai'
import { CgArrowLongDown } from 'react-icons/cg'
import react2 from '../../media/react2.png'

function Home() {
    return (
        <>
            <IconContext.Provider value={{ color: '#bcb4b4', size: '30' }}>
                <div>
                    <div className="home-container" id="home">
                        <div className="home-header">
                            <p>
                                Hello, my name is<span>_</span>
                            </p>
                            <h1>Brett Shearrer</h1>
                            <div className="home-img">
                                <img src={propic} alt="ProPic" />
                            </div>
                        </div>
                        <div className="react-icon">
                            <img src={react2} alt="" />
                        </div>
                    </div>
                    <div className="social">
                        <h2>Follow</h2>

                        <div className="arrow">
                            <CgArrowLongDown className="arrow-icon" />
                        </div>
                        <div className="social-icons">
                            <a
                                href="https://www.linkedin.com/in/brett-shearrer-566512184/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <AiFillLinkedin className="linkedIn-icon" />
                            </a>
                        </div>
                        <div className="social-icons">
                            <a
                                href="https://github.com/UnLuckyOwl"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <AiFillGithub className="gitHub-icon" />
                            </a>
                        </div>
                        {/* <div className="social-icons">
                            <a
                                href="https://www.linkedin.com/in/brett-shearrer-566512184/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <AiFillInstagram className="insta-icon" />
                            </a>
                        </div> */}
                    </div>
                </div>
            </IconContext.Provider>
        </>
    )
}

export default Home
