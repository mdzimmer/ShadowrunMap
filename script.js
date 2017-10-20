var map;
var featureOpts = [{
    "featureType": "administrative.country",
    "elementType": "geometry.stroke",
    "stylers": [{
        "visibility": "off"
    }]
}, {
    "featureType": "administrative.country",
    "elementType": "labels",
    "stylers": [{
        "visibility": "off"
    }]
}, {
    "featureType": "administrative.province",
    "elementType": "geometry.stroke",
    "stylers": [{
        "visibility": "off"
    }]
}, {
    "featureType": "administrative.province",
    "elementType": "labels.text",
    "stylers": [{
        "visibility": "off"
    }]
}];
var MY_MAPTYPE_ID = "Shadowrun";
var mouseDown = false;
var tempLat = 0;
var tempLng = 0;
var minTravel = 1;
var curLine = null;
var myMarkers = [];
var myLines = [];
var firebase = null;
var config = {
    apiKey: "AIzaSyCc6Z3xARTskSNQZOC8XmLKXmyUn3gXmjs",
    authDomain: "shadowrunmap.firebaseapp.com",
    databaseURL: "https://shadowrunmap.firebaseio.com",
    projectId: "shadowrunmap",
    storageBucket: "shadowrunmap.appspot.com",
    messagingSenderId: "9558394399"
};

firebase.initializeApp(config);
firebase.auth().onAuthStateChanged(function() {});
firebase.auth().signInAnonymously();

function distance(x1, x2, y1, y2) {
    var a = x2 - x1;
    var b = y2 - y1;
    return Math.sqrt(a * a + b * b);
}

function guid() {
    function s4() {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
        s4() + '-' + s4() + s4() + s4();
}

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {
            lat: 30.0444,
            lng: 31.2357
        },
        zoom: 3,
        mapTypeControlOptions: {
            mapTypeIds: [google.maps.MapTypeId.ROADMAP, MY_MAPTYPE_ID]
        },
        mapTypeId: MY_MAPTYPE_ID,
        disableDoubleClickZoom: true,
        streetViewControl: false,
    });
    var styledMapOptions = {
        name: 'Custom Style'
    };

    var customMapType = new google.maps.StyledMapType(featureOpts, styledMapOptions);

    map.mapTypes.set(MY_MAPTYPE_ID, customMapType);

    var ctaLayer = new google.maps.KmlLayer({
        url: "https://google.com/maps/d/kml?mid=1vTTZrcPvgTyuGV9EJjYxoZUDLZw&dummy=" + (new Date()).getTime(),
        map: map
    });
}

function mouseDown(event) {
    console.log(event.button);
}

function mouseUp(event) {
    console.log(event.button);
}