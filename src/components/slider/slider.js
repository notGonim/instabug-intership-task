import React, { useState } from 'react'
import img1 from "../../assets/one.svg"
import img2 from "../../assets/two.svg"
import img3 from "../../assets/three.svg"
import { motion } from 'framer-motion'

import '../../styles/main.scss'

const imgBoxVariants = {
    hidden: {
        x: 500,
        opacity: 0
    },
    visible: {
        x: 0,
        opacity: 1,
        transition: {
            delay: 0.5, duration: 0.5
        }
    }
}

export const Slider = () => {

    const [step, setStep] = useState(1);

    const goToSlide1 = () => {
        setStep(1);
    }

    const goToSlide2 = () => {
        setStep(2);
    }

    const goToSlide3 = () => {
        setStep(3);
    }

    return (
        <div className='wrapper'>

            <div className='content'>
                {step === 1 && <motion.div className='img-box' variants={imgBoxVariants}
                    initial="hidden" animate="visible">
                    <img src={img1} alt="img1" />
                    <h2>Secure Crash Reporting With Real-Time Alerts</h2>

                </motion.div>}

                {step === 2 && <motion.div className='img-box' variants={imgBoxVariants}
                    initial="hidden" animate="visible">
                    <img src={img2} alt="img1" />
                    <h2>The Most Comprehensive Bug Reporting Tool for Mobile Apps</h2>
                </motion.div>}

                {step === 3 && <motion.div className='img-box' variants={imgBoxVariants}
                    initial="hidden" animate="visible">
                    <img src={img3} alt="img1" />
                    <h2>Accelerate Your Entire Mobile Team Workflow</h2>

                </motion.div>}

            </div>
            <div className='indicators-box'>

                {step === 1 && <><div className='indicator active'></div>
                    <div className='indicator' onClick={goToSlide2}></div>
                    <div className='indicator' onClick={goToSlide3}></div></>}

                {step === 2 && <><div className='indicator' onClick={goToSlide1}></div>
                    <div className='indicator active'></div>
                    <div className='indicator' onClick={goToSlide3}></div></>}

                {step === 3 && <><div className='indicator' onClick={goToSlide1}></div>
                    <div className='indicator' onClick={goToSlide2}></div>
                    <div className='indicator active'></div></>}

            </div>

        </div>
    )
}
