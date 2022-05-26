import React, { useState } from 'react'
import Left from './footerComponents/Left'
import Depart from './footerComponents/Depart'
import Arrive from './footerComponents/Arrive'
import Right from './footerComponents/Right'
// import Contry from './footerComponents/Contry'
export default function Footer(props) {
    const [ans1, setAns1] = useState('')
    const [ans2, setAns2] = useState('')
    const [ans3, setAns3] = useState('')
    const [ans4, setAns4] = useState('')
    const [ans5, setAns5] = useState(123)
    const [ans6, setAns6] = useState(1488)
    const DataRows = ['NameOfHotel','Country','DepartDate','ArriveDate','People','Child']
    console.log(ans1,ans2,ans3,ans4,ans5);
    function test(){
        var xhr = new XMLHttpRequest();
        var formElement = new FormData()
        formElement.set('NameOfHotel', ans1)
        formElement.set('Country', ans2)
        formElement.set('DepartDate', ans3)
        formElement.set('ArriveDate', ans4)
        formElement.set('People', ans5)
        formElement.set('Child', ans6)
        xhr.open('POST', 'http://romanmadraimov.diplom/test1.php');
        // xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.onreadystatechange = function() {
            if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
                console.log(xhr.response);
                // console.log('Словарь из js ', Data);
                // setState(JSON.parse(xhr.response));
            }
        }
        xhr.send(formElement);
        console.log('Запрос отправлен', formElement);
        return 'хуй'
    }
  return (
        <footer className='mainPageFooter_container'>
        <section className='mainPageFooter'>
            <span><i>Забронируйте любой тур</i></span>
            <div className='mainPageFooter-contant'>
                <form className="sections_container" name = 'footer'>
                    {/* <Left NameOfHotel ={props.NameOfHotel} ans = {setAns1} name = 'test1'/> */}
                    {/* <Contry Countrys = {props.Countrys}  ans = {setAns2}/> */}
                    {/* <Depart Month = {props.Month}  ans = {setAns3}/>
                    <Arrive Month = {props.Month}  ans = {setAns4}/>
                    <Right  ans = {setAns5}/> */}
                </form> 
                <button onClick={()=>{
                    props.setData(ans1, ans2);
                    test();
                }
                    }>Найти</button>
            </div>
            </section>  
        </footer>
  )
}
