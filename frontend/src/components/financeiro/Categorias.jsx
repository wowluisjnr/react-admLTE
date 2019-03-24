import React from 'react'
import Main from '../templates/Main';
import Box from '../templates/box/Box';
import axios from 'axios'
import Table from '../templates/table/Table'
import Modal from '../templates/modal/Modal';

const baseUrl = 'http://192.168.1.8:3001/categorias'
const initialState = {
    categories: { 
                nome:'',
                icone:'' 
            },
    list: [],
    loading:true,
    showModal:false    
}

export default class Categorias extends React.Component{
    state = {...initialState}

    componentWillMount() {
        axios(baseUrl).then(resp => {         
        resp.data.map(obj => obj.icone = <i className={`fa ${obj.icone}`}></i>)
        this.setState({ list: resp.data, loading:false })
    })
}
    // Função a ser levada para cadastro em Despesas
    // renderSelected(){
    //     const categorias = this.state.list
    //     return (
    //         <div className="form-group">
    //             <label> Categoria:</label>
    //             <select className="form-control"
    //                 name="categoria">
    //                 {categorias.map( obj => 
    //                     <option value={obj}>{obj.nome}</option>  
    //                 )}
    //             </select>
    //         </div>
    //     )
    // }
    clear() {
        this.setState({ categories: initialState.categories })
    }

    getUpdatedList(categories, add = true) {
        const list = this.state.list.filter(u => u.id !== categories.id)
        if(add) list.push(categories)
        return list
    } 

    editOrRemove(categories, remover) {        
        if(remover) { 
            window.confirm(`Realmente deseja excluir a categoria "${categories.nome}"?`) &&            
            axios.delete(`${baseUrl}/${categories.id}`).then(resp => {
                const list = this.getUpdatedList(categories, false)
                this.setState({ list })
            })
        }
        else{
            this.setState({ categories })
            console.log(this.state)
            this.setState({showModal:true})
        }
            //console.log("Editando",remover)//Implementar edição
    }

    controleModal(isSave){                 
        this.setState({showModal: false})
        isSave && this.save()
        this.clear()
    }

    addCategorie(){
        
        this.setState({showModal: true})
        //implementar animação para nova categoria adicionada
    }


    render(){        
        return(
        <Main>
            <Box width={6} 
                    theme='box-success' 
                    loading={this.state.loading}
                    title={'Categorias'} 
                    button={true} 
                    onClick={() => this.addCategorie()}                   
                    >
                    <Table 
                        onClick={(objCategoria, remove) => this.editOrRemove(objCategoria, remove)}
                        tableHeader={["Nome", "Icone"]} 
                        tableBody={this.state.list} />               
            </Box>
            <Modal show={this.state.showModal} 
                    onClick={(isSave)=> this.controleModal(isSave)}
                    title="Nova Categoria!">
                {this.renderForm()}
            </Modal>
        </Main>)
    }
    updateField(event){
        const categories ={...this.state.categories}
        categories[event.target.name] = event.target.value
        this.setState({categories})
    } 

    save(){
        const categories = this.state.categories
        
        const method = categories.id ? 'put' : 'post'
        const url = categories.id ? `${baseUrl}/${categories.id}` : baseUrl
        axios[method](url, categories)
            .then(resp => {
                const list = this.getUpdatedList(resp.data)
                this.setState({categories: initialState.categories, list})               
            })    
        //incluir post
        //alterar put        
    }

    renderForm(){
        return(
            <form className="form-inline">
                <div className="form-group">
                    <label className="sr-only"> Nome da categoria:</label>
                    <input type="text" className="form-control" 
                    name="nome" value={this.state.categories.nome}
                    placeholder="Nome da categoria" 
                    onChange={e=>this.updateField(e)}
                    />
                </div>
                {/* Adicionar um seletor de icones e cores para categoria*/}
            </form>

        )
    }

}