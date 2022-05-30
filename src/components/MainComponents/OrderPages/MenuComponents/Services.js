import React, { useContext } from 'react'
import { MenuContext } from './General/MenuContext'

export default React.memo(function Services() {
  const {services} = useContext(MenuContext)
  return (
    <div className='services'>
      <ul className='services'>

        
      </ul>
    </div>
  )
})
