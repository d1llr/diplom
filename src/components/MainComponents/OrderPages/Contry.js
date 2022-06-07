import React, { useEffect, useRef, useState } from 'react'
import options from 'C:/diplom/src/img/options.svg'

export default function Contry(props) {
    const [Default, setDefault] = useState('Выберите страну')
    const [Show, setShow] = useState(true)
    const Menu = useRef()
    function showMenu(){
        setShow(prev => !prev)
        if (Show){
            Menu.current.className = 'select_body-Countrys'
            let xhr = new XMLHttpRequest();
            let response = {}
            xhr.open('GET', 'http://82.146.63.178/getCountrys');
            xhr.onreadystatechange = function() {
                if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
                    response = JSON.parse(xhr.response)
                    console.log(response);
                    setCountrys(response)
                }
                else if(xhr.readyState === XMLHttpRequest.DONE && xhr.status === 501){
                console.log('Ошибка при записи данных');
                }
            }
            xhr.send();    
        }
        else{
            Menu.current.className += ' hidden'
        }
        
    }
    function ChangeValue(elem){
        setDefault(elem)
        props.setCountry(elem)
        showMenu()
    }
    const [Countrys,setCountrys] = useState()
  return (
    <section className='contry'>
        <div className="select-Countrys">
                <div className="select-header-Countrys" onClick={() => showMenu()}>
                    <div className="current-container-Countrys">
                        <span className="text">Страна</span>
                    <span className="select_current-Countrys"><i>{Default}</i></span> 
                    </div>
                    <div className="select_icon"><img src={options} alt=""/></div>
                </div>
                <ul ref = {Menu}className="select_body-Countrys hidden">
                    {Countrys ? Countrys.map(elem => <li className='select_item' key={elem.name} onClick ={()=>ChangeValue(elem.name)}> {elem.name}</li>) : ''}
                </ul>
            </div>
    </section>
  )
}
