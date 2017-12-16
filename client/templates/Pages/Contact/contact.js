Meteor.startup(function() {
  GoogleMaps.load({ key: 'AIzaSyCjHziMsX6PH5WDm7uC6YDmY6ldcnDkUqw' });
});

GoogleMaps.load({ key: 'AIzaSyCjHziMsX6PH5WDm7uC6YDmY6ldcnDkUqw' });


Template.contact.onRendered(function() {
  GoogleMaps.load({ v: '3', key: 'AIzaSyCjHziMsX6PH5WDm7uC6YDmY6ldcnDkUqw', libraries: 'geometry,places' });
});

Template.contact.helpers({
  exampleMapOptions: function() {
    // Make sure the maps API has loaded
    if (GoogleMaps.loaded()) {
      // Map initialization options
      return {
        center: new google.maps.LatLng(1.806913972099933, -78.76379654556519),
        zoom: 20
      };
    }
  }
});

Template.contact.onCreated(function() {
  // We can use the `ready` callback to interact with the map API once the map is ready.
  GoogleMaps.ready('exampleMap', function(map) {
    // Add a marker to the map once it's ready
    var marker = new google.maps.Marker({
      position: map.options.center,
      map: map.instance,
      title: 'Instituto Radiológico del Sur Occidente'
    });
    marker.setMap(map);
  });
});
