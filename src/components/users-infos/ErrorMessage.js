import React from 'react';
import './ErrorMessage.css';

function ErrorMessage(props){
	return <div className="error-msg">Erreur : {props.message}</div>
}

export default ErrorMessage;