import React from 'react'

export default props =>
      <button className={props.className} onClick={props.onClick}>
        {props.value}
        {/* {console.log(props.className)} */}
      </button>
    