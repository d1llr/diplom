import React from 'react';
import Slider from './MenuSlider/Slider';


export default function General() {
    const image = 'japan.svg'
    return (
        <div className='general'>
            <div className='about'>
                <span className='header'>
                    Общее
                </span>
                <ul>
                    <li>
                        Дата основания: 1989 г.
                    </li>
                    <li>
                        Последняя реновация: 2019 г. (Только в номерах, Общественные места)
                    </li>
                    <li>
                        Общая площадь: 40 000 кв.м.
                    </li>
                    <Slider/>
                </ul>
            </div>
        </div>
    )
}
