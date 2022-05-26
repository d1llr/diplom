import React, { useEffect, useState, useMemo } from 'react'
import { UserContext } from './UserContext';
import Cookies from 'js-cookies'

export default function Test() { 
    const [user, setUser] = useState(null);
    const value = useMemo(() => ({ user, setUser }), [user, setUser]);
    const [state,setState] = useState([{
        id:'012313',
        name : 'roman'
    }])
    // useEffect(()=>{
    //     var xhr = new XMLHttpRequest();
    //     let formData = new FormData(document.forms.person);
    //     xhr.open('POST', 'http://romanmadraimov.diplom/test.php');
    //     // xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    //     xhr.onreadystatechange = function() {
    //         if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
    //         console.log(xhr.responseText);
    //         }
    //     }
    //     xhr.send(formData);
    // },[Clicked])
    const Data = {
        id : '1',
        name : 'test'
    }
    function test(){
        var xhr = new XMLHttpRequest();
        let formData = new FormData(document.forms.person);
        xhr.open('POST', 'http://romanmadraimov.diplom/auth');
        // xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.onreadystatechange = function() {
            if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
                let response = JSON.parse(xhr.response)
                console.log(response);
                Cookies.set('response')
            }
        }
        xhr.send(formData);
        Cookies.get();
    }
  return (
    <div>
        <button onClick={()=>test()}> 
            Отправить
        </button>
            {
                // Cookies.token == '12345678' ? console.log(Cookies.user) : console.log('Ошибка')
            }
        {/* {
            state.map(elem => <li> {elem.id} - {elem.name}</li>)
        } */}
        <form name='person'>
            <input type='text' name='login'>
            </input>
            <input type='text' name='password'>
            </input>
        </form>
    </div>
  )
}
