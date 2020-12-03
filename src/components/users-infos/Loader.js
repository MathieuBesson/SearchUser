import React from 'react';
import './Loader.css';

function Loader() {
	return (
		<div className="loading">
			<p>Chargement en cours...</p>
			<div className="loading-balls">
				<div className="loading-balls-item"></div>
				<div className="loading-balls-item"></div>
				<div className="loading-balls-item"></div>
			</div>
		</div>
	)
}

export default Loader;