import React, { useContext } from 'react'
import { MenuContext } from '../General/MenuContext'

export default React.memo(function Services() {
  const { services } = useContext(MenuContext)
  function IMGChecker(img){
    let res = ''
    try{
      res = require(`./icons/${img}.png`)
    }
    catch{
      res =  require(`./icons/img1.png`)
    }
    return res
  }
  return (
      <ul className='services'>
        {
          services ? Object.keys(services).map(key => {
            return <li>
              <div className='img_container'>
                <img src={IMGChecker(key)}/>
              </div>
              
              {services[key]}
            </li>
          }) : ''
        }
      </ul>
  )
})
