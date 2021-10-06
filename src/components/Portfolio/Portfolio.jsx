import React, { useRef, useEffect } from 'react'
import './Portfolio.css'
import svcs from '../../media/SVCSsnip.PNG'
import bakery from '../../media/bakery.PNG'
import watchlist from '../../media/watchlist.PNG'
import ecommerce from '../../media/swordWeb.PNG'
import { gsap } from 'gsap'

function Portfolio() {
    const portRef = useRef()

    useEffect(() => {
        gsap.to('.port-title', {
            scale: 1.5,
            duration: 2,
            delay: 1,
            scrollTrigger: {
                trigger: '.port-title',
                markers: false,
                start: 'top bottom',
            },
        })
        gsap.to('.portfolio_img', {
            duration: 2,
            y: -500,
            delay: 1,
            scrollTrigger: {
                trigger: '.port-title',
                markers: false,
                start: 'center bottom',
            },
        })
    }, [])
    return (
        <>
            <div className="port" id="portfolio">
                <div className="port-title" ref={portRef}>
                    <h2>some of my work</h2>
                    <h1>Portfolio</h1>
                </div>
                <div className="portfolio_container bd-grid">
                    <div className="port-con">
                        <div className="portfolio_img">
                            <img src={svcs} alt="Supply Chain SVCS" />
                            <div className="portfolio_link">
                                <a
                                    href="http://supplychainsvcs.com/"
                                    className="portfolio_link-name"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    View Site
                                </a>
                            </div>
                        </div>
                        <div className="port-desc">
                            <p>
                                React.js based small business website for Supply
                                Chain Services, utilizing React Router.
                            </p>
                        </div>
                    </div>

                    <div className="port-con">
                        <div className="portfolio_img">
                            <img src={bakery} alt="Gluten Free Bakery" />
                            <div className="portfolio_link">
                                <a
                                    href="https://wizardly-mccarthy-9c6daf.netlify.app/"
                                    className="portfolio_link-name"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    View Site
                                </a>
                            </div>
                        </div>
                        <div className="port-desc">
                            <p>
                                Simple Bakery landing page with product menu and
                                dark mode. Built with HTML5, CSS3, and
                                JavaScript.
                            </p>
                        </div>
                    </div>
                    <div className="port-con">
                        <div className="portfolio_img">
                            <img src={watchlist} alt="Movie Watchlist" />
                            <div className="portfolio_link">
                                <a
                                    href="https://sleepy-williams-9c52bb.netlify.app/"
                                    className="portfolio_link-name"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    View Site
                                </a>
                            </div>
                        </div>
                        <div className="port-desc">
                            <p>
                                Movie Watchlist React.js app based off of a todo
                                app, simple add and delete list.
                            </p>
                        </div>
                    </div>
                    <div className="port-con">
                        <div className="portfolio_img">
                            <img src={ecommerce} alt="Ecommerce App" />
                            <div className="portfolio_link">
                                <a
                                    href="https://brave-agnesi-7bc752.netlify.app/"
                                    className="portfolio_link-name"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    View Site
                                </a>
                            </div>
                        </div>
                        <div className="port-desc">
                            <p>
                                React.js Ecommerce app with a full cart and
                                checkout, using Commerce.js and Stripe.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Portfolio
