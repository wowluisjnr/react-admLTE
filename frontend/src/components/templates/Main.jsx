import React from 'react'
import ContentHeader from './ContentHeader';

export default props => 
    <React.Fragment>        
        <div className="content-wrapper"> 
            <ContentHeader />
            <section className="content">           
                {props.children}   
            </section>        
        </div>
    </React.Fragment>    
