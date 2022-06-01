import React, { useEffect, useState } from 'react'
import home from 'C:/diplom/src/img/home.svg'
import Room from './MenuComponents/Rooms/Room'
import Services from './MenuComponents/Services/Services'
import Fly from './MenuComponents/Fly/Fly'
import Date from './MenuComponents/Date'
import General from './MenuComponents/General/General'
import { InfoContext } from './InfoContext'
import { MenuContext } from './MenuComponents/General/MenuContext'

export default React.memo(function Tour(props) {

    const [menu, setMenu] = useState('Услуги')
    const [info, setInfo] = useState(props.elem)
    const [general, setGeneral] = useState()
    const [services, setServices] = useState()
    const [room, setRoom] = useState()
    useEffect(prev=>{
        console.log('prev',prev);
        console.log(menu);
    },[menu])
    return (
        <li className={props.classNames}>
            <div className='name_and_hotel'>
                {props.elem.name}
                <img src={home} />
                {props.elem.country},
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
                                setServices(JSON.parse(JSON.parse(xhr.response).services))
                                console.log('services',services);
                                if (services) setMenu('services')
                            }
                        }
                        xhr.send(formdata)
                    }}>
                        Услуги
                    </li>
                    <li onClick={() => {
                        let xhr = new XMLHttpRequest();
                        let formdata = new FormData();
                        formdata.set('hotel', props.elem.hotel)
                        xhr.open('POST', `http://romanmadraimov.diplom/getHotelsRooms`);
                        xhr.onreadystatechange = function () {
                            if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
                                setRoom(JSON.parse(xhr.response))
                                console.log('room',room);
                                if (room) setMenu('room')
                            }
                        }
                        xhr.send(formdata)
                    }}>
                        Номера
                    </li>
                    <li onClick={() => setMenu('fly')}>
                        Перелет
                    </li>
                </ul>
                <InfoContext.Provider value={props.elem}>
                    <MenuContext.Provider value={{general, services, room}}>
                        {
                            menu === 'general' && general ? <General cl = 'general'/> :
                                menu === 'services' ? <Services /> :
                                    menu === 'room' ? <Room /> : <Fly />
                        }
                    </MenuContext.Provider>
                </InfoContext.Provider>
            </div>
        </li>
    )
})
