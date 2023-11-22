import React, { useContext, useState } from "react";
import "../../styles/home.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { IoIosPhonePortrait } from "react-icons/io";
import { GrMapLocation } from "react-icons/gr";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { FaPerson } from "react-icons/fa6";
import { FaEdit } from "react-icons/fa";
import { MdDeleteSweep } from "react-icons/md";
import Imagen from "../component/imagen";

const Boton = () => {
  return (
    <div className="boton-container">
      <Link to="/formulario">
        <button className="btn btn-primary">Agregar contacto</button>
      </Link>
    </div>
  );
};

const FormularioEdicion = ({ contacto, onSave, onCancel }) => {
  const [nombre, setNombre] = useState(contacto.nombre);
  const [email, setEmail] = useState(contacto.email);
  const [telefono, setTelefono] = useState(contacto.telefono);
  const [direccion, setDireccion] = useState(contacto.direccion);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({
      nombre,
      email,
      telefono,
      direccion,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="nombre" className="form-label">
          Nombre:
        </label>
        <input
          type="text"
          className="form-control"
          id="nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email:
        </label>
        <input
          type="email"
          className="form-control"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="telefono" className="form-label">
          Teléfono:
        </label>
        <input
          type="tel"
          className="form-control"
          id="telefono"
          value={telefono}
          onChange={(e) => setTelefono(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="direccion" className="form-label">
          Dirección:
        </label>
        <input
          type="text"
          className="form-control"
          id="direccion"
          value={direccion}
          onChange={(e) => setDireccion(e.target.value)}
        />
      </div>
      <button type="submit" className="btn btn-success me-2">
        Guardar
      </button>
      <button
        type="button"
        className="btn btn-secondary ml-2"
        onClick={onCancel}
      >
        Cancelar
      </button>
    </form>
  );
};

const Lista = () => {
  const { store, actions } = useContext(Context);
  const [editId, setEditId] = useState(null);

  const handleEditContact = (id) => {
    setEditId(id);
  };

  const handleCancelEdit = () => {
    setEditId(null);
  };

  const handleSaveEdit = (id, updatedContacto) => {
    actions.editContacto(id, updatedContacto);
    setEditId(null);
  };

  return (
    <div className="container">
      <div className="row">
        {store.contactos.map((contacto) => (
          <div
            key={contacto.id}
            className="col-md-12 mb-4 d-flex justify-content-between align-items-center"
          >
            <div className="card" style={{ width: "60rem" }}>
              <div className="d-flex align-items-center">
                <div className="col-md-3 d-flex justify-content-center py-3">
                  <Imagen style={{ maxWidth: '150px', maxHeight: '150px' }} imagenEspecifica={contacto.imagen} />
                </div>
                <div className="col-md-6 text-star">
                  <p style={{ marginBottom: "5px", marginTop: "10px" }}>
                    <FaPerson /> {contacto.nombre}
                  </p>
                  <p style={{ marginBottom: "5px" }}>
                    <MdOutlineAlternateEmail /> {contacto.email}
                  </p>
                  <p style={{ marginBottom: "5px" }}>
                    <IoIosPhonePortrait /> {contacto.telefono}
                  </p>
                  <p>
                    <GrMapLocation /> {contacto.direccion}
                  </p>
                </div>
                <div className="col-md-3 d-flex align-items-center justify-content-center">
                  {editId === contacto.id ? (
                    <FormularioEdicion
                      contacto={contacto}
                      onSave={(updatedContacto) =>
                        handleSaveEdit(contacto.id, updatedContacto)
                      }
                      onCancel={() => handleCancelEdit()}
                    />
                  ) : (
                    <>
                      <FaEdit
                        size={32}
                        style={{ cursor: "pointer", marginRight: "30px" }}
                        onClick={() => handleEditContact(contacto.id)}
                      />
                      <MdDeleteSweep
                        size={32}
                        style={{ cursor: "pointer" }}
                        onClick={() => {
                          const confirmDelete = window.confirm(
                            "¿Estás seguro de que deseas eliminar este contacto?"
                          );
                          if (confirmDelete) {
                            actions.deleteContacto(contacto.id);
                          }
                        }}
                      />
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export const Agenda = () => (
  <>
    <Boton />
    <Lista />
  </>
);




