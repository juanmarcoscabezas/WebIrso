import { Template } from 'meteor/templating';
import './orders.html';

Template.orders.helpers({
  orders: function() {
    return Orders.find({}, {sort: {date: -1}});
  }
});
