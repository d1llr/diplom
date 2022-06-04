import React, {useState, useEffect, useContext} from 'react'
import dataSlider from './DataSlider'
import {InfoContext} from '../../../InfoContext'
export default React.memo(function Slider(props) {
    const info = useContext(InfoContext)
    const [slideIndex, setSlideIndex] = useState(1)
    // const nextSlide = () => {
    //     if(slideIndex !== dataSlider.length){
    //         setSlideIndex(slideIndex + 1) 
    //     }  
    //     else if (slideIndex === dataSlider.length){
    //         setSlideIndex(1)
    //     }
    // }
    // const prevSlide = () => {
    //     if(slideIndex !== 1){
    //         setSlideIndex(slideIndex - 1)
    //     }
    //     else if (slideIndex === 1){
    //         setSlideIndex(dataSlider.length)
    //     }
    // }
    const moveDot = index => {
        setSlideIndex(index)
    }
    function IMGChecker(index){
        let res = ''
        try{
          res = require(`../Photo/${info.hotel}/${props.class}/img${index+1}.jpg`)
        }
        catch{
          res =  require(`../Photo/DefaultPhoto.png`)
        }
        return res
      }
    return (
        <div className="room-slider">
            {dataSlider.map((obj, index) => {
                return (
                    <div
                    key={obj.id}
                    className={slideIndex === index + 1 ? "slide active-anim" : "slide"}
                    >
                        <img 
                        src={IMGChecker(index)} 
                        />
                    </div>
                )
            })}
            <div className="container-dots">
                {Array.from({length: 5}).map((item, index) => (
                    <div 
                    onClick={() => moveDot(index+1)}
                    className={slideIndex === index + 1 ? "dot active" : "dot"}
                    ></div>
                ))}
            </div>
        </div>
    )
})