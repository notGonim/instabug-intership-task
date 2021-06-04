import React from 'react'

export const LoginIconContainer = ({ icon, txt, classStyle }) => {
    return (
        <div className={`icons_containers_logo ${classStyle}`}>
            <div className="icon_img">
                <img src={icon} alt="pic" />
            </div>
            <div className="txt_container">
                <p>{txt}</p>
            </div>
        </div>
    )
}
