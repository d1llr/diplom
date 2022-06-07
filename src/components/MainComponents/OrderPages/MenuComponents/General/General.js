import React, { Component, useContext, useEffect, useState } from 'react';
import { InfoContext } from '../../InfoContext';
import { MenuContext } from './MenuContext';
import Slider from './MenuSlider/Slider';
import { AnswerContext } from '../../AnswerContext'

export default React.memo(function General(props) {
    const [general, setGeneral] = useState()
    const info = useContext(InfoContext)
    const { answer, setAnswer } = useContext(AnswerContext)
    useEffect(() => {
        console.log(info);
        let xhr = new XMLHttpRequest();
        let formdata = new FormData();
        formdata.set('hotel', info.hotel)
        xhr.open('POST', `http://82.146.63.178/getHotelsGeneral`);
        xhr.onreadystatechange = function () {
            if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
                setGeneral(JSON.parse(xhr.response))
            }
        }
        xhr.send(formdata)
        setAnswer({
            ...answer,
            tour: {
                name: info.name,
                country: info.country,
                hotel: info.hotel
            }
        })
    }, [info])

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
