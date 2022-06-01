import React, { useContext, useState } from 'react'
import { MenuContext } from '../General/MenuContext'
import Slider from './RoomSlider/Slider'

export default React.memo(function Room() {
  const { room } = useContext(MenuContext)
  let EcoRoom = JSON.parse(room.eco_room)
  let StandartRoom = JSON.parse(room.standart_room)
  let LuxuryRoom = JSON.parse(room.luxury_room)
  const [chosen, setChosen] = useState()
  const RoomChoosen = (elem, name) =>{
    if (chosen){
      chosen.className = 'button'
      chosen.innerHTML = 'Выбрать'
      setChosen(elem)
      elem.className = 'button active'
      elem.innerHTML = 'Выбрано'
    }
    else{
      setChosen(elem)
      elem.className = 'button active'
    }
  }
  return (
    <ul className='room'>
      <li>
        <span className='name'>
          Эконом
        </span>
        <Slider class={'EcoRoom'} />
        <ul className='properties'>
          {Object.keys(EcoRoom).map((key) => {
            return key !== 'Price' ? <li className='properties-li'>{key === 'Area' ? '- ' + EcoRoom[key] + "м2" : '- ' + EcoRoom[key]}</li>
              : ''
          })}
        </ul>
        <div className='button-container' >
          <div className='price'>
            {EcoRoom.Price} ₽
          </div>
          <div className='button' onClick={(e)=>RoomChoosen(e.target, 'EcoRoom')}>
            Выбрать
          </div>
        </div>
      </li>
      <li>
        <span className='name'>
          Стандарт
        </span>
        <Slider class={'StandartRoom'} />
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
          <div className='button' onClick={(e)=>RoomChoosen(e.target, 'StandartRoom')}>
            Выбрать
          </div>
        </div>
      </li>
      <li>
        <span className='name'>
          Люкс
        </span>
        <Slider class={'LuxuryRoom'} />
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
          <div className='button' onClick={(e)=>RoomChoosen(e.target, 'LuxuryRoom')}>
            Выбрать
          </div>
        </div>
      </li>
    </ul>
  )
})
