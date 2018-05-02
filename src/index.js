const mapboxgl = require('mapbox-gl');
const newMarker = require('./marker.js');

mapboxgl.accessToken =
  'pk.eyJ1IjoicGFua3RpcDg1IiwiYSI6ImNqZ281d3NkNjB4c3UzNHFzZmo5eXRwZWwifQ.CE_QUZjtGLP-yxEaFI3DyA';

const map = new mapboxgl.Map({
  container: 'map',
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: 'mapbox://styles/mapbox/streets-v10', // mapbox has lots of different map styles available.
});

const marker = newMarker('hotels', [-74.009151, 40.705086]);
marker.addTo(map);
