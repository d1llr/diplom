import React, { useEffect, useState } from 'react'
import minus from '../../../img/minus.svg'
import Success from '../../Success'
import Error from '../../Error'
export default function Users() {
    const [data, setData] = useState()
    const [success, setSuccess] = useState(false)
    const [error, setError] = useState(false)
    useEffect(()=>{
        let xhr = new XMLHttpRequest();
        let response = []
        xhr.open('GET', 'http://romanmadraimov.diplom/getUsers');
        xhr.onreadystatechange = function() {
            if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
                response = JSON.parse(xhr.response)
                setData(response)
                console.log('data',data);
            }
        }
        xhr.send(); 
    },[])
    function deleteUser(id){
        let xhr = new XMLHttpRequest();
        let response = []
        let formdata = new FormData()
        formdata.set('id', id)
        xhr.open('POST', 'http://romanmadraimov.diplom/deleteUser');
        xhr.onreadystatechange = function() {
            if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
                response = JSON.parse(xhr.response)
                console.log('Пользователь удален');
                setSuccess(true)
            }
            else{
                setError(true)
            }
        }
        xhr.send(formdata); 
    }
  return (
    <div className='users'>
      <table>
          <tr>
              <th>
                  id
              </th>
              <th>
                  Логин
              </th>
              <th>
                  Пароль (md5)
              </th>
              <th>
                  Номер телефона
              </th>
              <th>
                  Имя
              </th>
              <th>
                  Фамилия
              </th>
              <th>
                  Отчество
              </th>
              <th>
                  Роль
              </th>
          </tr>
          {
            data ? data.map((elem)=>{
                return <tr>
                    <td>
                        {elem.id}
                    </td>
                    <td>
                        {elem.user_name}
                    </td>
                    <td>
                        {elem.password}
                    </td>
                    <td>
                        {elem.mobile_number}
                    </td>
                    <td>
                        {elem.name}
                    </td>
                    <td>
                        {elem.last_name}
                    </td>
                    <td>
                        {elem.middle_name}
                    </td>
                    <td>
                        {elem.role}
                    </td>
                    <td onClick={()=>deleteUser(elem.id)}>
                        <img src={minus}></img>
                    </td>
                </tr>
            }) : 'Данных нет'
          }
      </table>
      {success ? <Success/> : ''}
      {error ? <Error/> : ''}
    </div>
  )
}
