import React, { Fragment } from 'react';


const Alert = ( { alert } ) => {
  return (
    alert!==null && (
    <Fragment>
    <p className="flow-text">{alert.msg}</p>
    </Fragment>
    )
  )
}

export default Alert;