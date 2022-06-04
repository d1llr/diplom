import React, { useContext, useEffect, useState } from 'react'
import { AnswerContext } from '../../AnswerContext'
import { MenuContext } from '../General/MenuContext'
import Slider from './RoomSlider/Slider'

export default React.memo(function Room() {
  const { room } = useContext(MenuContext)
  const { answer, setAnswer } = useContext(AnswerContext)
  let EcoRoom = JSON.parse(room.eco_room)
  let StandartRoom = JSON.parse(room.standart_room)
  let LuxuryRoom = JSON.parse(room.luxury_room)
  const [chosen, setChosen] = useState()
  const RoomChoosen = (elem, str, price) => {
    if (chosen) {
      chosen.className = 'button'
      chosen.innerHTML = 'Выбрать'
      setChosen(elem)
      elem.className = 'button active'
      elem.innerHTML = 'Выбрано'
      setAnswer({
        ...answer,
        room: {
          name: str,
          price: price
        }
      })
    }
    else {
      setChosen(elem)
      elem.className = 'button active'
      elem.innerHTML = 'Выбрано'
      setAnswer({
        ...answer,
        room: {
          name: str,
          price: price
        }
      })
    }
  }
  return (
    <ul className='room'>
      <li>
        <span className='name'>
          Эконом
        </span>
        <Slider class={'eco'} />
        <ul className='properties'>
          {Object.keys(EcoRoom).map((key) => {
            return key !== 'Price' ? <li key={key} className='properties-li'> {key === 'Area' ? '- ' + EcoRoom[key] + "м2" : '- ' + EcoRoom[key]}</li>
              : ''
          })}
        </ul>
        <div className='button-container' >
          <div className='price'>
            {EcoRoom.Price} ₽
          </div>
          {
            answer.room.name === 'eco_room' ?
              <div className='button active'>
                Выбрано
              </div> :
              <div className='button'
                onClick={(e) => RoomChoosen(e.target, 'eco_room', EcoRoom.Price)}>
                Выбрать
              </div>
          }
        </div>
      </li>
      <li>
        <span className='name'>
          Стандарт
        </span>
        <Slider class={'standart'} />
        <ul className='properties'>
          {Object.keys(StandartRoom).map((key) => {
            return key !== 'Price' ? <li className='properties-li'>{key === 'Area' ? '- ' + StandartRoom[key] + "м2" : '- ' + StandartRoom[key]}</li>
              : ''
          })}
        </ul>
        <div className='button-container' >
          <div className='price'>
            {StandartRoom.Price} ₽
          </div>
          {
            answer.room.name === 'standart_room' ?
              <div className='button active'>
                Выбрано
              </div> :
              <div className='button'
                onClick={(e) => RoomChoosen(e.target, 'standart_room', StandartRoom.Price)}>
                Выбрать
              </div>
          }
        </div>
      </li>
      <li>
        <span className='name'>
          Люкс
        </span>
        <Slider class={'luxury'} />
        <ul className='properties'>
          {Object.keys(LuxuryRoom).map((key) => {
            return key !== 'Price' ? <li className='properties-li'>{key === 'Area' ? '- ' + LuxuryRoom[key] + "м2" : '- ' + LuxuryRoom[key]}</li>
              : ''
          })}
        </ul>
        <div className='button-container' >
          <div className='price'>
            {LuxuryRoom.Price} ₽
          </div>
          {
            answer.room.name === 'luxury_room' ?
              <div className='button active'>
                Выбрано
              </div> :
              <div className='button'
                onClick={(e) => RoomChoosen(e.target, 'luxury_room', LuxuryRoom.Price)}>
                Выбрать
              </div>
          }
        </div>
      </li>
    </ul>
  )
})
