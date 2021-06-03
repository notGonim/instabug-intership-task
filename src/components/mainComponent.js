import React from 'react'
import '../styles/main.scss'
export const MainComponent = ({ h1, h2, img }) => {
    return (
        <div className="main_container">
            <div className="container_text">
                <h1 className="header">{h1}</h1>
                <h2 className="para">Your Email : {h2}</h2>
            </div>
            <div className="container_img">
                <img src={img} />
            </div>
        </div>
    )
}
