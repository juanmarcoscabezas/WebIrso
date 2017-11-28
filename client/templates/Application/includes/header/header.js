import { Template } from 'meteor/templating';

import './header.html';

Template.registerHelper('currentRouteIs', function (route) {
  return Router.current().route.getName() === route;
});
