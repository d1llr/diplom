import React from 'react'

export default React.memo(function About() {
  return (
    <div className='about'>
      <h1> О компании Летим.ру</h1>
       <h1 className='center'>Отправляйтесь в свое лучшее путешествие!</h1>
       
       <ul>
            <span>
                Компания Летим.ру, начиная с 2017 года, организовывает туры по всему миру для своих клиентов.
                <br></br>Тысячи наших клиентов остались довольны, отдохнув в таких странах, как :
            </span>    
            <li>
                Египет
            </li>
            <li>
                Турция
            </li>
            <li>
                Америка
            </li>
            <li>
                И т.д.
            </li>
       </ul>
       <h3>
           Офис компании находится по адресу: Россия, Московская область, город Пушкино, Акуловский проезд, дом 3
       </h3>
       <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2230.732332378614!2d37.82270065175418!3d56.00598897980802!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b52f18788a7fdb%3A0xe198f130ad06e8b1!2z0JDQutGD0LvQvtCy0YHQutC40Lkg0L_RgC3QtCwg0J_Rg9GI0LrQuNC90L4sINCc0L7RgdC60L7QstGB0LrQsNGPINC-0LHQuy4sIDE0MTIwNg!5e0!3m2!1sru!2sru!4v1654588062803!5m2!1sru!2sru"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
  )
})
