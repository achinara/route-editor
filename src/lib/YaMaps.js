class YaMaps {
	constructor({container, addRoute}) {
		this.yamaps = window.ymaps;
		this.addRoute = addRoute;
		this.container = container;
    this.placeMark = null;
    this.route = null;
	}

  init() {
    this.maps = new this.yamaps.Map(this.container, {
      center: [55.75399399999374, 37.62209300000001],
      zoom: 9,
      controls: ['zoomControl']
    });

    this.suggestView = new this.yamaps.SuggestView('suggest', {offset: [-1, 3]});
  }

	buildRoute(routes) {
    this.yamaps.route(routes, {
      mapStateAutoApply: true
    }).then(
      (route) => {
        this.removePlaceMark();
        this.removeRoute();

        this.maps.geoObjects.add(this.route = route);
        route.editor.start({
          editWayPoints: false,
          addViaPoints: false,
          removeWayPoints: true
        });
      },
      (error) => {
        console.log("Возникла ошибка: " + error.message);
      }
    )
	}

	removeRoute() {
	  if (this.route) {
      this.maps.geoObjects.remove(this.route);
      this.route = null;
    }
  }

  removePlaceMark() {
	  if (this.placeMark) {
      this.maps.geoObjects.remove(this.placeMark);
      this.placeMark = null;
    }
	}

	addPlacemark(route) {
	  this.removePlaceMark();
    this.removeRoute();

    this.placeMark = new this.yamaps.Placemark(route.coords,
      {iconContent: '1', balloonContent: route.name});
    this.maps.setCenter(route.coords);
		this.maps.geoObjects.add(this.placeMark);
	}

	getCoords(value) {
    const geocoder = this.yamaps.geocode(value);
    geocoder.then(
      (res) => {
      	const coords = res.geoObjects.get(0).geometry.getCoordinates();
      	this.addRoute({name: value, coords: coords});
			},
      (err) => {
        console.log(err);
      }
    )
	}

}

export default YaMaps;