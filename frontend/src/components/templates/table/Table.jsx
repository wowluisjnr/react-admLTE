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
                            {Object.entries(valor).map(e => e[0]!=='id' && <td key={e[0]}>{e[1]}</td>)}
                        </tr>)}
                    <tr>
                        <th className="text-right" colSpan={props.tableHeader.length-1} >Total</th>
                        <td>R$ 0,00</td>
                    </tr>
                </tbody>
                
            </table>
            
            </div>