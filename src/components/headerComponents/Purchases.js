import React, { useEffect, useContext, useState } from 'react'
import Answer from './Purchases/Answer';
import BadAnswer from './Purchases/BadAnswer';
import { UserContext } from "C:/diplom/src/components/UserContext";
export default function Purchases() {
  const {user, setUser} = useContext(UserContext);
  const [data, setData] = useState()
  const [ans, setAns] = useState(false)
  useEffect(()=>{
    let xhr = new XMLHttpRequest();
    let response = {}
    let formData = new FormData();
    formData.set('login', user.login)
    xhr.open('POST', 'http://82.146.63.178/getOrder');
    // xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
            response = JSON.parse(xhr.response)
            console.log(response);
            setAns(true)
            setData(response)
        }
        else if(xhr.readyState === XMLHttpRequest.DONE && xhr.status === 501){
          console.log('Ошибка при записи данных');
        }
    }
    xhr.send(formData); 
    console.log(data);
  },[])
  return (
    <div>
      { ans ? <Answer data={data}/> : <BadAnswer/>}
    </div>
  )
}
