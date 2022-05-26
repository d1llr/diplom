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
  const [nextMainText, setNextMainText] = useState('Красивые места Австралии')
  return (
      <div id='app'> 
        <BrowserRouter>
          <UserContext.Provider value = {{user,setUser}}>
            <OrderContext.Provider value = {Data}>
              <SliderContext.Provider value = {{SliderConnect,setSliderConnect, MainText, setMainText, nextMainText, setNextMainText}} >
                <Slider/>
                  <Routes>
                    <Route path='/' element = { <Main ans = {setDataToSearch} DataToSearch = {DataToSearch} setResultData = {setData}/>}/>
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