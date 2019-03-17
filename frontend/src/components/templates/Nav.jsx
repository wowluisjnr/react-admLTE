import React from 'react'
import {Link} from 'react-router-dom'

export default props =>
<aside className="main-sidebar">
    <section className="sidebar">
        <ul className="sidebar-menu tree">
            <li className="header">CONTROLE FINANCEIRO</li>
            <li className="active">
                <Link to="/">
                    <i className="fa fa-link"></i>
                    <span>Visão Geral</span>
                </Link>
            </li>
            <li>
                <Link to="/despesas">
                    <i className="fa fa-link"></i>
                    <span>Despesas</span>
                </Link>
            </li>
            {/* <li>
                <a href="#">
                    <i className="fa fa-link"></i>
                    <span>Vendas</span>
                </a>
            </li>
            <li className="header">CONTROLE DE PRODUÇÃO</li>
            <li>
                <a href="#">
                    <i className="fa fa-link"></i>
                    <span>Visão Geral</span>
                </a>
            </li> */}
        </ul>
    </section>
</aside>