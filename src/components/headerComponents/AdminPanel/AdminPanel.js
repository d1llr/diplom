import React, { useState } from 'react'
import Users from './Users'
import Tours from './Tours'

import Hotels from './Hotels'

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
      </ul>
      {
        toggle === 'users' ? <Users/> : toggle === 'tours' ? <Tours/> : <Hotels/>
      }
      <div>

      </div>
    </div>
  )
}
