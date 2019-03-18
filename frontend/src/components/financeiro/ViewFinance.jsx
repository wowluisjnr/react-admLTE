import React from 'react'
import Main from '../templates/Main';
import Widgets from '../templates/Widgets';
import {Link} from 'react-router-dom'
import Charts from './Charts'

import './ViewFinance.css'
import InfoBox from '../templates/infoBox/InfoBox';
import ProgresBar from '../templates/infoBox/ProgresBar';
import Box from '../templates/box/Box';


export default props => 
<Main>    
    <div className="row">         
        <InfoBox width = {4}
                icon = 'fa-bank' 
                stats = 'R$ 10.000,00' 
                subject = 'Saldo' 
                theme = 'bg-aqua'/>

        <InfoBox width={4} icon = 'fa-line-chart' stats = 'R$ 20.000,00' subject = 'Vendas' theme = 'bg-green'>
                {/* <ProgresBar percent= '50%' description = '50% Increase in 30 Days'/> */}
        </InfoBox>
        
        <InfoBox width={4} icon='fa-pie-chart' stats='R$ 10.000,00' subject='Despesas' theme='bg-red'/>        
    </div> 


    <div className="row">
        <Box width={12} theme='box-danger' border={true} title='Despesas'>
            <div className="row">
                <Charts />            
            </div>
        </Box>



        {/* <div className="col-md-12">
                <div className="box box-solid box-danger">
                {/* <div class="overlay">
                    <i class="fa fa-refresh fa-spin"></i>
                </div> */}
            {/*<div className="box-header with-border">
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
        </div> */}
    </div>



</Main>