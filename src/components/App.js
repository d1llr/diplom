import Header from './headerComponents/Header';
import Main from './MainComponents/Main';
import { useState } from 'react';
import { BrowserRouter, Route, Routes, NavLink } from 'react-router-dom';
import OrderPage from './MainComponents/OrderPages/OrderPage';
import Mistake from './MainComponents/Mistake'
import Person from './headerComponents/Person';
import { UserContext } from './UserContext';
import { OrderContext } from './OrderContext';
import Slider from './Slider/Slider';
import { SliderContext } from './SliderContext';
import Loader from './Loader/Loader';

function App() {
  const [Theme, setTheme] =  useState('egipt');
  const [DataToSearch, setDataToSearch] = useState()
  const [Data, setData] = useState()
  const [ModalActive, setModalActive] = useState(false)
  const [SliderConnect,setSliderConnect] = useState(2)
  const [user,setUser] = useState(
      {'name': 'Войти'}
  )
  const [MainText, setMainText] = useState({
    h1:'Красивые места Египта',
    h3:'Спланируйте отпуск в самых красивых местах Египта'
  })
  document.body.onload = function(){
    setTimeout(() => {
      let preloader = document.getElementById('pre-loader');
      if (!preloader.classList.contains('done')){
        preloader.classList.add('done')
      }
    }, 1000);
  }
  console.log(Data);
  const [nextMainText, setNextMainText] = useState('Красивые места Австралии')
  return (
      <div id='app'> 
      <Loader/>
        <BrowserRouter>
          <UserContext.Provider value = {{user,setUser}}>
            <OrderContext.Provider value = {Data}>
              <SliderContext.Provider value = {{SliderConnect,setSliderConnect, MainText, setMainText, nextMainText, setNextMainText}} >
                <Slider/>
                  <Routes>
                    <Route path='/' element = { <Main setData = {setData}/>}/>
                    <Route path='/OrderPage' element = { Data ? <OrderPage data = {Data}/> : <Mistake />}/>
                    <Route path='/Person' element = {<Person/>}/>
                  </Routes> 
              <Header/>
              </SliderContext.Provider>
            </OrderContext.Provider>
           
          </UserContext.Provider>
        </BrowserRouter>
      </div>
    
  );
}

export default App;
