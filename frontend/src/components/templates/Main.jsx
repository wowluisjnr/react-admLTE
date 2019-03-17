import React from 'react'
import ContentHeader from './ContentHeader';

export default props => 
    <React.Fragment>
        <ContentHeader />
        <div className="content-wrapper"> 
            <section className="content">           
                {props.children}   
            </section>        
        </div>
    </React.Fragment>    
