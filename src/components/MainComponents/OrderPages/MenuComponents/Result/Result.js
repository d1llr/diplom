import React, { useContext, useState } from 'react'
import { AnswerContext } from '../../AnswerContext'
import { UserContext } from '../../../../UserContext'
import { InfoContext } from '../../InfoContext'
import { useNavigate } from 'react-router-dom';
import Success from '../../../../Success'
import { SuccessContext } from '../../../../SuccesContext';
export default React.memo(function Result() {
    const { answer, setAnswer } = useContext(AnswerContext)
    const info = useContext(InfoContext)
    const { user } = useContext(UserContext)
    const setSuccess = useContext(SuccessContext)

    let navigate = useNavigate();
    function routeChange() {
        let path = '/';
        navigate(path);
    }
    const setOrder = () => {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!re.test(String(document.forms.data.login.value).toLowerCase())) {
            console.log('Некорректый емаил');
            document.forms.data.login.className = 'error'
        }
        else {
            if (!isNaN(parseFloat(document.forms.data.tickets_count.value)) && isFinite(document.forms.data.tickets_count.value)) {
                let xhr = new XMLHttpRequest();
                let formdata = new FormData(document.forms.data);
                console.log(answer);
                formdata.set('tour_name', answer.tour.name)
                formdata.set('tour_country', answer.tour.country)
                formdata.set('tour_hotel', answer.tour.hotel)
                formdata.set('tour_room_name', answer.room.name)
                formdata.set('tour_flydata_name',answer.flyData.name)
                formdata.set('tour_price', (parseInt(answer.room.price.replace(' ',''),10)+parseInt(answer.flyData.price,10))*document.forms.data.tickets_count.value)
                formdata.set('tour_date_to', answer.date.split(' - ')[0])
                formdata.set('tour_date_from', answer.date.split(' - ')[1])
                xhr.open('POST', `http://romanmadraimov.diplom/setOrder`);
                xhr.onreadystatechange = function () {
                    if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
                        setSuccess(true)
                        routeChange()
                    }
                }
                xhr.send(formdata)
            }
            else {
                document.forms.data.tickets_count.className = 'error'
            }
        }
    }
    return (
        <div className='result'>
            <div className='result_info'>
                <h1>Заказ</h1>
                <table>
                    <tbody>
                        <tr>
                            <th>
                                Название услуги
                            </th>
                            <th>
                                Цена, ₽
                            </th>
                        </tr>
                        <tr>
                            <td>
                                {answer.room.name === 'eco_room' ? 'Номер класса "Эконом"' :
                                    answer.room.name === 'standart_room' ? 'Номер класса "Стандарт"' :
                                        answer.room.name === 'luxury_room' ? 'Номер класса "Люкс"' :
                                            ''}
                            </td>
                            <td>
                                {parseInt(answer.room.price.replace(' ', ''), 10)}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                {answer.flyData.name === 'eco' ? 'Перелет класса "Эконом"' :
                                    answer.flyData.name === 'standart' ? 'Перелет класса "Стандарт"' :
                                        answer.flyData.name === 'bisness' ? 'Перелет класса "Люкс"' :
                                            ''}
                            </td>
                            <td>
                                {answer.flyData.price}
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div className='date'>
                    <div className='to'>
                        <span className='name'>
                            Дата вылета
                        </span>
                        <span className='info'>
                            {answer.date.split(' - ')[0]}
                        </span>
                    </div>
                    <div className='from'>
                        <span className='name'>
                            Дата возвращения
                        </span>
                        <span className='info'>
                            {answer.date.split(' - ')[1]}
                        </span>
                    </div>
                </div>
                <h1 className='end'>Итого: {answer.flyData.price + parseInt(answer.room.price.replace(' ', ''), 10)}₽</h1>
            </div>
            <div className='form'>
                <h1>Оплата</h1>
                <form className='data' name='data'>
                    <input type='text' name='login' value={user.login} placeholder='Логин'></input>
                    <input type='text' name='tickets_count' placeholder='Количество билетов'></input>
                </form>
                <h3>*После покупки билеты придут на указанную почту<br />и в личный кабинет</h3>
                <h1 className='end' onClick={() => setOrder()}>Оплатить</h1>
            </div>
        </div>
    )
}
)