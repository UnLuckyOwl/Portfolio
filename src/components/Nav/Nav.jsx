import React, { useState, useEffect } from 'react'
import { Link } from 'react-scroll'
import { VscListSelection } from 'react-icons/vsc'
import { AiOutlineClose } from 'react-icons/ai'
import './Nav.css'
import { IconContext } from 'react-icons/lib'
import { AiFillHome } from 'react-icons/ai'
import { BsInfoSquareFill } from 'react-icons/bs'
import { BsGearFill } from 'react-icons/bs'
import { FaFileCode } from 'react-icons/fa'
import { FaAddressBook } from 'react-icons/fa'
// import home from '../../media/home.png'
// import about from '../../media/info.png'
// import about2 from '../../media/it.png'
// import skills from '../../media/skills.png'
// import skills2 from '../../media/skills2.png'
// import port from '../../media/portfolio.png'
// import contact from '../../media/contact.png'
// import contact2 from '../../media/contact2.png'

// import ParticleBackground from '../ParticleBackground'

function Nav() {
    const [click, setClick] = useState(false)
    const [button, setButton] = useState(true)

    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => {
        setClick(false)
    }
    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false)
        } else {
            setButton(true)
        }
    }

    useEffect(() => {
        showButton()
    }, [])

    // window.addEventListener('resize', showButton)

    return (
        <>
            <IconContext.Provider value={{ color: '#bcb4b4', size: '40' }}>
                <div className="navbar">
                    {/* <ParticleBackground /> */}
                    <div className="navbar-container container">
                        <Link
                            activeClass="active"
                            to="home"
                            className="navbar-logo"
                            onClick={closeMobileMenu}
                            style={{ cursor: 'pointer' }}
                        ></Link>
                        {/* <div className="menu-icon" onClick={handleClick}>
                            {click ? <AiOutlineClose /> : <VscListSelection />}
                        </div> */}
                        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                            <li className="nav-item">
                                <Link
                                    activeClass="active"
                                    to="home"
                                    className="nav-links home-link"
                                    onClick={handleClick}
                                    spy={true}
                                    smooth={true}
                                    style={{ cursor: 'pointer' }}
                                >
                                    <h5>Home</h5>
                                    <div className="nav-icons">
                                        <AiFillHome />
                                    </div>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    to="about"
                                    className="nav-links about-link"
                                    onClick={handleClick}
                                    spy={true}
                                    smooth={true}
                                    style={{ cursor: 'pointer' }}
                                >
                                    <h5>About</h5>
                                    <div className="nav-icons">
                                        <BsInfoSquareFill />
                                    </div>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    to="skills"
                                    className="nav-links skills-link"
                                    onClick={handleClick}
                                    spy={true}
                                    smooth={true}
                                    style={{ cursor: 'pointer' }}
                                >
                                    <h5>Skills</h5>
                                    <div className="nav-icons">
                                        <BsGearFill />
                                    </div>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    to="portfolio"
                                    className="nav-links port-link"
                                    onClick={handleClick}
                                    spy={true}
                                    smooth={true}
                                    style={{ cursor: 'pointer' }}
                                >
                                    <h5>Portfolio</h5>
                                    <div className="nav-icons">
                                        <FaFileCode />
                                    </div>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    to="contact"
                                    className="nav-links contact-link"
                                    onClick={handleClick}
                                    spy={true}
                                    smooth={true}
                                    style={{ cursor: 'pointer' }}
                                >
                                    <h5>Contact</h5>
                                    <div className="nav-icons">
                                        <FaAddressBook />
                                    </div>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </IconContext.Provider>
        </>
    )
}

export default Nav
