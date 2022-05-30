import React, { useEffect, useState } from 'react'
import home from 'C:/diplom/src/img/home.svg'
import Room from './MenuComponents/Room'
import Services from './MenuComponents/Services'
import Fly from './MenuComponents/Fly'
import Date from './MenuComponents/Date'
import General from './MenuComponents/General/General'
import { InfoContext } from './InfoContext'
import { MenuContext } from './MenuComponents/General/MenuContext'

export default function Tour(props) {

    const [menu, setMenu] = useState('Услуги')
    const [info, setInfo] = useState(props.elem)
    const [general, setGeneral] = useState()
    const [services, setServices] = useState()
    return (
        <li className={props.classNames}>
            <div className='name_and_hotel'>
                {props.elem.name}
                <img src={home} />
                {props.elem.hotel}
            </div>
            <div className='main-info'>
                <ul className='menu'>
                    <li onClick={() => {
                        let xhr = new XMLHttpRequest();
                        let formdata = new FormData();
                        formdata.set('hotel', props.elem.hotel)
                        xhr.open('POST', `http://romanmadraimov.diplom/getHotelsGeneral`);
                        xhr.onreadystatechange = function () {
                            if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
                                setGeneral(JSON.parse(xhr.response))
                                console.log('general',general);
                            }
                        }
                        xhr.send(formdata)
                        setMenu('general')
                    }}>
                        Общее
                    </li>
                    <li onClick={() => {
                        let xhr = new XMLHttpRequest();
                        let formdata = new FormData();
                        formdata.set('hotel', props.elem.hotel)
                        xhr.open('POST', `http://romanmadraimov.diplom/getHotelsServices`);
                        xhr.onreadystatechange = function () {
                            if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
                                setServices(JSON.parse(xhr.response))
                                console.log('services',services);
                            }
                        }
                        xhr.send(formdata)
                        setMenu('services')
                    }}>
                        Услуги
                    </li>
                    <li onClick={() => setMenu('room')}>
                        Выбор номера
                    </li>
                    <li onClick={() => setMenu('fly')}>
                        Выбор рейса
                    </li>
                    <li onClick={() => setMenu('date')}>
                        Даты
                    </li>
                </ul>
                <InfoContext.Provider value={props.elem}>
                    <MenuContext.Provider value={{general, services}}>
                        {
                            menu === 'general' && general ? <General /> :
                                menu === 'services' && services ? <Services /> :
                                    menu === 'room' ? <Room /> :
                                        menu === 'fly' ? <Fly /> :
                                            <Date />
                        }
                    </MenuContext.Provider>
                </InfoContext.Provider>
            </div>
        </li>
    )
}
