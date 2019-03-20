import React from 'react'

export default props =>
<div className="box-body table-responsive no-padding">
            <table className="table table-hover">
                <thead>
                    <tr>
                        {props.tableHeader
                        .map(valor=>
                            <th key={valor}>
                                {valor}
                            </th>)}             
                    </tr>                    
                </thead>
                <tbody>
                    {props.tableBody.map(valor => 
                        <tr key={valor.id}>
                            {Object.entries(valor).map(e => 
                            {if(e[0]!=='id'&& e[0]!=='total' ){
                                return <td key={e[0]}>{e[1]}</td>}})                            
                        }
                        <td>
                            <button className='btn bg-warning btn-sm'>
                                <i className='fa fa-pencil'></i>
                            </button> 
                            <button className='btn bg-danger btn-sm'>
                                <i className='fa fa-trash'></i>
                            </button>
                        </td>
                        </tr>)}
                    <tr>
                        <th className="text-right" colSpan={props.tableHeader.length-1} >Total</th>
                        <td>{props.somaTotal}</td>
                    </tr>
                </tbody>
                
            </table>
            
            </div>