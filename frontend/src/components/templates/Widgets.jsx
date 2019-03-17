import React from 'react'

export default props =>
<div className="info-box link-widget">
    <span className={`info-box-icon ${props.bgColor}`}>
        <i className={`fa ${props.icon}`}></i>
    </span>
    <div className="info-box-content">
        <span className="info-box-text">{props.text}</span>
        <span className="info-box-number">{props.number}</span>
    </div>
</div>