import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import 'bootstrap/dist/css/bootstrap.min.css';

import { Agenda } from '../js/views/agenda'
import { Formulario } from "./views/formulario";
import { Single } from "./views/single";
import injectContext from "./store/appContext";




//cree su primer componente
const Layout = () => {
	//el nombre base se utiliza cuando su proyecto se publica en un subdirectorio y no en la raíz del dominio
	// puede establecer el nombre base en el archivo .env ubicado en la raíz de este proyecto, Ej: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					
					<Routes>
						<Route path="/" element={<Agenda />} />
						<Route path="/agenda" element={<Agenda />} />
						<Route path="/formulario" element={<Formulario />} />
						<Route path="/single/:theid" element={<Single />} />
						<Route path="*" element={<h1>Not found!</h1>} />
					</Routes>
					
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
