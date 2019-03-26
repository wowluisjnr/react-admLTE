import React from 'react'
import Main from '../templates/Main';
import Charts from './Charts'
import {Doughnut, Line} from 'react-chartjs-2'
import './ViewFinance.css'
import InfoBox from '../templates/infoBox/InfoBox';
import Box from '../templates/box/Box';
import axios from 'axios'


const baseUrl = 'http://192.168.1.8:3001/despesas'

const initialState = {
    expenses: { 
                data: '',
                descricao:'',                 
                categoria:'', 
                valorUnd:0, 
                quantidade: 0, 
                valorTotal:0 },
    list: [],
    listExpenses: []
}

export default class ViewFinance extends React.Component {

    state = { ...initialState } 

    componentWillMount() {
        axios(baseUrl).then(resp => {
            const categoriasTotais = resp.data.map(obj => obj.categoria)
            const categoriasPresentes = categoriasTotais.filter((este, i)=> categoriasTotais.map(obj => obj['id']).indexOf(este.id)=== i)
            categoriasPresentes.map(obj => obj.gastoNaCategoria = 0 )
            resp.data.map((obj, i) =>{
                categoriasPresentes.map(valor => {
                    if(valor.id == obj.categoria.id){
                        valor.gastoNaCategoria = valor.gastoNaCategoria + obj.valorTotal
                    }
                })
                return obj
            } )            
            this.setState({ list: categoriasPresentes })
        })
    }


    renderDataDog(data){
        //console.log(data)
        const dataDog = {
            labels:data.map(obj=>obj.nome),
            datasets: [{                            
                data: data.map(obj=>obj.gastoNaCategoria),
                backgroundColor:data.map(obj => obj.cor),            
                }]            
            }
        return dataDog
    }
    renderDataLine(){
        const dataLine = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [{
                borderColor: 'rgb(255, 99, 132)',
                data: [0, 10, 15, 20, 20, 30, 45]                                       
                }]
            }
        return dataLine
    }

render(){
    return(
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
        <Box width={12} 
            theme='box-danger' 
            border={true} 
            title={'Despesas'} 
            alignTitle='text-center' 
            elementFooter={<div>Footer Aqui</div>}>
            {/* box-body */}
            <div className="row">
                <Charts width={6} tipe={Doughnut} title='Despesas por categoria' 
                    data ={this.renderDataDog(this.state.list)}
                        options={{cutoutPercentage:70}}
                /> 
                <Charts width={6} tipe={Line} title='Despesas ao longo do ciclo' 
                    data={this.renderDataLine}                        
                        />           
            </div>

        </Box>
    </div>
</Main>)
}
}