import React, { useContext } from 'react'
import { AnswerContext } from '../../AnswerContext'

export default React.memo(function Result() {
    const { answer, setAnser } = useContext(AnswerContext)
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
                                        answer.flyData.name === 'luxury' ? 'Перелет класса "Люкс"' :
                                            ''}
                            </td>
                            <td>
                                {parseInt(answer.flyData.price.replace(' ', ''), 10)}
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
                <h1 className='end'>Итого: {parseInt(answer.room.price.replace(' ', ''), 10) + parseInt(answer.flyData.price.replace(' ', ''), 10)}₽</h1>
            </div>
            <div className='form'>
                <h1>Оплата</h1>
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
                                        answer.flyData.name === 'luxury' ? 'Перелет класса "Люкс"' :
                                            ''}
                            </td>
                            <td>
                                {parseInt(answer.flyData.price.replace(' ', ''), 10)}
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
                <h1 className='end'>Итого: {parseInt(answer.room.price.replace(' ', ''), 10) + parseInt(answer.flyData.price.replace(' ', ''), 10)}₽</h1>
            </div>
        </div>
    )
}
)