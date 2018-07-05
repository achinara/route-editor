import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './Map.css'

class Map extends Component {
	static propTypes = {
		mapLoaded: PropTypes.bool
	}

	static defaultProps = {
		mapLoaded: false
	}

	render() {
		const className = this.props.mapLoaded ? 'map map_loaded' : 'map';
		return (
			<div id="map" className={className} />
		)
	}
}

export default Map;