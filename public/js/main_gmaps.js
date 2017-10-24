$(function() {

	$('#map').slideToggle();

	$('.button_map').click(function() {
		$('#map').slideToggle();
	})

	var map = new GMaps({
	  div: '#map',
	  lat: 49.19564334,
	  lng: 16.60824895
	});

	map.addMarker({
	  lat: 49.19564334,
	  lng: 16.60824895,
	});

});
