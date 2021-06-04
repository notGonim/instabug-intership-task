import React from 'react'
import asana from '../../assets/asana.png'
import buzzfeed from '../../assets/buzzfeed.png'
import houseparty from '../../assets/houseparty.png'
import lyft from '../../assets/lyft.png'
import OnePlus from '../../assets/OnePlus.png'



export const PartnersIcons = () => {
    return (
        <div className="partners_container">
            <img src={lyft} alt="pic" />
            <img src={buzzfeed} alt="pic" />
            <img src={asana} alt="pic" />
            <img src={OnePlus} alt="pic" />
            <img src={houseparty} alt="pic" />

        </div>
    )
}
