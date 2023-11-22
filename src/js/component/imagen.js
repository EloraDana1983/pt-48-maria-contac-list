import React from "react";
import "../../styles/home.css";

const Imagen = ({ style, imagenEspecifica }) => {
  
  const imagenesAleatorias = [
    require("../img/Arandano.jpg").default,
    require("../img/Broffina.png").default,
    require("../img/Canela.png").default,
    require("../img/cocoloca.jpg").default,
    require("../img/Daisy.png").default,
    require("../img/Dalta.jpg").default,
    require("../img/Munchi.jpg").default,
    require("../img/Narciso.jpg").default,
    require("../img/Paulino.jpg").default,
    require("../img/Rosenda.jpg").default,
    require("../img/Tom.png").default,
  ];

  // const imagenAleatoria =
  //   imagenesAleatorias[Math.floor(Math.random() * imagenesAleatorias.length)];
  
  const imagenFuente = imagenEspecifica || imagenesAleatorias[Math.floor(Math.random() * imagenesAleatorias.length)]

  return (
    <img
      style={style}
      src={imagenFuente}
      alt={`Imagen aleatoria`}
    />
  );
};

export default Imagen;   