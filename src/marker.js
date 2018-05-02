const { Marker } = require('mapbox-gl');

const iconURL = {
  hotels: 'http://i.imgur.com/D9574Cu.png',
  activities: 'http://i.imgur.com/WbMOfMl.png',
  restaurant: 'http://i.imgur.com/cqR6pUI.png',
};

const newMarker = function(type, coord) {
  if (!iconURL.hasOwnProperty(type)) {
    type = 'activities';
  }

  const markerDomEl = document.createElement('div'); // Create a new, detached DIV
  markerDomEl.style.width = '32px';
  markerDomEl.style.height = '39px';
  markerDomEl.style.backgroundImage = `url(${iconURL[type]})`;
  return new Marker(markerDomEl).setLngLat(coord);
};

module.exports = newMarker;
