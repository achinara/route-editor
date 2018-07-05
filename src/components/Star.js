import React from 'react';
import PropTypes from 'prop-types';
import './Star.css'

export const Star = ({selected = false, onClick = f => f}) =>
	<div className="star" onClick={onClick}>
		{ selected ?
			<i className="fas fa-star star__icon"/> :
			<i className="far fa-star star__icon"/>
		}
	</div>;

Star.propTypes = {
	selected: PropTypes.bool,
	onClick: PropTypes.func
};