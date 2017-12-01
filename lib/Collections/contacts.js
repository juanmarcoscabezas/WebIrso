Contact = new Mongo.Collection("contact");
var Schemas = {};

Schemas.Contact = new SimpleSchema({
    name: {
        type: String,
        label: "Nombre",
        max: 50,
        autoform: {
         label: false,
         placeholder: "Nombre *"
        }
    },
    email: {
        type: String,
        label: "E-mail",
        max: 50,
        autoform: {
         label: false,
         placeholder: "E-mail *"
        }
    },
    phone: {
        type: String,
        label: "Teléfono",
        min: 0,
        max:10,
        autoform: {
         label: false,
         placeholder: "Teléfono *"
        }
    },
    about: {
        type: String,
        label: "Asunto",
        autoform: {
         label: false,
         placeholder: "Asunto *"
        }
    },
    message: {
        type: String,
        label: "Mensaje",
        max: 1000,
        autoform: {
          label: false,
          placeholder: "Mensaje *",
          afFieldInput: {
            type: "textarea",
            rows: 10
          }
        }
    }
});
Contact.attachSchema(Schemas.Contact);
