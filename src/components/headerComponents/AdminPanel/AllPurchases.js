import React, { useEffect, useState } from 'react'
import minus from '../../../img/minus.svg'
import Success from '../../Success'
import Error from '../../Error'
export default React.memo(function Tours() {
    const [data, setData] = useState()
    const [success, setSuccess] = useState(false)
    const [error, setError] = useState(false)
    const [form, setForm] = useState(false)
    useEffect(() => {
        let xhr = new XMLHttpRequest();
        let response = []
        xhr.open('GET', 'http://82.146.63.178/getPurchases');
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
    function deletePurchases(id) {
        let xhr = new XMLHttpRequest();
        let response = []
        let formdata = new FormData()
        formdata.set('id', id)
        xhr.open('POST', 'http://82.146.63.178/deletePurchases');
        xhr.onreadystatechange = function () {
            if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
                console.log('Покупка удалена');
                setSuccess(true)
            }
        }
        xhr.send(formdata);
    }
    return (
        <div className='tours'>
            <table>
                <tbody>
                    <tr>
                        <th rowSpan='2'>
                            id
                        </th >
                        <th rowSpan='2'>
                            Логин
                        </th>
                        <th rowSpan='2'>
                            Количество билетов
                        </th>
                        <th colSpan='9'>
                            Информация
                        </th>
                    </tr>
                    <tr>
                        <th>
                            Название тура
                        </th>
                        <th>
                            Страна
                        </th>
                        <th>
                            Отель
                        </th>
                        <th>
                            Номер
                        </th>
                        <th>
                            Цена номера,₽ 
                        </th>
                        <th>
                            Перелет
                        </th>
                        <th>
                            Цена перелета,₽ 
                        </th>
                        <th>
                            Дата вылета
                        </th>
                        <th>
                            Дата возвращения
                        </th>
                        <th>
                            Итоговая цена
                        </th>
                    </tr>
                    {
                        data ? data.map((elem) => {
                            return <tr>
                                <td>
                                    {elem.id}
                                </td>
                                <td>
                                    {elem.login}
                                </td>
                                <td>
                                    {elem.tickets_count}
                                </td>
                                <td>
                                    {JSON.parse(elem.info).tour_name}
                                </td>
                                <td>
                                    {JSON.parse(elem.info).tour_country}
                                </td>
                                <td>
                                    {JSON.parse(elem.info).tour_hotel}
                                </td>
                                <td>
                                    {JSON.parse(elem.info).tour_room_name}
                                </td>
                                <td>
                                    {JSON.parse(elem.info).tour_room_price}
                                </td>
                                <td>
                                    {JSON.parse(elem.info).tour_flydata_name}
                                </td>
                                <td>
                                    {JSON.parse(elem.info).tour_flydata_price}
                                </td>
                                <td>
                                    {JSON.parse(elem.info).tour_date_to}
                                </td>
                                <td>
                                    {JSON.parse(elem.info).tour_date_from}
                                </td>
                                <td>
                                    {JSON.parse(elem.info).tour_price}
                                </td>
                                <td onClick={() => deletePurchases(elem.id)}>
                                    <img src={minus}></img>
                                </td>
                            </tr>
                        }) : 'Данных нет'
                    }
                </tbody>
            </table>
            {form ?
                <div className='create_tour_container'>
                    <form name='create_tour'>
                        <input name='name' placeholder='Имя' />
                        <input name='hotel' placeholder='Отель' />
                        <input name='country' placeholder='Страна' />
                    </form>
                </div> : ''}
            {success ? <Success /> : ''}
            {error ? <Error /> : ''}
        </div>
    )
}
)
