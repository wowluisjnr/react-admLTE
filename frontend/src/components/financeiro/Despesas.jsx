import React from 'react'
import axios from 'axios'
import Table from '../templates/table/Table';
import Box from '../templates/box/Box';
import Main from '../templates/Main';



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
 function moedaParaNumero(valor)
{
    //return isNaN(valor) == false ? parseFloat(valor) : 'teste ok'
    return isNaN(valor) == false ? parseFloat(valor) : parseFloat(valor.replace("R$","").replace(".","").replace(",","."))
}




const baseUrl = 'http://localhost:3001/despesas'
const initialState = {
    expenses: { 
                data:'',
                descricao:'',                 
                categoria:'', 
                valorUnd:0, 
                quantidade: 0, 
                valorTotal:0 },
    list: [],
    somaTotal: 0,
    showModal: false
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

    save(){
        const expenses = this.state.expenses
        expenses.valorTotal = moedaParaNumero(expenses.valorUnd)* moedaParaNumero(expenses.quantidade)
        //console.log(valorTotal )
        const somaTotal =  moedaParaNumero(expenses.valorTotal) + this.state.somaTotal
        //console.log(somaTotal)
        this.setState({somaTotal: somaTotal})
        const method = expenses.id ? 'put' : 'post'
        const url = expenses.id ? `${baseUrl}/${expenses.id}` : baseUrl
        axios[method](url, expenses)
            .then(resp => {
                const list = this.getUpdatedList(resp.data)
                this.closeModal()
                this.setState({expenses: initialState.expenses, list})
                
                //pode fazer busca no backend
            })           

        //incluir post
        //alterar put        
    }

    clear() {
        this.setState({ expenses: initialState.expenses })
    }
    getUpdatedList(expenses, add = true) {
        const list = this.state.list.filter(u => u.id !== expenses.id)
        if(add) list.unshift(expenses)
        return list
    } 
    updateField(event){
        const expenses ={...this.state.expenses}
        expenses[event.target.name] = event.target.value
        this.setState({expenses})
    }

    renderTableHeader(){
        const th = ['Data','Descrição','Categoria','Valor unitário', 'Quantidade','Valor Total']
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

    handleClick(){   
        
        this.setState({showModal: true})
        
    }
    closeModal(){
        this.setState({showModal: false})
    }

    renderForm(){
        return(
            <div>
            <div className="form-group">
                <label> Data:</label>
                <div className="input-group date">
                    <div className="input-group-addon"><i className="fa fa-calendar"></i></div>
                    <input type="date" className="form-control pull-right" 
                    name="data" value={this.state.expenses.data} onChange={e=>this.updateField(e)}/>
                </div>
            </div>
            <div className="form-group">
                <label> Descrição:</label>
                <input type="text" className="form-control" 
                name="descricao" value={this.state.expenses.descricao} onChange={e=>this.updateField(e)}/>
            </div>
            <div className="form-group">
                <label> Categoria:</label>
                <select className="form-control"
                 name="categoria" onChange={e=>this.updateField(e)}>
                    <option value="Alevinos">Alevinos</option>
                    <option value="Ração">Ração</option>
                    <option value="Infraestrutura">Infraestrutura</option>
                    <option value="Gasolina">Gasolina</option>
                    <option value="Funcionário">Funcionário</option>
                </select>
            </div>
            <div className="form-group">
                <label> Valor unitário:</label>
                <input type="number" className="form-control"
                 name="valorUnd" value={this.state.expenses.valorUnd} onChange={e=>this.updateField(e)}/>
            </div>
            <div className="form-group">
                <label> Quantidade:</label>
                <input type="number" className="form-control"
                 name="quantidade" value={this.state.expenses.quantidade} onChange={e=>this.updateField(e)}/>
            </div>
            </div>
            )
    }

    renderModal(){
        return (<div className="modal fade in" style={{display: this.state.showModal ? 'block' : 'none'}}>
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <button className="close"  onClick={() => this.closeModal()}><span>x</span></button>
                        <h4 className="modal-title">Default Modal</h4>
                    </div>
                    <div className="modal-body">
                         {this.renderForm()}
                    </div>
                    <div className="modal-footer">
                    <button className="btn btn-default pull-left" onClick={() => this.closeModal()} >Close</button>
                    <button className="btn btn-primary" onClick={e => this.save(e)}>Save changes</button>
                    </div>
                </div>            
            </div>
        </div>)
    }

    render(){        
    return(
        <React.Fragment>
    <Main>
        <div className="row">
            <Box width={12} theme='box-danger' title='Despesas' button={true} onClick={() => this.handleClick()} >            
                <Table onClick={valor => this.remove(valor)}
                 tableHeader={this.renderTableHeader()} tableBody={this.renderTableBody()} somaTotal={numeroParaMoeda(this.state.somaTotal)}/>
            </Box>
        </div> 
           
    </Main>
    {this.renderModal()}
    </React.Fragment>
    )
}

remove(valor) {    
    //colocar um alerta aqui com opção de cancelar 
    let somaTotal = this.state.somaTotal - moedaParaNumero( valor.valorTotal)
    this.setState({somaTotal:somaTotal})

    axios.delete(`${baseUrl}/${valor.id}`).then(resp => {
        const list = this.getUpdatedList(valor, false)
        this.setState({ list })
    })
}

}



//https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_modal