import React, { Fragment, useContext } from 'react';
import AlertContext from '../../context/alert/alertContext';


const Alert = () => {

  const alertContext = useContext(AlertContext);

  const { alert } = alertContext;

  return (
    alert!==null && (
    <Fragment>
    <p className="flow-text">{alert.msg}</p>
    </Fragment>
    )
  )
}

export default Alert;