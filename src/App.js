import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Public from "./components/Public";
import Login from "./features/auth/Login";
import DashLayout from "./components/DashLayout"
import BemVindo from "./features/auth/BemVindo";
import NotasLista from "./features/notas/NotasLista";
import UsuariosLista from "./features/usuarios/UsuariosLista";


function App() {
	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route index element={<Public />} />
				<Route path="login" element={<Login />} />

				<Route path="dash" element={<DashLayout />}>

					<Route index element={<BemVindo />} />

					<Route path="notas">
						<Route index element={<NotasLista />} />
					</Route>

					<Route path="usuarios">
						<Route index element={<UsuariosLista />} />
					</Route>

				</Route>{/*fim de dash*/}


			</Route>
		</Routes>
	);
}

export default App;
