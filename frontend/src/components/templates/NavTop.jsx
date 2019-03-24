import React from 'react'
import Logo from './Logo';
import {Link} from 'react-router-dom'
import './navTop.css'

export default class NavTop extends React.Component{

    constructor(props) {
        super(props);
        this.state = {isToggleOn: true};
    
        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
      }   
          
    handleClick() {
        let element = document.getElementsByTagName('body')[0]
        if(element.clientWidth <= 750){            
            element.classList.remove('sidebar-collapse')            
            element = this.state.isToggleOn ? element.classList.add('sidebar-open') : element.classList.remove('sidebar-open')
        }
        else
          element = this.state.isToggleOn ? element.classList.add('sidebar-collapse') : element.classList.remove('sidebar-collapse')
        
        this.setState(state => ({
          isToggleOn: !state.isToggleOn
        }));
      }

render(){
    return(
    <header className="main-header">
    <Logo />
    {/* nav header */}
    <nav className="navbar navbar-static-top">
        <a className="sidebar-toggle" onClick={this.handleClick}></a>{/* Quando redusido a classe terá que ser sidebar-open */}
        
        <div className="navbar-custom-menu">
            <ul className="nav navbar-nav">
                <li>
                    <a href="#">
                        <i className="fa fa-user"></i>
                        <span className="hidden-xs"> Luiz Claudio</span>
                    </a>
                </li>                
                <li>
                    <a href="#">
                        <i className="fa fa-envelope-o"></i>
                        <span className="label label-success">4</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <i className="fa fa-gears"></i>
                    </a>
                </li>
            </ul>
        </div>
    </nav>
</header>)
}
}
    


