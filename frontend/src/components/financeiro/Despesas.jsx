import React from 'react'
import ContentHeader from '../templates/ContentHeader';
import Table from '../templates/table/Table';
import Box from '../templates/box/Box';



export default class Despesas extends React.Component{
    renderTableHeader(){
        const th = ['Data','Descrição','Categoria','Valor unitário', 'Quantidade','Valor Total']
        return th
    }
    renderTableBody(){
        const teste = [{data:'10/20',descricao:'Tambaqui'}].map(valor => <tr>{Object.entries(valor).forEach(e=> `<td>${e[1]}</td>`)}</tr>)
        return teste
    }

    render(){
        console.log(this.renderTableBody())
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