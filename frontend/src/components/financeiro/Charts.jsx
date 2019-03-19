
import React from 'react'
// import {Doughnut, Line} from 'react-chartjs-2';

export default class Charts extends React.Component{     
    renderChart(){
        let element =<p className="text-center"><strong>{this.props.title}</strong></p>
        element += <div className="chart"><this.props.tipe data={this.props.data} options={this.props.options} /></div>
        return element            
        }   
   
    
    render(){ 
        if(!this.props.width){
            return this.renderChart()
        }        
        return (                       
            <div className={`col-md-${this.props.width}`}>{/**Só faz <div> se houver width */}
                 <p className="text-center"><strong>{this.props.title}</strong></p> 
                 <div className="chart">
                    <this.props.tipe data={this.props.data} options={this.props.options}/>{/* posso passar o dados aqui */}
                </div>
            </div>
        )
        
    }
}