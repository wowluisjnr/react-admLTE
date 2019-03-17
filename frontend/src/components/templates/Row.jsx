import React from 'react'
// import Widgets from './Widgets'

export default class Row extends React.Component {
    render(){
        return(
        <div className="row">
            <this.props.tag {...this.props}/>
        </div>)
    }
}