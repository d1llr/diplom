import React, { useEffect, useState } from 'react'
import minus from '../../../img/minus.svg'
import Success from '../../Success'
import Error from '../../Error'
export default function Tours() {
    const [data, setData] = useState()
    const [success, setSuccess] = useState(false)
    const [error, setError] = useState(false)
    const [form, setForm] = useState(false)
    useEffect(() => {
        let xhr = new XMLHttpRequest();
        let response = []
        xhr.open('GET', 'http://romanmadraimov.diplom/getTours');
        xhr.onreadystatechange = function () {
            if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
                response = JSON.parse(xhr.response)
                setData(response)
                console.log('data', data);
                setSuccess(false)
                setError(false)
            }
        }
        xhr.send();
    }, [success, error])
    function deleteTours(id) {
        let xhr = new XMLHttpRequest();
        let response = []
        let formdata = new FormData()
        formdata.set('id', id)
        xhr.open('POST', 'http://romanmadraimov.diplom/deleteTour');
        xhr.onreadystatechange = function () {
            if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
                console.log('Тур удален');
                setSuccess(true)
            }
        }
        xhr.send(formdata);
    }
    function CreateTour() {
        let xhr = new XMLHttpRequest();
        let response = []
        let formdata = new FormData(document.forms.create_tour)
        xhr.open('POST', 'http://romanmadraimov.diplom/createTours');
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
    return (
        <div className='tours'>
            <table>
                <tr>
                    <th>
                        id
                    </th>
                    <th>
                        Имя
                    </th>
                    <th>
                        Отель
                    </th>
                    <th>
                        Страна
                    </th>
                    <th>
                        Дата отправления
                    </th>
                    <th>
                        Дата возвращения
                    </th>
                    <th>
                        Количество билетов
                    </th>
                    <th>
                        Описание +
                    </th>
                    <th>
                        Описание -
                    </th>
                    <th>
                        Цена
                    </th>
                    <th>
                        Скидка
                    </th>
                    <th>
                        <button onClick={() => setForm(true)}>
                            Добавить запись
                        </button>
                    </th>
                </tr>
                {
                    data ? data.map((elem) => {
                        return <tr>
                            <td>
                                {elem.id}
                            </td>
                            <td>
                                {elem.name}
                            </td>
                            <td>
                                {elem.hotel}
                            </td>
                            <td>
                                {elem.country}
                            </td>
                            <td>
                                {elem.depart_date}
                            </td>
                            <td>
                                {elem.arrive_date}
                            </td>
                            <td>
                                {elem.ticket_limit}
                            </td>
                            <td>
                                {elem.description_plus}
                            </td>
                            <td>
                                {elem.description_minus}
                            </td>
                            <td>
                                {elem.price}
                            </td>
                            <td>
                                {elem.discount}
                            </td>
                            <td onClick={() => deleteTours(elem.id)}>
                                <img src={minus}></img>
                            </td>
                        </tr>
                    }) : 'Данных нет'
                }
            </table>
            {form ?
                <div className='create_tour_container'>
                    <form name='create_tour'>
                        <input name='name' placeholder='Имя' />
                        <input name='hotel' placeholder='Отель' />
                        <input name='country' placeholder='Страна' />
                        <input name='depart_date' placeholder='Дата отправления' />
                        <input name='arrive_date' placeholder='Дата возвращения' />
                        <input name='ticket_limit' placeholder='Количество билетов' />
                        <input name='description_plus' placeholder='Описание +' />
                        <input name='description_minus' placeholder='Описание -' />
                        <input name='price' placeholder='Цена' />
                        <input name='discount' placeholder='Скидка' />
                    </form>
                    <button onClick={() => CreateTour()}>
                        Добавить запись
                    </button>
                </div> : ''}
            {success ? <Success /> : ''}
            {error ? <Error /> : ''}
        </div>
    )
}

