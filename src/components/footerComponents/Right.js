import React, { Component } from 'react'
import tourist from './img/tourists.svg'
import options from './img/options.svg'
import child from './img/child.svg'

export default class Right extends Component {
    constructor(props){
        super(props);
        this.state = {
            people:'Выбор',
            child: '',
            show: false
        }
    }
    showMenu = () => {
        let selectBody = document.querySelector(".select-right-body");
        let selectIcon = document.querySelector(".select-right-icon");
        selectBody.classList.toggle("hidden");
        selectIcon.classList.toggle("transform");
        this.setState({show:!this.state.show});
    }
    setPeople = (elem, e) => {
        let x = elem == 1 ? elem + ' взрослый': elem > 1 ? elem + ' взрослых': 'Выбор'; 
        this.setState({people:x}); 
        this.props.ans(x)
    }
    setChild = (elem) => {
        let x = elem == 1 ? ',' + elem + ' ребенок': ',' + elem + " ребенка";
        this.setState({child:x}); 
        this.props.ans(x)
    }
  render() {
    return (
        <section className="right">
            <div className="select-right">
                <div className="select-right-header" onClick={() => this.showMenu()}>
                    <img src={tourist} alt=""/>
                    <div className="select-right-current-container">
                        <span className="text">Туристы</span>
                    <span className="select-right-current"><i>{this.state.people + this.state.child}</i></span> 
                    </div>
                    <div className="select-right-icon"><img src={options} alt=""/></div>
                </div>
                <div className="select-right-body hidden">
                    <div className='people_container'>
                        <div className='people'>
                            <img src={tourist} alt=""/>
                            <span> ВЗРОСЛЫЕ </span>
                        </div>
                        <ul className='count'>
                            {[1,2,3,4].map(elem=><li className='Number_count' key={elem} onClick = {(e) => this.setPeople(elem, e.target)}>{elem}</li>)}
                        </ul>
                    </div>
                    <div className='child_container'>
                    <div className='child'>
                            <img src={child} alt=""/>
                            <span> ДЕТИ </span>
                        </div>
                        <ul className='child_count'>
                            {[1,2,3,4].map(elem=><li className='child_Number_count' key={elem} onClick = {() => this.setChild(elem)}>{elem}</li>)}
                        </ul>
                    </div>
                    {/* <div className="select-right-item">1 взрослый</div>
                    <div className="select-right-item">2 взрослых</div>
                    <div className="select-right-item">3 взрослых</div>
                    <div className="select-right-item">4 взрослых</div>
                    <div className="select-right-item">5 взрослых</div> */}
                </div>
            </div>
        </section>
    )
  }
}
