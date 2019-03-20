import React from 'react'

export default props=>
<div className="modal fade in" style={{display:`${props.show ? 'block' : 'none' }`}}>
    <div className="modal-dialog">
        <div className="modal-content">
            <div className="modal-header">
                <button className="close"><span>x</span></button>
                <h4 className="modal-title">Default Modal</h4>
            </div>
            <div className="modal-body">
                <p>One fine body...</p>
            </div>
            <div className="modal-footer">
            <button className="btn btn-default pull-left" >Close</button>
            <button className="btn btn-primary">Save changes</button>
            </div>
        </div>
    
    </div>
</div>