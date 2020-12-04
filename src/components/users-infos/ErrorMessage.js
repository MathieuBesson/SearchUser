import React from 'react';
import './ErrorMessage.scss';

function ErrorMessage(props){
	return <div className="error-msg">{props.message}</div>
}

export default ErrorMessage;