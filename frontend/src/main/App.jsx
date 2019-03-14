import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import '../assets/css/AdminLTE.min.css'
import '../assets/css/skins/skin-blue.min.css'

import Header from '../components/templates/Header'
import Nav from '../components/templates/Nav'

import React from 'react'

export default props =>
    <div className="wrapper">
        <Header />
        <Nav />
    </div>

