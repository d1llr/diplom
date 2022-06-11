import React from 'react'
import Photo from './earth.png'
import LoaderCircle from './loaderCircle.png'
export default function Loader() {
  return (
    <div id='pre-loader' className='preloader'>
      <div className='loader'>
        <img src={LoaderCircle} className='circle' />
      </div>
      <div className='center-photo'>
        <img src={Photo} />
      </div>
    </div>
  )
}
