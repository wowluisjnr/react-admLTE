
import React from 'react'
// import {Doughnut, Line} from 'react-chartjs-2';

export default class Charts extends React.Component{     
    renderChart(){
        let element =(<React.Fragment>
            <p className="text-center"><strong>{this.props.title}</strong></p>
            <div className="chart">
                <this.props.tipe data={this.props.data} options={this.props.options} />
            </div>
            </React.Fragment>)
        return element            
        }   
    
    render(){        
        
        if(!this.props.width){            
            return (this.renderChart())
        }        
        return (                       
            <div className={`col-md-${this.props.width}`}>{/**Só faz <div> se houver width */}
                 {this.renderChart()}
            </div>
        )
        
    }
}