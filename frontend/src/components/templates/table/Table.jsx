import React from 'react'

export default props =>
<div className="box-body table-responsive no-padding">
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">Data</th>
                        <th scope="col">Descrição</th>
                        <th scope="col">Categoria</th>
                        <th scope="col">Valor Unitário</th>                        
                        <th scope="col">Quantidade</th>                        
                        <th scope="col">Valor Total</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>10/10/2018</td>
                        <td>Alevinos de Tambaqui</td>
                        <td>Alevinos</td>
                        <td>R$ 0,30</td>                        
                        <td>1000</td>                                              
                        <td>R$ 300,00</td>
                    </tr>
                    <tr>
                        <td>10/10/2018</td>
                        <td>Alevinos de Surubim</td>
                        <td>Alevinos</td>
                        <td>R$ 1,50</td>                        
                        <td>1000</td>                                              
                        <td>R$ 1500,00</td>
                    </tr>
                    <tr>
                        <td>10/10/2018</td>
                        <td>Ração GuabiTech 40%</td>
                        <td>Ração</td>
                        <td>R$ 70,00</td>                        
                        <td>50</td>                                              
                        <td>R$ 350,00</td>
                    </tr>
                    <tr>                     
                        <th className="text-right" colSpan="5" scope="row">Total</th>                                              
                        <td >R$ 2.150,00</td>
                    </tr>
                </tbody>
            </table>
            
            </div>