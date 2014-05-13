
function sleep(millis, callback) {
	setTimeout(callback, millis);
}

function zoomin(zoomlevel){
	map.setView([36.05857083768647, -119.54936027526854], zoomlevel)

}

function mapinit(){

    document.getElementById('charles').style.visibility = 'hidden';
    document.getElementById('title-text').style.visibility = 'hidden';
    document.getElementById('subtitle').style.visibility = 'hidden';

    document.getElementById('map').style.visibility = 'visible';

	sleep(2500, "zoomin(14)")

}

var map = L.mapbox.map('map', 'ndvr.i689n120')
.setView([0, 0], 2);

