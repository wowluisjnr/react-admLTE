import './content.css'

import React from 'react'
// import AnyChart from 'anychart-react/dist/anychart-react'
import {Doughnut, Line} from 'react-chartjs-2';
import Charts from '../financeiro/Charts'
import ContentHeader from '../../main/ContentHeader';


export default props => 
    <div className="content-wrapper">

        <ContentHeader/>

        <section className="content container-fluid">
            
            <div className="row">
                <a href="" className="link-widget">
                <div className="col-md-4 col-sm-6 col-xs-12">
                    <div className="info-box">
                        <span className="info-box-icon bg-aqua">
                            <i className="fa fa-bank"></i>
                        </span>
                        <div className="info-box-content">
                            <span className="info-box-text">Saldo</span>
                            <span className="info-box-number">R$ 0,00</span>
                        </div>
                    </div>
                </div>
                </a>

                <a href="" className="link-widget">
                <div className="col-md-4 col-sm-6 col-xs-12">
                    <div className="info-box">
                        <span className="info-box-icon bg-green">
                            <i className="fa fa-line-chart"></i>
                        </span>
                        <div className="info-box-content">
                            <span className="info-box-text">Vendas</span>
                            <span className="info-box-number">R$ 10.000,00</span>
                        </div>
                    </div>
                </div>
                </a>

                <a href="" className="link-widget">
                <div className="col-md-4 col-sm-6 col-xs-12">
                    <div className="info-box">
                        <span className="info-box-icon bg-red">
                            <i className="fa fa-pie-chart"></i>
                        </span>
                        <div className="info-box-content">
                            <span className="info-box-text">Despesas</span>
                            <span className="info-box-number">R$ 10.000,00</span>
                        </div>
                    </div>
                </div>
                </a>

            </div>
            <div className="row">
                <div className="col-md-12">
                    <div className="box box-danger">
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
            </div>

        </section>
        
    </div>