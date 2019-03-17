
import React from 'react'
import {Doughnut, Line} from 'react-chartjs-2';

export default class Charts extends React.Component{

    dataCharts(chartTipeIsLine){
        const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July']
        const dataDoug = [300, 100, 1000]
        const dataLine = [0, 10, 15, 20, 20, 30, 45]

        const data ={
        labels: chartTipeIsLine ? labels : [],
        datasets: [{
            borderColor: chartTipeIsLine ? 'rgb(255, 99, 132)' : [],
            data: chartTipeIsLine ? dataLine : dataDoug,
            backgroundColor: chartTipeIsLine ? '' : ['red', 'blue', 'green'],            
            }]            
        }
        return data
    }
    optionsChart(){
        const options={ 
            cutoutPercentage: 70,
            animation:{animateRotate: false,animateScale:true}                   
        }
        return options
    }

    render(){
        if(!this.props.chartIsLine){
            return (
                <div className="col-md-6">
                
                <p className="text-center"><strong>Por Categoria</strong></p>    
                <div className="chart">       
                <Doughnut                          
                    data={this.dataCharts(this.props.chartIsLine)}                            
                    options={this.optionsChart()} />
                </div>
                </div>
            )
        }
        return (
            <div className="col-md-6">
                 <p className="text-center"><strong>Ao longo do ciclo</strong></p> 
                 <div className="chart">
                <Line                          
                    data={this.dataCharts(this.props.chartIsLine)} />
                </div>
            </div>
        )


        
    }
}