import React from 'react';
import PropTypes from 'prop-types';
import './Field.css';


const Field = ({placeholder = 'Enter...', onNewRoute = f => f}) => {
	let _route;

	const submit = e => {
		e.preventDefault();
		onNewRoute(_route.value.trim())
	}

	return (
		<form className='field' onSubmit={submit}>
			<input type='text' className="field__text"
	       placeholder={placeholder}
	       ref={input => _route = input}
	       id='suggest'
			/>
		</form>
	)
}

Field.propTypes = {
	placeholder: PropTypes.string,
	onNewRoute: PropTypes.func
}

export default Field;