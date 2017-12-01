Orders = new Mongo.Collection('orders');

var Schemas = {};

Schemas.Orders = new SimpleSchema({
  title: {
    type: String,
    label: "Descripción del pedido",
    autoform: {
     label: false,
     placeholder: "Descripción del pedido *"
    }
  },
  checked: {
    type: Boolean,
    label: "Pedido revisado"
  },
  send: {
    type: Boolean,
    label: "Pedido Enviado"
  },
  date: {
    type: Date,
    label: "Fecha del pedido",
    autoValue: function() {
      if (this.isInsert) {
        var date = new Date()
        var begun = moment(date).format("MM.DD.YYYY");
        return date;
      } else if (this.isUpsert) {
        var date = new Date()
        var begun = moment(date).format("MM.DD.YYYY");
        return {$setOnInsert: date};
      } else {
        this.unset();  // Prevent user from supplying their own value
      }
    }
  },
  "tableItems.$.codigo": {
    type: String,
    label: "Código producto",
    autoform: {
     label: false,
     placeholder: "Código del producto*"
    }
  },
  "tableItems.$.insumo": {
    type: String,
    label: "Nombre producto",
    autoform: {
     label: false,
     placeholder: "Nombre del producto *"
    }
  },
  "tableItems.$.cantidad": {
    type: Number,
    label: "Cantidad producto",
    autoform: {
     label: false,
     placeholder: "Cantidad del producto *"
    }
  }
});
Orders.attachSchema(Schemas.Orders);
