import React from 'react'
import Logo from './Logo';
import {Link} from 'react-router-dom'

export default props =>
<header className="main-header">
    <Logo />
    {/* nav header */}
    <nav className="navbar navbar-static-top">
        <Link to="/" className="sidebar-toggle"></Link>
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
    


