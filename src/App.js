import React, {Component} from 'react';
import { v4 } from 'uuid';
import Field from './components/Field';
import RoutesList from './components/RoutesList';
import {StarRating} from './components/StarRating';
import YaMaps from './lib/YaMaps';
import Map from './components/Map';
import './App.css';

class App extends Component {

	constructor(props) {
		super(props);
		this.state = {
			routes: [],
			mapLoaded: false,
			rate: 5
		};

    this.map = new YaMaps({
      container: 'map',
      addRoute: this.addRoute
    });
	}

	componentDidMount() {
		this.map.yamaps.ready(() => {
			this.setState({mapLoaded: true});
      this.map.init();
		});
	}

	isExistsRoute = (name) =>
    this.state.routes.some(route => route.name === name);

	registerRoute = (name) => {
		if (this.isExistsRoute(name)) return;
		this.map.getCoords(name);
	};

	addRoute = (route) => {
		const routes = [
			...this.state.routes,
			{
				id: v4(),
				...route
			}
		];

		if (routes.length > 1 ) {
		  this.map.buildRoute(routes.map(route => route.name));
    } else {
      this.map.addPlacemark(route);
    }
		this.setState({routes});
	};

	removePoint = (id) => {

		const routes = this.state.routes.filter(
			route => route.id !== id
		);

		const routeLength = routes.length;

    if (routeLength >= 2 ) {
      this.map.buildRoute(routes.map(route => route.name));
    } else if (routeLength === 1) {
      this.map.addPlacemark(routes[0]);
    } else {
      this.map.removePlaceMark();
		}

		this.setState({routes});
	};

	onRate = (rate) => {
		this.setState({rate})
	};

	render() {
		const {routes, rate, mapLoaded} = this.state;
		return (
			<div className="app">
				<header className="header">
					<h1 className="header__title">Маршрут</h1>
				</header>
				<section className="body">
					<Field placeholder="Вводите маршрут" onNewRoute={this.registerRoute} />
					<RoutesList routes={routes} onRemove={this.removePoint}/>
					<Map mapLoaded={mapLoaded}/>
					<StarRating starsSelected={rate} onRate={this.onRate}/>
				</section>
			</div>
		);
	}
}

export default App;
