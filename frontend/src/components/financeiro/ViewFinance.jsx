import React from 'react'
import Main from '../templates/Main';
import Charts from './Charts'
import {Doughnut, Line} from 'react-chartjs-2'
import './ViewFinance.css'
import InfoBox from '../templates/infoBox/InfoBox';
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
                <Charts width={6} tipe={Doughnut} title='Despesas por categoria'
                    data ={{
                        labels:['Red', 'Blue', 'Green'],
                        datasets: [{                            
                            data: [300, 100, 1000],
                            backgroundColor: ['red', 'blue', 'green'],            
                            }]            
                        }}
                        options={{cutoutPercentage:70}}
                /> 
                <Charts width={6} tipe={Line} title='Despesas ao longo do ciclo' 
                    data={{
                        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                        datasets: [{
                            borderColor: 'rgb(255, 99, 132)',
                            data: [0, 10, 15, 20, 20, 30, 45]                                       
                            }]
                        }}                        
                        />           
            </div>
        </Box>

    </div>



</Main>