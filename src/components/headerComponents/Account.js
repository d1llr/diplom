import React from 'react'
import Swoosh from 'C:/diplom/src/img/swoosh.svg'
import { UserContext } from "../UserContext";
import { useContext, useEffect, useState } from "react";
import { useNavigate  } from 'react-router-dom';
export default function Account() {
    const {user, setUser} = useContext(UserContext);
    const [emailError,setEmailError] = useState('Email')
    const [labelClassName, setlLabelClassName] = useState('label')


    
    let navigate = useNavigate(); 
    function routeChange(){ 
        let path = '/'; 
        navigate(path);
  }

    function ChangeLogin(form, users){
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!re.test(String(form.login.value).toLowerCase())) {
            setEmailError('Некорректный емейл')
            form.login.className += 'inputerror'
            setlLabelClassName('label error')
        } else {
            setEmailError('Email')
            form.login.className ='inputlogin'
            setEmailError('')
            var xhr = new XMLHttpRequest();
            let response = {}
            let formData = new FormData(form);
            formData.set('user', users)
            xhr.open('POST', 'http://romanmadraimov.diplom/changeLogin');
            // xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
            xhr.onreadystatechange = function() {
                if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
                    response = JSON.parse(xhr.response)    
                    setEmailError('Ваши данные обновлены')
                    setlLabelClassName('label success')
                    console.log(response);
                    setUser({
                        ...user,
                        login : form.login.value
                    })
                }
                else if(xhr.readyState === XMLHttpRequest.DONE && xhr.status === 403){
                    setEmailError('Ошибка при записи')
                    console.log(JSON.parse(xhr.response));
                    form.login.className +=' inputerror'
                }
            }
                xhr.send(formData); 
    }
    }
  return (
    <div className='account'>
        <div className='account_info'>
    <h1>Данные о профиле</h1>
            <ul>
                <li>
                    <div className='info'>
                        <span className='desc'>
                            Имя
                        </span>
                        <span className='value'>
                            {user.name}
                        </span>
                    </div>
                    <img src={Swoosh}/>
                </li>
                <li>
                    <div className='info'>
                        <span className='desc'>
                            Фамилия
                        </span>
                        <span className='value'>
                            {user.lastName}
                        </span>
                    </div>
                    <img src={Swoosh}/>
                </li>
                <li>
                    <div className='info'>
                        <span className='desc'>
                            Отчество (если имеется)
                        </span>
                        <span className='value'>
                            {user.middleName}
                        </span>
                    </div>
                    <img src={Swoosh}/>
                </li>
                <li>
                    <div className='info'>
                        <span className='desc'>
                            Номер телефона
                        </span>
                        <span className='value'>
                            {user.mobileNumber}
                        </span>
                    </div>
                    <img src={Swoosh}/>
                </li>
            </ul>
        </div>
        <div className='change_account_info'>
            <h2>
                Данные для входа
            </h2>
            <form name = 'username'>
                <label for = 'name' className={labelClassName}> {emailError}</label>
                <input type='text' name = 'login' placeholder={user.login} className = 'inputlogin'></input>
                <label for = 'password'> Пароль</label>
                <input type='password' name = 'password'  placeholder='**********'></input>
            </form>
            <button onClick={()=>ChangeLogin(document.forms.username,user.login)}>
                Применить
            </button>
        </div>
        
    </div>
  )
}