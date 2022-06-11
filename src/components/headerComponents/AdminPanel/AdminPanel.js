import React, { useState } from 'react'
import Users from './Users'
import Tours from './Tours'

import Hotels from './Hotels'
import AllPurchases from './AllPurchases'

export default function AdminPanel() {
  const [toggle,setToggle] = useState('users')
  return (
    <div className='admin'>
      <ul className='admin_menu'>
        <li onClick={()=>{
          setToggle('users')
        }} className = {toggle === 'users' ? 'item current': 'item'}>
          Список пользователей
        </li>
        <li onClick={()=>{
          setToggle('tours')
          }} className = {toggle === 'tours' ? 'item current': 'item'}>
          Список туров
        </li>
        <li onClick={()=>{
          setToggle('hotels')
          }} className = {toggle === 'hotels' ? 'item current': 'item'}>
          Список отелей
        </li>
        <li onClick={()=>{
          setToggle('purchases')
          }} className = {toggle === 'purchases' ? 'item current': 'item'}>
          Список покупок
        </li>
      </ul>
      {
        toggle === 'users' ? <Users/> : toggle === 'tours' ? <Tours/> : toggle === 'hotels'?<Hotels/> : <AllPurchases/>
      }
      <div>

      </div>
    </div>
  )
}
