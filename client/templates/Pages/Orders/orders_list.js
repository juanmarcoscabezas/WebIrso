import { Template } from 'meteor/templating';
import './orders.html';

Template.orders.helpers({
  orders: function() {
    return Orders.find();
  }
});

Template.orders.events({
  'click #btn-modal': function(){
    Modal.show('ordersModal');
  }
});
