import React from 'react'
import axios from 'axios'
import Table from '../templates/table/Table';
import Box from '../templates/box/Box';
import Main from '../templates/Main';
import Modal from '../templates/modal/Modal'



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
    return isNaN(valor) === false ? parseFloat(valor) : parseFloat(valor.replace("R$","").replace(".","").replace(",","."))
}




const baseUrl = 'http://192.168.1.8:3001/despesas'
const baseUrlCat = 'http://192.168.1.8:3001/categorias'
const initialState = {
    expenses: { 
                data: '',
                descricao:'',                 
                categoria:'', 
                valorUnd: 0, 
                quantidade: 0, 
                valorTotal:0 },
    list: [],
    somaTotal: 0,
    showModal: false,
    loading:true,
    categorias:[]
}


export default class Despesas extends React.Component{

    state = { ...initialState }    

    componentWillMount() {
            axios(baseUrl).then(resp => {
            let resultado = resp.data
            let somaTotal = 0
            //let categoria
            resultado.map( obj =>
                {
                    Object.defineProperty(obj, 'valorTotal',{
                    enumerable:true, 
                    writable:true, //
                    value: obj.quantidade*obj.valorUnd
                    })
                    somaTotal +=obj.valorTotal 
                    return obj                   
            })           
            this.setState({ list: resultado, somaTotal:somaTotal, loading:false })
        })
        axios(baseUrlCat).then(resp => {
            this.setState({categorias: resp.data})
        })
        
    }

    save(){
        const expenses = this.state.expenses
        expenses.valorTotal = moedaParaNumero(expenses.valorUnd)* moedaParaNumero(expenses.quantidade)
        const somaTotal =  moedaParaNumero(expenses.valorTotal) + this.state.somaTotal
        this.setState({somaTotal: somaTotal})
        const method = expenses.id ? 'put' : 'post'
        const url = expenses.id ? `${baseUrl}/${expenses.id}` : baseUrl
        axios[method](url, expenses)
            .then(resp => {
                const list = this.getUpdatedList(resp.data)
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
        if(add) list.push(expenses) //unshift
        return list
    } 
    updateField(event){
        const expenses ={...this.state.expenses}
        if(event.target.name == "categoria"){
            expenses[event.target.name] = this.state.categorias.filter(cat => cat.id == event.target.value)[0]
        }
        else if(event.target.name == "data"){
            //mudar pro save e pro upload. mudar tambem o save para não salvar valorTotal
            const dataNoFormat = event.target.value.split("-")
            let dataFormat = dataNoFormat[2]+"/"+dataNoFormat[1]+"/"+dataNoFormat[0]
            expenses[event.target.name]=dataFormat
        }
        else
            expenses[event.target.name] = event.target.value
        this.setState({expenses})
    }

    addDespesa(){        
        this.setState({showModal: true})        
    }

    controleModal(isSave){
        this.setState({showModal: false})
        isSave && this.save()
        this.clear()
    }


    renderForm(){          
        return(
            <form>
            <div className="form-group">
                <label> Data:</label>
                <div className="input-group date">
                    <div className="input-group-addon"><i className="fa fa-calendar"></i></div>
                    <input type="date" className="form-control pull-right" 
                    name="data" 
                    value={"2019-10-10"} //só aparecer quando editar
                    onChange={e=>this.updateField(e)}
                    />
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
                     name="categoria" value={this.state.expenses.categoria} onChange={e=>this.updateField(e)}>
                     {this.state.categorias.map( obj => 
                         <option value={obj.nome} key={obj.id}>{obj.nome}</option>  
                     )}
                 </select>
             </div>
             
            <div className="form-group">
                <label> Valor unitário:</label>
                <input type="number" className="form-control"
                 name="valorUnd" value={moedaParaNumero(this.state.expenses.valorUnd)} onChange={e=>this.updateField(e)}/>
            </div>
            <div className="form-group">
                <label> Quantidade:</label>
                <input type="number" className="form-control"
                 name="quantidade" value={this.state.expenses.quantidade} onChange={e=>this.updateField(e)}/>
            </div>
            </form>
            )
    }

    

    render(){ 
        const th = ['Data','Descrição','Categoria','Valor unitário', 'Quantidade','Valor Total']        
        const tbody = this.state.list.map(obj => {
            obj.valorUnd = numeroParaMoeda(obj.valorUnd)
            obj.valorTotal =  numeroParaMoeda(obj.valorTotal)
            if(typeof obj.categoria == 'object') {
                obj.categoria = obj.categoria.nome                
            }           
            return obj        
        })  
        return(
        <React.Fragment>
        <Main>
            <div className="row">
                <Box width={12} theme='box-danger' title='Despesas' button={true} onClick={() => this.addDespesa()}
                    loading={this.state.loading} >            
                    <Table onClick={(valor, removeIsTrue) => this.editOrRemove(valor, removeIsTrue)}
                            tableHeader={th} 
                            tableBody={tbody} >
                        <tr>
                            <th className="text-right" colSpan={th.length-1}>Total</th>
                            <td>{numeroParaMoeda(this.state.somaTotal)}</td>
                        </tr>                           
                    </Table>
                </Box>
            </div>            
        </Main>
        <Modal show={this.state.showModal} title={"Nova Despesa"} onClick={isSave => this.controleModal(isSave)}>
            {this.renderForm()}
        </Modal>
        {/* {this.renderModal()} */}
        </React.Fragment>
        )
    }

    editOrRemove(expenses, removeIsTrue) {        
        if(removeIsTrue) { 
            const confirm = window.confirm(`Realmente deseja excluir a Despesa "${expenses.descricao}"?`) 
            if(confirm){  
                let somaTotal = this.state.somaTotal - moedaParaNumero( expenses.valorTotal)
                this.setState({somaTotal:somaTotal})          
                axios.delete(`${baseUrl}/${expenses.id}`).then(resp => {
                    const list = this.getUpdatedList(expenses, false)
                    this.setState({ list })
                })}
        }
        else{           
            this.setState({ expenses, showModal:true })           
        }

    }

}



//https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_modal