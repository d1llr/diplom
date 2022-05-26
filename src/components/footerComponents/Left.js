
import home from './img/home.svg'
import options from './img/options.svg'


import React, { Component } from 'react'

export default class Left extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            NameOfHotel:props.NameOfHotel,
            Default:"Выберите отель",
            show: false
        }
    }
    
        showMenu = () => {
            let selectBody = document.querySelector(".select_body");
            let selectIcon = document.querySelector(".select_icon");
            selectBody.classList.toggle("hidden");
            selectIcon.classList.toggle("transform");
            this.setState({show:!this.state.show});
        }
        ChangeValue = elem => {
            this.setState({
                Default:elem,
                show: false
            });
            this.showMenu();
            this.props.ans(elem)
        }

  render() {
    return (
        <section className="left">
            <div className="select">
                <div className="select-header" onClick={() => this.showMenu()}>
                    <img src={home} alt=""/>
                    <div className="current-container">
                        <span className="text">Куда</span>
                    <span className="select_current"><i>{this.state.Default}</i></span> 
                    </div>
                    <div className="select_icon"><img src={options} alt=""/></div>
                </div>
                <ul className="select_body hidden">
                    {this.props.NameOfHotel.map(elem => <li className='select_item' key={elem} onClick = {elems => this.ChangeValue(elems.target.innerHTML)}> {elem}</li>)}
                </ul>
            </div>
        </section>
    )
  }
}

// export default function Left(props) {
//     function task1(){
//         console.log(!props.activity);
//     }
//     function task2(){
//         let x = props.activity ?  "select_body": "select_body hidden";
        
//         return x;
//     }
//     return (
//              <section className="left" onClick={task2()}>
//                  <div className="select">
//                      <div className="select-header">
//                          <img src={home} alt=""/>
//                          <div className="current-container">
//                              <span className="text">Куда</span>
//                          <span className="select_current"><i>Apartamentos Mont Blanc Asn</i></span> 
//                          </div>
//                          <div className="select_icon"><img src={options} alt=""/></div>
//                      </div>
//                      <div className={task2()}>
//                          <div className="select_item">1</div>
//                          <div className="select_item">2</div>
//                         <div className="select_item">3</div>
//                          <div className="select_item">4</div>
//                          <div className="select_item">5</div>
//                      </div>
//                  </div>
//              </section>
//       )
// }
