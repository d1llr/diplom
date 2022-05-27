import React, { useContext } from 'react'
import { UserContext } from "../../UserContext";
const Modal = ({ active, setActive, elem, setSuccess }) => {

  const { user } = useContext(UserContext)


  const setDataToDatabase = (elem) => {
    console.log(elem.ticket_limit);
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(re.test(String(document.forms.purchased_order.email.value).toLowerCase()),
      document.forms.purchased_order.tickets.value <= elem.ticket_limit){
      let xhr = new XMLHttpRequest();
      let response = {}
      let formData = new FormData(document.forms.purchased_order);
      formData.set('elem', elem.id)
      xhr.open('POST', 'http://romanmadraimov.diplom/setOrder');
      // xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
      xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 201) {
          response = JSON.parse(xhr.response)
          console.log(response);
          setActive(false)
          setSuccess(true)
        }
        else if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 501) {
          console.log('Ошибка при записи данных');
        }
      }
      xhr.send(formData);
    }
    else{
      console.log("Ошибка при записи");
    }
      
    }
  return (
    <div className={active ? 'modal modal_active' : 'modal'} onClick={() => setActive(false)}>
      <div className={active ? 'modal__contant modal__contant_active' : 'modal__contant'} onClick={e => e.stopPropagation()}>
        <form className='purchased_order' name='purchased_order'>
          <label for='email'>Почта </label>
          <input type='text' placeholder='example@gmail.com' name='email' value={user.login ? user.login : ''} />
          <label for='tickets'>Количество билетов </label>
          <input type='text' placeholder='2' name='tickets' />
        </form>
        <button className='Custom_Button' onClick={() => setDataToDatabase(elem)}>
          Купить
        </button>
      </div>
    </div>
  )
}

export default Modal

