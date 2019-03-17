import React from 'react'
import Main from '../templates/Main';
import Widgets from '../templates/Widgets';
import {Link} from 'react-router-dom'
import Charts from './Charts'

import './ViewFinance.css'


export default props => 
<Main>    
    <div className="row">          
        <div className="col-md-4 col-sm-6 col-xs-12">
            <Link to="/" >
                <Widgets bgColor='bg-aqua' icon='fa-bank' text='Saldo' number='R$ 10.000,00'/>             
            </Link>
        </div>         
        <div className="col-md-4 col-sm-6 col-xs-12">
            <Link to="/" >
                <Widgets bgColor='bg-green' icon='fa-line-chart' text='Vendas' number='R$ 20.000,00'/> 
            </Link>
        </div>
        <div className="col-md-4 col-sm-6 col-xs-12">
            <Link to="/despesas" >
                <Widgets bgColor='bg-red' icon='fa-pie-chart' text='Despesas' number='R$ 10.000,00'/>
            </Link>
        </div>
    </div> 
    <div className="row">
        <div className="col-md-12">
            <div className="box box-danger">
                <div className="box-header with-border">
                    <h3 className="box-title">Despesas</h3>
                    <div className="box-tools pull-right">
                        <button className="btn btn-box-tool">
                            <i className="fa fa-minus"></i>
                        </button>
                        <button className="btn btn-box-tool">
                            <i className="fa fa-times"></i>
                        </button>
                    </div>
                </div>
                <div className="box-body">
                    <div className="row">
                    <Charts />                        
                    <Charts  chartIsLine={true}/>
                    </div>
                </div>
            </div>                    
        </div>
    </div>



</Main>