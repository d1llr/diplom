import React, {useState, useEffect, useContext} from 'react'
import { SliderContext } from '../SliderContext'
import BtnSlider from './BtnSlider'
import dataSlider from './DataSlider'
export default React.memo(function Slider() {

    const [slideIndex, setSlideIndex] = useState(1)
    const Data = [{
        h1:'Красивые места Египта',
        h3:'Спланируйте отпуск в самых красивых местах Египта'
      },
      {
        h1:'Красивые места Австралии',
        h3:'Спланируйте отпуск в самых красивых местах Австралии'
      },
      {
        h1:'Красивые места Норвегии',
        h3:'Спланируйте отпуск в самых красивых местах Норвегии'
      },
      {
        h1:'Красивые места Англии',
        h3:'Спланируйте отпуск в самых красивых местах Англии'
      },
      {
        h1:'Красивые места России',
        h3:'Спланируйте отпуск в самых красивых местах России'
      }]
    const {setMainText, setNextMainText,setSliderConnect, SliderConnect} = useContext(SliderContext)
    const nextSlide = () => {
        if(slideIndex !== dataSlider.length){
            setSlideIndex(slideIndex + 1) 
            setSliderConnect(slideIndex+2)
            setMainText({
                h1:Data[slideIndex].h1,
                h3:Data[slideIndex].h3
            })
            if (slideIndex===4) {
                setSliderConnect(1)
                setMainText({
                    h1:Data[4].h1,
                    h3:Data[4].h3
                })
                setNextMainText(Data[0].h1)
            }
            else{
               setNextMainText(Data[slideIndex+1].h1 ? Data[slideIndex+1].h1 : '') 
            }
            
        }  
        else if (slideIndex === dataSlider.length){
            setSlideIndex(1)
            setSliderConnect(2)
            setMainText({
                h1:Data[0].h1,
                h3:Data[0].h3
            })
            setNextMainText(Data[1].h1)
        }
    }
    useEffect(()=>{
        setTimeout(() => {
            nextSlide()
        }, 3000);
    },[slideIndex]) 
    return (
        <div className="container-slider">
            {dataSlider.map((obj, index) => {
                return (
                    <div
                    key={obj.id}
                    className={slideIndex === index + 1 ? "slide active-anim" : "slide"}
                    >
                        <img 
                        src={obj.imgIndex} 
                        />
                    </div>
                )
            })}
            {/* <BtnSlider moveSlide={nextSlide} direction={"next"} />
            <BtnSlider moveSlide={prevSlide} direction={"prev"}/>
            <div className="container-dots">
                {Array.from({length: 5}).map((item, index) => (
                    <div 
                    onClick={() => moveDot(index+1)}
                    className={slideIndex === index + 1 ? "dot active" : "dot"}
                    ></div>
                ))}
            </div> */}
        </div>
    )
})