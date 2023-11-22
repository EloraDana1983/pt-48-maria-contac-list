import React, { useState, useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/demo.css";

export const Formulario = () => {
  const { actions, store } = useContext(Context);
  const navigate = useNavigate();
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");
  const [direccion, setDireccion] = useState("");
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    if (editId !== null) {
      const contactoEditar = store.contactos.find((contacto) => contacto.id === editId);
      setNombre(contactoEditar.nombre || "");
      setEmail(contactoEditar.email || "");
      setTelefono(contactoEditar.telefono || "");
      setDireccion(contactoEditar.direccion || "");
    }
  }, [editId, store.contactos]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const nuevoContacto = {
      nombre,
      email,
      telefono,
      direccion,
    };

    if (editId !== null) {
      actions.editContacto(editId, nuevoContacto);
    } else {
      actions.addContacto(nuevoContacto);
    }

    setNombre("");
    setEmail("");
    setTelefono("");
    setDireccion("");
    navigate("/agenda");
  };

  return (
    <div className="container d-flex flex-column align-items-center justify-content-center vh-100">
      <form onSubmit={handleSubmit} className="mb-4 w-50">
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
        <button type="submit" className="btn btn-primary btn-lg w-100">
          Enviar formulario
        </button>
        <Link to="/agenda">Volver a Contactos</Link>
      </form>
    </div>
  );
};


