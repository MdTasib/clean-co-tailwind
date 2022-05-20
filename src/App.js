import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { publicRoutes } from "./routes/publicRoutes";
import { privateRoutes } from "./routes/privateRoutes";
import { useEffect, useState } from "react";
import PrivateRoute from "./authentication/PrivateRoute";
import AdminRoute from "./authentication/AdminRoute";
import Dashboard from "./pages/Dashboard/Dashboard";
import AOS from "aos";
import "aos/dist/aos.css";
import AddAdmin from "./pages/Dashboard/AddAdmin";
import AddService from "./pages/Dashboard/AddService";

function App() {
	const [dark, setDark] = useState(false);

	useEffect(() => {
		AOS.init();
	}, []);

	return (
		<div data-theme={dark ? "dark" : "light"}>
			<Navbar theme={[dark, setDark]} />
			<Routes>
				{publicRoutes.map(({ path, Component }, index) => (
					<Route key={index} path={path} element={<Component />} />
				))}

				<Route element={<PrivateRoute />}>
					{privateRoutes.map(({ path, Component }, index) => (
						<Route key={index} path={path} element={<Component />} />
					))}
				</Route>
				<Route element={<AdminRoute />}>
					<Route path='/dashboard' element={<Dashboard />}>
						<Route path='add-admin' element={<AddAdmin />} />
						<Route path='add-service' element={<AddService />} />
					</Route>
				</Route>
			</Routes>
		</div>
	);
}

export default App;
