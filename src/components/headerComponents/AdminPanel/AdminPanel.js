import React, { useState } from 'react'
import Users from './Users'
import Tours from './Tours'



export default function AdminPanel() {
  const [toggle,setToggle] = useState('users')
  return (
    <div className='admin'>
      <ul className='admin_menu'>
        <li onClick={()=>setToggle('users')}>
          Список пользователей
        </li>
        <li onClick={()=>setToggle('tours')}>
          Список туров
        </li>
      </ul>
      {
        toggle === 'users' ? <Users/> : <Tours/>
      }
      <div>

      </div>
    </div>
  )
}
