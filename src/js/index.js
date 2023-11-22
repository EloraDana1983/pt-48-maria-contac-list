//importar react en el bundle
import React from 'react'
import {createRoot} from 'react-dom/client'

//incluya su archivo index.scss en el paquete
import "../styles/index.css";

//importe sus propios componentes
import Layout from './layout.js'

//
const root = createRoot(document.querySelector("#app"))

//renderiza tu aplicación react
root.render(<Layout/>)

