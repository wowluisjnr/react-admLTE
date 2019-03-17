import React from 'react'
import Charts from '../financeiro/Charts'

export default props =>
    <div className={props.colunas}>
    <div className={'box '+props.colorBox}>
        <div className="box-header with-border">
            <h3 className="box-title">Despesas</h3>
            <div className="box-tools pull-right">
                <button className="btn btn-box-tool">
                    <i className="fa fa-minus"></i>
                </button>
                <button className="btn btn-box-tool">
                    <i className="fa fa-times"></i>
                </button>
            </div>
        </div>

        <div className="box-body">
            <div className="row">
            <Charts />                        
            <Charts  chartIsLine={true}/>
            </div>
        </div>

    </div>                    
    </div>