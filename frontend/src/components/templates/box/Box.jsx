import React from 'react'

export default props=>

<div className={`col-md-${props.width}`}>
    <div className={`box ${props.theme} ${props.border && 'box-solid'}`}>{/* box-solid  box-color collapsed-box*/}
        {props.loading && <div class="overlay">
            <i class="fa fa-refresh fa-spin"></i>
        </div>}
        <div className={`box-header with-border ${props.alignTitle}`}>
            <h3 className="box-title">{props.title}</h3>
            {/* <div className="box-tools pull-right">             
                
                {props.collapse && <button className="btn btn-box-tool">
                    <i className="fa fa-minus"></i>
                </button>}
                {props.close && <button className="btn btn-box-tool">
                    <i className="fa fa-times"></i>
                </button>}
                
                <span class="label label-primary">Label</span>
            </div>             */}
        </div>        
        <div className="box-body">
            {props.children}            
        </div>
        
        {props.elementFooter && <div className="box-footer">
            {props.elementFooter}
        </div>}
    </div>
</div>

// width = 3 (Sets the size/width)
// collapsed = true/false (Optional boolean to set initial state of the box. Setting it to true will render a collapsed box, by default this is false)
// theme = 'box-default' / 'box-primary' / 'box-warning' / 'box-danger' / 'box-success'
// loading = true (Optional boolean value, to show a loading animation)
// border = true (Optional boolean value, will apply a border for the box and color for the title bar if true)
// title = 'Can be a string or a number'
// content = 'Can be a string or a number'
// footer = 'Can be a string or a number' (Optional)
// boxTools = {['collapse','remove','expand']}  (Optional buttons to make the box expand, collapse or remove upon clicking )