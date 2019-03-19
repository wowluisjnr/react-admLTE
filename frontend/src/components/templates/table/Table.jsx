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
                    {props.tableBody}
                </tbody>
            </table>
            
            </div>