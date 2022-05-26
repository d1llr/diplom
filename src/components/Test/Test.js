import React, { useEffect, useState, useMemo, useContext} from 'react'
import Cookies from "js-cookie";
import {UserContext}  from "./UserContext";
import  Home  from './Home';
import About  from "./About";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


export default function Test() {
    const [def,setDef] = useState(false)
    const [user,setUser] = useState( Cookies ? {
        'name':Cookies.get('name'),
        'lastname':Cookies.get('lastname')
    }:{
        'name': 'default',
        'lastname': 'default',
    })

    function login(){
        var xhr = new XMLHttpRequest();
        let response = {}
        let formData = new FormData(document.forms.person);
        xhr.open('POST', 'http://romanmadraimov.diplom/auth');
        // xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.onreadystatechange = function() {
            if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
                response = JSON.parse(xhr.response)
                console.log(response);
                Cookies.set('token',response.token)
                Cookies.set('name', response.user.name)
                Cookies.set('lastname', response.user.lastname)
                setUser({
                    'name':Cookies.get('name'),
                    'lastname':Cookies.get('lastname')
                })
                console.log('Токен', Cookies.get())
            }
        }
        xhr.send(formData);
        
        
    }
    function logout(){
        Cookies.remove('token')
        Cookies.remove('name')
        Cookies.remove('lastname')
        console.log('Куки при удалении', Cookies);
        setUser('')
    }
    
    useEffect(()=>{
        console.log('Куки изменились!');
    },[user])
  return ( 
    <div> 
        <div>

            <button onClick={()=>{
                Cookies ? 
                login() : logout()}}> 
                Нажать
            </button>
                <form name='person'>
                    <input type='text' name='login'>
                    </input>
                    <input type='text' name='password'>
                    </input>
                </form>
            </div>
             <div>
                <UserContext.Provider value = {user}>
                    {/* < Home /> */}
                    < About />
                </UserContext.Provider>
            </div>
        <button onClick = {()=>{Cookies.remove('name'); Cookies.remove('token');Cookies.remove('lastname');}}>
            Почистить куки
        </button>
        <button onClick = {()=>console.log(Cookies.get())}>
            Посмотреть куки
        </button>
        <button onClick = {()=>{
            console.log(Cookies.name)
            setUser({
                'name':Cookies.get('name'),
                'lastname':Cookies.get('lastname')
            })
        }}>
            Записать в hTML
        </button>
    </div>
  )
}
