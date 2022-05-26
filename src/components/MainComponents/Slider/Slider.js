import React, {useEffect, useState, useContext} from 'react'
import { SliderContext } from '../../SliderContext'
import BtnSlider from './BtnSlider'
import dataSlider from './DataSlider'
export default function Slider() {

    const [slideIndex, setSlideIndex] = useState(1)
    const {SliderConnect} = useContext(SliderContext)

    return (
        <div className="small-container-slider">
            {dataSlider.map((obj, index) => {
                return (
                    <div
                    key={obj.id}
                    className={SliderConnect === index + 1 ? "small-slide active-anim" : "small-slide"}
                    >
                        <img 
                        src={obj.imgIndex} 
                        />
                    </div>
                )
            })}
        </div>
    )
}