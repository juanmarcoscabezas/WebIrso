import { Template } from 'meteor/templating';
import './orders_modal.html';

Template.orders.events({
  'click #btn-save': function(){
    Modal.hide('ordersModal');
    console.log("h");
  }
});
