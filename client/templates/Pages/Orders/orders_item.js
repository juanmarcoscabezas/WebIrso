Template.ordersItem.events({
  //AUN NADA CON EL CHEKEO
  'click #check'() {
    Orders.update(this._id, { $set: { checked: !this.checked } });
  },
  'click #send'() {
    Orders.update(this._id, { $set: { send: !this.send } });
  },
  'click #delete'() {
    Orders.remove(this._id);
  }
});
