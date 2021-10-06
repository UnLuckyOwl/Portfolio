import React, { useRef, useEffect } from 'react'
import './Contact.css'
import { IconContext } from 'react-icons/lib'
import { FaMapMarkerAlt } from 'react-icons/fa'
import { FaPhoneAlt } from 'react-icons/fa'
import { AiTwotoneMail } from 'react-icons/ai'
import { gsap } from 'gsap'

function Contact() {
    const contactRef = useRef()

    useEffect(() => {
        gsap.to('.contactInfo', {
            x: -50,
            duration: 2,
            ease: 'bounce',
            delay: 1,
            scrollTrigger: {
                trigger: '.contact',
                markers: false,
                start: 'center bottom',
            },
        })
        gsap.to('.contact_form', {
            x: 50,
            duration: 2,
            ease: 'bounce',
            delay: 1,
            scrollTrigger: {
                trigger: '.contact',
                markers: false,
                start: 'center bottom',
            },
        })
    }, [])

    return (
        <>
            <IconContext.Provider value={{ color: '#BCB4B4', size: '40' }}>
                <div className="contact" id="contact" ref={contactRef}>
                    <h2 className="contact-tit">get in touch</h2>
                    <h1 className="contact-title">Contact</h1>
                    <div className="contact_container bd-grid">
                        <div className="contactInfo">
                            <div className="box one">
                                <div className="icons">
                                    <a
                                        href="https://duckduckgo.com/?q=13218+North+Home+Road+Liberty%2C+MO+64068&atb=v257-1&ia=web&iai=r1-0&page=1&sexp=%7B%22cdrexp%22%3A%22b%22%2C%22prodexp%22%3A%22b%22%2C%22prdsdexp%22%3A%22c%22%2C%22biaexp%22%3A%22b%22%2C%22msvrtexp%22%3A%22b%22%7D&iaxm=maps"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <FaMapMarkerAlt />
                                    </a>
                                </div>
                                <div className="text">
                                    <h3>Location</h3>
                                    <a
                                        href="https://duckduckgo.com/?q=13218+North+Home+Road+Liberty%2C+MO+64068&atb=v257-1&ia=web&iai=r1-0&page=1&sexp=%7B%22cdrexp%22%3A%22b%22%2C%22prodexp%22%3A%22b%22%2C%22prdsdexp%22%3A%22c%22%2C%22biaexp%22%3A%22b%22%2C%22msvrtexp%22%3A%22b%22%7D&iaxm=maps"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{ textDecoration: 'none' }}
                                    >
                                        <p>Kearney, Missouri</p>
                                    </a>
                                </div>
                            </div>
                            <div className="box two">
                                <div className="icons">
                                    <a
                                        href="tel:+816-835-9049"
                                        style={{ textDecoration: 'none' }}
                                    >
                                        <FaPhoneAlt />
                                    </a>
                                </div>
                                <div className="text">
                                    <h3>Phone</h3>
                                    <a
                                        href="tel:+816-835-9049"
                                        style={{ textDecoration: 'none' }}
                                    >
                                        <p>816-835-9049</p>
                                    </a>
                                </div>
                            </div>

                            <div className="box three">
                                <div className="icons">
                                    <a
                                        href="mailto:brett.shearrer.dev@gmail.com"
                                        style={{ textDecoration: 'none' }}
                                    >
                                        <AiTwotoneMail />
                                    </a>
                                </div>
                                <div className="text">
                                    <h3>Email</h3>
                                    <a
                                        href="mailto:dispatch@supplychainsvcs.com"
                                        style={{ textDecoration: 'none' }}
                                    >
                                        <p>brett.shearrer.dev@gmail.com</p>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <form action="" className="contact_form">
                            <div className="contact_inputs">
                                <input
                                    type="text"
                                    placeholder="Name"
                                    className="contact_input"
                                />
                                <input
                                    type="mail"
                                    placeholder="Email"
                                    className="contact_input"
                                />
                            </div>

                            <textarea
                                name=""
                                id=""
                                cols="0"
                                rows="5"
                                placeholder="Message"
                                className="contact_input"
                            ></textarea>

                            <input
                                type="submit"
                                value="Send"
                                className="contact_button"
                            />
                        </form>
                    </div>
                </div>
            </IconContext.Provider>
        </>
    )
}

export default Contact
