import React from 'react'
import axios from 'axios'
import ContentHeader from '../templates/ContentHeader';
import Table from '../templates/table/Table';
import Box from '../templates/box/Box';
import Modal from '../templates/modal/Modal';



function numeroParaMoeda(valor){
    let inteiro = null, decimal = null, c = null, j = null;
    let aux = new Array();
    if(!isNaN(valor))
    {valor = ""+valor;
    c = valor.indexOf(".",0);
    if(c > 0){
       inteiro = valor.substring(0,c);
       decimal = valor.substring(c+1,valor.length);
    }else{
       inteiro = valor;
    }
    for (j = inteiro.length, c = 0; j > 0; j-=3, c++){
       aux[c]=inteiro.substring(j-3,j);
    }
    inteiro = "";
    for(c = aux.length-1; c >= 0; c--){
       inteiro += aux[c]+'.';
    }       
    inteiro = inteiro.substring(0,inteiro.length-1);        
    decimal = parseInt(decimal);
    if(isNaN(decimal)){
       decimal = "00";
    }else{
       decimal = ""+decimal;
       if(decimal.length === 1){
          decimal = decimal+"0";
       }
    }         
    valor = "R$ "+inteiro+","+decimal;}   
    return valor;    
 }




const baseUrl = 'http://localhost:3001/despesas'
const initialState = {
    expenses: { 
                data:'',
                descricao:'', 
                lote:'',
                categoria:'', 
                valorUnd:0, 
                quantidade: 0, 
                valorTotal:0 },
    list: [],
    somaTotal: 0
}


export default class Despesas extends React.Component{

    state = { ...initialState }    

    componentWillMount() {
        axios(baseUrl).then(resp => {
            let resultado = resp.data
            let somaTotal = 0
            resultado.map( obj =>
                {
                    Object.defineProperty(obj, 'valorTotal',{
                    enumerable:true, 
                    writable:true, //
                    value: obj.quantidade*obj.valorUnd
                    })
                    somaTotal +=obj.valorTotal                    
            })           
            this.setState({ list: resultado, somaTotal:somaTotal })
        })
    }

    clear() {
        this.setState({ expenses: initialState.expenses })
    }
    getUpdatedList(expenses, add = true) {
        const list = this.state.list.filter(u => u.id !== expenses.id)
        if(add) list.unshift(expenses)
        return list
    } 

    renderTableHeader(){
        const th = ['Data','Descrição','Lote','Categoria','Valor unitário', 'Quantidade','Valor Total']
        return th
    }
    renderTableBody(){
        const temp = this.state 
        temp.list.map(obj => {
            obj.valorUnd = numeroParaMoeda(obj.valorUnd)
            obj.valorTotal =  numeroParaMoeda(obj.valorTotal)})  
        //console.log(temp)           
        return this.state.list
    }

    render(){        
    return(
    <div className="content-wrapper">
    <ContentHeader/>
    <section className="content">
        <div className="row">
            <Box width={10} theme='box-danger' title='Despesas'>            
                <Table tableHeader={this.renderTableHeader()} tableBody={this.renderTableBody()} somaTotal={numeroParaMoeda(this.state.somaTotal)}/>
            </Box>
        </div>
        <Modal show={true}/>


    </section>
    </div>)
}
}



//https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_modal