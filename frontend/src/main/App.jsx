import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import '../assets/css/AdminLTE.min.css'
import '../assets/css/skins/skin-blue.min.css'

import NavTop from '../components/templates/NavTop'
import Nav from '../components/templates/Nav'
import Footer from '../components/templates/Footer'

import React from 'react'
import { HashRouter } from 'react-router-dom'

import Router from './Router';

export default props =>
    <HashRouter>
        <div className="wrapper">
            <NavTop />
            <Nav />
            <Router />
            <Footer />
        </div>
    </HashRouter>

