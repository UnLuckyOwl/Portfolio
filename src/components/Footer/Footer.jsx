import React from 'react'
import './Footer.css'
import { IconContext } from 'react-icons/lib'
import { BiCopyright } from 'react-icons/bi'
import { FaReact } from 'react-icons/fa'
import { AiFillLinkedin } from 'react-icons/ai'
import { AiFillGithub } from 'react-icons/ai'
// import { AiFillInstagram } from 'react-icons/ai'

function Footer() {
    return (
        <>
            <IconContext.Provider value={{ color: '#BCB4B4', size: '30' }}>
                <div className="footer">
                    <div className="footer-container">
                        <div className="footer-text">
                            <h1>My Location</h1>
                            <p>Kearney, Missouri</p>
                            <a
                                href="https://www.google.com/maps/place/Kearney,+MO/@39.3574585,-94.3901114,13z/data=!3m1!4b1!4m5!3m4!1s0x87c1ad0114d0db87:0xb834553d8f514901!8m2!3d39.3677802!4d-94.3621703"
                                target="_blank"
                                rel="noreferrer"
                            >
                                View in Google Maps
                            </a>
                        </div>
                    </div>
                    <div className="copyright">
                        <div className="footer-icon">
                            <BiCopyright />
                        </div>
                        <h3>2021 - Brett Shearrer</h3>
                        <div className="footer-icon">
                            <FaReact />
                        </div>
                    </div>
                    <div className="footer-social">
                        <div className="footer-social-icon">
                            <a
                                href="https://www.linkedin.com/in/brett-shearrer-566512184/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <AiFillLinkedin />
                            </a>
                        </div>
                        <div className="footer-social-icon">
                            <a
                                href="https://github.com/UnLuckyOwl"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <AiFillGithub />
                            </a>
                        </div>
                        {/* <div className="footer-social-icon">
                            <a
                                href="https://www.linkedin.com/in/brett-shearrer-566512184/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <AiFillInstagram />
                            </a>
                        </div> */}
                    </div>
                </div>
            </IconContext.Provider>
        </>
    )
}

export default Footer
