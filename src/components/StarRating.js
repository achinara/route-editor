import React from 'react';
import PropTypes from 'prop-types';
import {Star} from './Star';
import './StartRating.css';

export const StarRating = ({starsSelected=0, totalStars=5, onRate=f=>f}) => (
	<div className="star-rating">
		<span className="star-rating__text">Оцените приложение:</span>
		{[...Array(totalStars)].map((n, i) =>
			<Star key={`star_${i}`} selected={i < starsSelected} onClick={() => onRate(i+1)}
			/> )}
	</div>
)

StarRating.propTypes = {
	totalStars: PropTypes.number
}

StarRating.defaultProps = {
	totalStars: 5
}