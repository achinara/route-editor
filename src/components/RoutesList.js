import React from 'react';
import PropTypes from 'prop-types';
import Route from './Route';
import './RoutesList.css';

const RoutesList = ({routes = [], ...props}) => (
	<div className="route-list">
		{
			routes.map((route) => <Route key={route.id} {...route} {...props} />)
		}
	</div>
);

RoutesList.propTypes = {
	routes: PropTypes.array
}

export default RoutesList;