import React, { Component, useContext, useEffect, useState } from 'react';
import { MenuContext } from './MenuContext';
import Slider from './MenuSlider/Slider';


export default React.memo(function General(props) {
    const [general, setGeneral] = useState()
    useEffect(() => {
        let xhr = new XMLHttpRequest();
        let formdata = new FormData();
        formdata.set('hotel', 'Bellagio')
        xhr.open('POST', `http://romanmadraimov.diplom/getHotelsGeneral`);
        xhr.onreadystatechange = function () {
            if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
                setGeneral(JSON.parse(xhr.response))
            }
        }
        xhr.send(formdata)
    },[])

    return (
        <div className='general'>
            {general ? <Slider /> : ''}


            <ul className='header'>
                {general ? general.description.split('<br>').map((elem) => {
                    return <li>{elem}</li>
                }) : ''}
            </ul>

        </div>
    )
}
)
