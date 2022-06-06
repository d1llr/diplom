import React, { useEffect, useState } from 'react'
import home from 'C:/diplom/src/img/home.svg'
import Room from './MenuComponents/Rooms/Room'
import Services from './MenuComponents/Services/Services'
import Fly from './MenuComponents/Fly/Fly'
import Date from './MenuComponents/Date'
import General from './MenuComponents/General/General'
import { InfoContext } from './InfoContext'
import { MenuContext } from './MenuComponents/General/MenuContext'
import { AnswerContext } from './AnswerContext'
import Result from './MenuComponents/Result/Result'
export default React.memo(function Tour(props) {
    const name = props.elem.name
    const country = props.elem.country
    const hotel = props.elem.hotel
    const [menu, setMenu] = useState('general')
    const [info, setInfo] = useState(props.elem)
    const [general, setGeneral] = useState()
    const [services, setServices] = useState()
    const [room, setRoom] = useState()
    const [flight, setFlight] = useState()
    const [answer, setAnswer] = useState({
        tour: {
            name: '',
            country: '',
            hotel: ''
        },
        room: {
            name: '',
            price: ''
        },
        flyData: {
            name: '',
            price: ''
        },
        date: ''
    })
    return (
        <li className={props.classNames}>
            <div className='name_and_hotel'>
                {props.elem.name}
                <img src={home} />
                {props.elem.country},&nbsp;
                {props.elem.hotel}
            </div>
            <div className='main-info'>
                <ul className='menu'>
                    <li onClick={() => {
                        setMenu('general')
                    }} className={menu === 'general' ? 'item current' : 'item'}>
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
                                console.log('services', services);
                                setMenu('services')
                            }
                        }
                        xhr.send(formdata)
                    }} className={menu === 'services' ? 'item current' : 'item'}>
                        Услуги
                    </li>
                    <li onClick={() => {
                        console.log(answer, 'answer');
                        let xhr = new XMLHttpRequest();
                        let formdata = new FormData();
                        formdata.set('hotel', props.elem.hotel)
                        xhr.open('POST', `http://romanmadraimov.diplom/getHotelsRooms`);
                        xhr.onreadystatechange = function () {
                            if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
                                setRoom(JSON.parse(xhr.response))
                                console.log('room', room);
                                setMenu('room')
                            }
                        }
                        xhr.send(formdata)
                    }} className={menu === 'room' ? 'item current' : 'item'}>
                        <span className={answer.room.name === '' ? '' : 'chosen'}>Номера</span>
                    </li>
                    <li onClick={() => {
                        let xhr = new XMLHttpRequest();
                        let formdata = new FormData();
                        formdata.set('hotel', props.elem.hotel)
                        xhr.open('POST', `http://romanmadraimov.diplom/getHotelsFlight`);
                        xhr.onreadystatechange = function () {
                            if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
                                setFlight(JSON.parse(xhr.response))
                                console.log('flight', flight);
                                setMenu('fly')
                            }
                        }
                        xhr.send(formdata)
                    }} className={answer.room.name !== '' ? menu === 'fly' ? 'item current' : 'item' : ' item disable'}>
                        <span className={answer.flyData.name === '' ? '' : 'chosen'}>Перелет </span>
                    </li>
                    <li onClick={() => setMenu('result')}
                        className={answer.flyData.name !== '' ? menu === 'result' ? 'item current' : 'item' : 'item disable'}>
                        Итого
                    </li>
                </ul>
                <InfoContext.Provider value={props.elem}>
                    <MenuContext.Provider value={{ general, services, room, flight }}>
                        <AnswerContext.Provider value={{ answer, setAnswer }}>
                            {
                                menu === 'general' ? <General hotel={props.elem} /> :
                                    menu === 'services' ? <Services /> :
                                        menu === 'room' ? <Room /> :
                                            menu === 'fly' ? <Fly /> :
                                                answer.flyData.name !== '' ? <Result /> : ''
                            }
                        </AnswerContext.Provider>
                    </MenuContext.Provider>
                </InfoContext.Provider>
            </div>
        </li >
    )
})
