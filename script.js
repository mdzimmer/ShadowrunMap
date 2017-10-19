var map;
var brooklyn = new google.maps.LatLng(40.6743890, -73.9455);

var MY_MAPTYPE_ID = 'custom_style';

function initialize() {
  var featureOpts = [
    {
      featureType: "all",
      elementType: "labels",
      stylers: [
      { visibility: "off" }
      ]
    },
    {
      featureType: "administrative.country",
      elementType: "geometry.fill",
      stylers: [
      { visibility: "off" }
      ]
    },
    {
      featureType: "administrative.country",
      elementType: "geometry.stroke",
      stylers: [
      { visibility: "off" }
      ]
    }
  ];

  var mapOptions = {
    zoom: 2,
    center: brooklyn,
    mapTypeControlOptions: {
      mapTypeIds: [google.maps.MapTypeId.ROADMAP, MY_MAPTYPE_ID]
    },
    mapTypeId: MY_MAPTYPE_ID
  };

  map = new google.maps.Map(document.getElementById('map_canvas'),
  mapOptions);

  var styledMapOptions = {
    name: 'Custom Style'
  };

  var customMapType = new google.maps.StyledMapType(featureOpts, styledMapOptions);

  map.mapTypes.set(MY_MAPTYPE_ID, customMapType);
}