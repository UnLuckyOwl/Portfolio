import React, { useState } from 'react'
import './ScrollTop.css'
import { IconContext } from 'react-icons/lib'
import { RiArrowUpFill } from 'react-icons/ri'
import { Button } from './ScrollTopButton.js'

function ScrollTop() {
    const [visible, setVisible] = useState(false)

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop
        if (scrolled > 300) {
            setVisible(true)
        } else if (scrolled <= 300) {
            setVisible(false)
        }
    }

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
            /* you can also use 'auto' behaviour
         in place of 'smooth' */
        })
    }

    window.addEventListener('scroll', toggleVisible)

    return (
        <div className="scroll">
            <Button>
                <IconContext.Provider value={{ color: '#06bcee', size: '60' }}>
                    <div className="scroll-up">
                        <RiArrowUpFill
                            className="scroll-icon"
                            onClick={scrollToTop}
                            style={{
                                display: visible ? 'inline' : 'none',
                                backgroundColor: 'transparent',
                            }}
                        />
                    </div>
                </IconContext.Provider>
            </Button>
        </div>
    )
}

export default ScrollTop
