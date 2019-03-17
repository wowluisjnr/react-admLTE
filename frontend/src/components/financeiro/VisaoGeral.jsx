import React from 'react'
import Main from '../templates/Main';
import Widgets from '../templates/Widgets';
import {Link} from 'react-router-dom'


export default props => 
<Main>    
    <div className="row">  
        {/* bg-color, icon, text, number */}
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
</Main>