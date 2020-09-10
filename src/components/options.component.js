import React from 'react'


const Options = ({ handleChange, label, ...otherProps })=>{
	<div className="group">
			<h6>{label.toUpperCase()}</h6> <input className="input" onChange={handleChange} {...otherProps} />
	
	</div>
}

export default Options