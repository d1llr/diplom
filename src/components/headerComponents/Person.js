import React, { useContext, useEffect, useState } from "react";
import { Link, Router, useNavigate } from "react-router-dom";
import { UserContext } from "../UserContext";
import Account from "./Account";
import Purchases from './Purchases'
import {NavLink}  from 'react-router-dom';
import Cookies from "js-cookie";
import AdminPanel from "./AdminPanel/AdminPanel";



export default function Person(props) {
    const [account, setAccount] = useState(true)
    const {user, setUser} = useContext(UserContext);
    let navigate = useNavigate(); 
    function routeChange(){ 
      let path = '/'; 
      navigate(path);
    }

    // Проверка на владение токеном
    useEffect(()=>{
      Cookies.get('token') ? console.log('Куки есть'):routeChange();
    })
    // Функция выхода
    function logout(){
      setUser({'name':'Войти'})
      Cookies.remove('token')
      routeChange()
    }
  return (
    <div className='Person'>
      <div className="Person__header">
        <h1>Личный кабинет {user.name ? user.name : 'Пользователя'}</h1>
        <section className="menu">
          <ul>
                <li onClick={()=>setAccount(true)}>
                  Аккаунт
                </li>
                <li onClick={()=>setAccount(false)}>
                  Покупки
                </li>
                {
                  user.role == 'admin' ? <li onClick={()=>setAccount('admin')}>Панель администратора</li> : ''
                }
                <li className="logout" onClick={()=>logout()}>
                  Выйти
                </li>
          </ul>
        </section>
      </div>
      <div className="Person_contant">
        {
          account === 'admin'  ? <AdminPanel/> : account ? <Account /> :  <Purchases/>
        }
      </div>
    </div>
  )
}
