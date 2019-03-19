import React from 'react'
import ContentHeader from '../templates/ContentHeader';
import Table from '../templates/table/Table';
import Box from '../templates/box/Box';

const baseUrl = 'http://localhost:3001/despesas'
const initialState = {
    expenses: { data:'',
                descricao:'', 
                categoria:'', 
                valorUnd:0, 
                quantidade: 0 },
    list: []
}


export default class Despesas extends React.Component{
    renderTableHeader(){
        const th = ['Data','Descrição','Categoria','Valor unitário', 'Quantidade','Valor Total']
        return th
    }
    renderTableBody(){
        const dados = [{id:1, data:'10/20',descricao:'Alevinos de Tambaqui', categoria:'Alevinos', valorUnd:'R$ 0,30',quantidade:'1000',valorTotal:'R$ 300,00'},
        {id:2, data:'10/20',descricao:'Alevinos de Surubim', categoria:'Alevinos', valorUnd:'R$ 1,50',quantidade:'1000',valorTotal:'R$ 1.500,00'}
        ]
        
        const dadosTabela = dados
        return dadosTabela
    }

    render(){        
    return(
    <div className="content-wrapper">
    <ContentHeader/>
    <section className="content">
        <div className="row">
            <Box width={12} theme='box-danger' title='Despesas'>            
                <Table tableHeader={this.renderTableHeader()} tableBody={this.renderTableBody()} />
            </Box>
        </div>
    </section>
    </div>)
}
}