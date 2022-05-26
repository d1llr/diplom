import React from 'react'
import logo from 'C:/diplom/src/img/logo.svg'
import searchIcon from "C:/diplom/src/img/search_icon.svg"
import Modal from './Modal'
import { useEffect, useState,useContext } from 'react';
import blacklogo from 'C:/diplom/src/img/blacklogo.svg'
import Cookies from "js-cookie";
import { NavLink, useNavigate  } from 'react-router-dom';
import Person from './Person';
import { UserContext } from '../UserContext';


export default function Header(props) {
  const [ModalActive, setModalActive] = useState(false)
  const {user, setUser} = useContext(UserContext);
  const [emailError,setEmailError] = useState('')

  function login(e){
    console.log(e.login.value);
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(String(e.login.value).toLowerCase())) {
      setEmailError('Некорректный емейл')
      e.login.className +=' inputerror'
    } else {
      setEmailError('')
      e.login.className ='inputlogin'
    let xhr = new XMLHttpRequest();
    let response = {}
    let formData = new FormData(document.forms.person);
    xhr.open('POST', 'http://romanmadraimov.diplom/auth');
    // xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
            response = JSON.parse(xhr.response)
            console.log('Ответ сервера', response);
            Cookies.set('token',response[0].token)
            setUser({
                name: response[0].name,
                lastName :response[0].last_name,
                mobileNumber :response[0].mobile_number,
                middleName :response[0].middle_name,
                login :response[0].user_name,
                password :response[0].password,
                role: response[0].role
            }) 
            console.log('Токен', Cookies.get())
            setModalActive(false)
            routeChange()
            
        }
        else if(xhr.readyState === XMLHttpRequest.DONE && xhr.status === 403){
          setEmailError('Не правильный логин или пароль')
          e.login.className +=' inputerror'
        }
    }
    xhr.send(formData); 
    console.log(Cookies);
  }
}

  let navigate = useNavigate(); 
  function routeChange(){ 
    let path = '/person'; 
    navigate(path);
  }

  useEffect(()=>{
      if (Cookies.get('token')){
          let xhr = new XMLHttpRequest();
          let response = {}
          let formData = new FormData();
          formData.set('token', Cookies.get('token'))
          xhr.open('POST', 'http://romanmadraimov.diplom/autorize');
          // xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
          xhr.onreadystatechange = function() {
              if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
                  response = JSON.parse(xhr.response)
                  setUser({
                    name: response[0].name,
                    lastName :response[0].last_name,
                    mobileNumber :response[0].mobile_number,
                    middleName :response[0].middle_name,
                    login :response[0].user_name,
                    password :response[0].password,
                    role:response[0].role
                }) 
                  console.log('Пользователь зарегестрирован');
              }
              else if(xhr.readyState === XMLHttpRequest.DONE && xhr.status === 403){
                console.log('Пользователь не зарегестрирован');
              }
          }
          xhr.send(formData); 
      }
      else{
        
      }
    }
,[])

  return (
    <header>
        <div className="contact-info">
            <span>О нас</span>
            <span>Контакты</span>
        </div>
        <NavLink to= '/'>
          <img src={logo} alt="Логотип"/>
        </NavLink>
        <div className="authorize" onClick={()=>{user.name !== 'Войти' ? routeChange() : setModalActive(true)}}>
            <img src={searchIcon} alt=""/>
            <span>{user.name}</span>
        </div>
        <Modal active = {ModalActive} setActive = {setModalActive}>
          <section className='login'>
            <div className='logo'>
              <img src={blacklogo}/>
              <hr></hr>
            </div>
            <div className='text'>
              <span>Авторизируйтесь, чтобы вы могли управлять своей учетной записью, турами и т.д.</span>
            </div>
            <form name = 'person'>
              <label for = 'name' className='error'> {emailError}</label>
              <input placeholder='username' name = 'login' className='inputlogin'></input>
              <input placeholder='password' name = 'password' className='inputpassword'></input>
            </form>
            <div className='button'>
                <button onClick={()=>login(document.forms.person)}>
                  Войти
                </button>
              
            </div>
          </section>
        </Modal>
    </header>
  );
}