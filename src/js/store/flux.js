import { v4 as uuidv4 } from 'uuid';


const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      contactos: [
        {
          id: uuidv4(),
          nombre: "Hans Aparicio",
          email: "correo@example.com",
          telefono: "123-456-7890",
          direccion: "De Bilbo pues...",
          imagen: require("../img/thermo.png").default
        },
        
      ],
    },
    actions: {
      exampleFunction: () => {
        getActions().changeColor(0, "green");
      },
      loadSomeData: () => {
        /**
         * fetch().then().then(data => setStore({ "foo": data.bar }))
         */
      },
      addContacto: (contacto) => {
        const store = getStore();
        const nuevoContacto = { id: uuidv4(), ...contacto };
        setStore({ contactos: [...store.contactos, nuevoContacto] });
      },
      deleteContacto: (id) => {
        const store = getStore();
        const updatedContactos = store.contactos.filter((contacto) => contacto.id !== id);
        setStore({ contactos: updatedContactos });
      },
      editContacto: (id, updatedContacto) => {
        const store = getStore();
        const updatedContactos = store.contactos.map((contacto) =>
          contacto.id === id ? { ...contacto, ...updatedContacto } : contacto
        );
        setStore({ contactos: updatedContactos });
      },
    },
  };
};

export default getState;


