import React, { useState, useEffect } from 'react'
import minus from '../../../img/minus.svg'
export default React.memo(function Hotels() {
    const [data, setData] = useState()
    const [services, setServices] = useState()
    const [success, setSuccess] = useState(false)
    const [error, setError] = useState(false)
    const [description, setDescription] = useState(false)
    const [form, setForm] = useState(false)
    const [counter, setCounter] = useState(0)
    console.log(data);
    useEffect(() => {
        let xhr = new XMLHttpRequest();
        let response = []
        xhr.open('GET', 'http://82.146.63.178/getHotels');
        xhr.onreadystatechange = function () {
            if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
                response = JSON.parse(xhr.response)
                setData(response)
            }
        }
        xhr.send();
    }, [success, error])
    function getHotelsServices() {
        let xhr = new XMLHttpRequest();
        let response = []
        let formData = new FormData()
        formData.set('hotel', 'Bellagio')
        xhr.open('POST', 'http://82.146.63.178/getHotelsServices');
        xhr.onreadystatechange = function () {
            if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
                response = JSON.parse(xhr.response)
                setServices(JSON.parse(response.services))
                // console.log(services);
            }
        }
        xhr.send(formData);
    }
    function CreateHotel() {
        let xhr = new XMLHttpRequest();
        let response = []
        let formdata = new FormData(document.forms.create_tour)
        xhr.open('POST', 'http://82.146.63.178/createTours');
        xhr.onreadystatechange = function () {
            if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
                console.log('Запись добавлена');
                setSuccess(true)
            }
            else {
                setError(true)
            }
        }
        xhr.send(formdata);
    }
    function deleteHotels(id) {
        let xhr = new XMLHttpRequest();
        let response = []
        let formdata = new FormData()
        formdata.set('id', id)
        xhr.open('POST', 'http://82.146.63.178/deleteHotels');
        xhr.onreadystatechange = function () {
            if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
                console.log('Тур удален');
                setSuccess(true)
            }
        }
        xhr.send(formdata);
    }
    const changeDesc = e => {
        if (e.className === 'description active') {
            e.className = 'description'
            setDescription(false)
        } else {
            e.className = 'description active'
            setDescription(true)
        }
    }
    return (
        <div className='hotels'>
            <table>
                <tbody>
                    <tr>
                        <th rowSpan='2'>
                            id
                        </th>
                        <th rowSpan='2'>
                            Имя
                        </th>
                        <th rowSpan='2'>
                            Описание
                        </th>
                        <th rowSpan='2'>
                            Услуги
                        </th>
                        <th rowSpan='2'>
                            Эконом-номер(состав+цена)
                        </th>
                        <th rowSpan='2'>
                            Стандарт-номер(состав+цена)
                        </th >
                        <th rowSpan='2'>
                            Люкс-номер(состав+цена)
                        </th>
                        <th rowSpan='2'>
                            Даты заезда и отъезда
                        </th>
                        <th colSpan='3'>
                            Цена перелета
                        </th>
                        <th rowSpan='2'>
                            <button onClick={() => {
                                getHotelsServices()
                                setForm(true)
                                
                            }
                            }>
                                Добавить запись
                            </button>
                        </th>
                    </tr>
                    <tr>
                        <th>
                            Эконом
                        </th>
                        <th>
                            Стандарт
                        </th>
                        <th>
                            Бизнес
                        </th>
                    </tr>
                    {data ? data.map((elem) => {
                        return <tr className='content'>
                            <td>
                                {elem.id}
                            </td>
                            <td>
                                {elem.name}
                            </td>
                            <td onClick={(e) => changeDesc(e.target)} className='description'>
                                {elem.description}
                            </td>
                            <td className='description' onClick={(e) => changeDesc(e.target)}>
                                {elem.services ? Object.keys(JSON.parse(elem.services)).map(e => {
                                    return JSON.parse(elem.services)[e] + ','
                                }
                                ) : ''}
                            </td>
                            <td className='description' onClick={(e) => changeDesc(e.target)}>
                                {elem.eco_room ? Object.keys(JSON.parse(elem.eco_room)).map(e => {
                                    return e === 'Price' ?
                                        <b>Цена:{JSON.parse(elem.eco_room)[e]}₽,</b> :
                                        JSON.parse(elem.eco_room)[e] + ','
                                }
                                ) : ''}
                            </td>
                            <td className='description' onClick={(e) => changeDesc(e.target)}>
                                {elem.standart_room ? Object.keys(JSON.parse(elem.standart_room)).map(e => {
                                    return e === 'Price' ?
                                        <b>Цена:{JSON.parse(elem.standart_room)[e]}₽,</b> :
                                        JSON.parse(elem.standart_room)[e] + ','
                                }
                                ) : ''}
                            </td>
                            <td className='description' onClick={(e) => changeDesc(e.target)}>
                                {elem.luxury_room ? Object.keys(JSON.parse(elem.luxury_room)).map(e => {
                                    return e === 'Price' ?
                                        <b> Цена:{JSON.parse(elem.luxury_room)[e]}₽, </b> :
                                        JSON.parse(elem.luxury_room)[e] + ','
                                }
                                ) : ''}
                            </td>
                            <td className='description' onClick={(e) => changeDesc(e.target)}>
                                {elem.flight ? Object.keys(JSON.parse(elem.flight)).map(e => {
                                    return e + ' - ' + JSON.parse(elem.flight)[e].to + '-' + JSON.parse(elem.flight)[e].from + ';' + '\n'
                                }
                                ) : ''}
                            </td>
                            {elem.flight_price ? Object.keys(JSON.parse(elem.flight_price)).map(e => {
                                return <td>{JSON.parse(elem.flight_price)[e]} ₽</td>
                            }
                            ) : ''}
                            <td onClick={() => deleteHotels(elem.id)}>
                                <img src={minus}></img>
                            </td>
                        </tr>
                    }) : 'Данных нет'}
                </tbody>
            </table>
            {form ?
                <div className='create_tour_container'>
                    <form name='create_tour' className='create_tour'>
                        <input name='name' placeholder='Название отеля' />
                        <textarea name='hotel' placeholder='Описание (<br>) для абзацев' type='textarea' />
                        <label>Услуги</label>
                        <div>
                            {
                                services ? services.map((key,value)=>{
                                    return <span>{value}</span>
                                }) : ''
                            }
                        </div>
                        {/* <input name='eco_room' placeholder='Эконом-номер (через запятую, цена последняя)' />
                        <input name='standart_room' placeholder='Стандарт-номер (через запятую, цена последняя)' />
                        <input name='luxury_room' placeholder='Люкс-номер (через запятую, цена последняя)' />
                        <input name='date' placeholder='Даты, минимум 3 (через запятую, туда и обратно делить по -)' />
                        <input name='eco_price' placeholder='Цена за эконом перелет' />
                        <input name='standart_price' placeholder='Цена за стандарт перелет' />
                        <input name='bisness_price' placeholder='Цена за бизнесс перелет' /> */}
                    </form>
                    <button onClick={() => CreateHotel()}>
                        Добавить запись
                    </button>
                </div> : ''}
        </div>
    )
})
