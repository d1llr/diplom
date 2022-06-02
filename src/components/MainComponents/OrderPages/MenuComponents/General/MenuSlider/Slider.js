import React, {useState, useEffect, useContext} from 'react'
import BtnSlider from './BtnSlider'
import dataSlider from './DataSlider'
import {InfoContext} from '../../../InfoContext'
export default React.memo(function Slider() {
    const info = useContext(InfoContext)
    const [slideIndex, setSlideIndex] = useState(1)
    console.log(info);
    const nextSlide = () => {
        if(slideIndex !== dataSlider.length){
            setSlideIndex(slideIndex + 1) 
        }  
        else if (slideIndex === dataSlider.length){
            setSlideIndex(1)
        }
    }
    const prevSlide = () => {
        if(slideIndex !== 1){
            setSlideIndex(slideIndex - 1)
        }
        else if (slideIndex === 1){
            setSlideIndex(dataSlider.length)
        }
    }
    const moveDot = index => {
        setSlideIndex(index)
    }
    return (
        <div className="container-slider-order">
            {dataSlider.map((obj, index) => {
                return (
                    <div
                    key={obj.id}
                    className={slideIndex === index + 1 ? "slide active-anim" : "slide"}
                    >
                        <img 
                        src={require(`../Photos/${info.hotel}/${obj.image}`)} 
                        />
                    </div>
                )
            })}
            <BtnSlider moveSlide={nextSlide} direction={"next"} />
            <BtnSlider moveSlide={prevSlide} direction={"prev"}/>
            <div className="container-dots">
                {Array.from({length: 8}).map((item, index) => (
                    <div 
                    onClick={() => moveDot(index+1)}
                    className={slideIndex === index + 1 ? "dot active" : "dot"}
                    ></div>
                ))}
            </div>
        </div>
    )
})