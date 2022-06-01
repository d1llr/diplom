import React, { useContext, useState } from 'react';
import { MenuContext } from './MenuContext';
import Slider from './MenuSlider/Slider';


export default React.memo(function General(props) {
    const {general} = useContext(MenuContext)
    console.log('general description',general.description);
    return (
        <div className={props.cl}>
                <Slider/>
            
            <ul className='header'>
                {general.description.split('<br>').map((elem)=>{
                    return <li>{elem}</li>
                })}
            </ul>
            
        </div>
    )
}
)
