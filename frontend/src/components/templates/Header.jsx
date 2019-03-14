import React from 'react'
import logo from '../../assets/imgs/logo.svg'

export default props =>
<header className="main-header">
    {/* logo */}
    <a href="#" className="logo">
        <span className="logo-mini"><img src={logo} alt="logo"/></span>
        <span className="logo-lg">FishFarm</span>
    </a>
    {/* nav header */}
    <nav className="navbar navbar-static-top">
        <a href="#" className="sidebar-toggle"></a>
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
</header>
    


