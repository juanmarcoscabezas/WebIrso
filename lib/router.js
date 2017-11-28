Router.configure({
  layoutTemplate: 'layout',
  notFoundTemplate: 'notFound'
});

/*Router.route('/', function () {
  this.render('home');
});*/

/*Router.route('/inicio', function () {
  this.render('home');
});*/
Router.route('/', {name: 'home'});
Router.route('/nosotros', {name: 'about'});
Router.route('/servicios', {name: 'services'});
Router.route('/contacto', {name: 'contact'});
Router.route('/pedidos', {name: 'orders'});
