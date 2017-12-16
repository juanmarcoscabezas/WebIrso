Meteor.startup(function() {
  GoogleMaps.load();
});

Template.contact.onRendered(function() {
  GoogleMaps.load({ v: '3', key: 'AIzaSyCmpMvulMwpoW0jY0WVj8eeS2NtnmYjkGc', libraries: 'geometry,places' });
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
      map: map.instance
    });
  });
});
