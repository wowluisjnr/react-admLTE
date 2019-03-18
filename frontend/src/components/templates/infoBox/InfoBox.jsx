import React from 'react'

export default props =>
<div className={`col-md-${props.width} col-sm-6 col xs-12`}>
   <div class={`info-box ${props.children && props.theme}`}>
        {/* <!-- Apply any bg-* class to to the icon to color it --> */}
        <span class={`info-box-icon ${!props.children && props.theme}`}><i class={`fa ${props.icon}`}></i></span>
        <div class="info-box-content">
            <span class="info-box-text">{props.subject}</span>
            <span class="info-box-number">{props.stats}</span>       
            {props.children} 
        </div>   
   </div>
</div>
