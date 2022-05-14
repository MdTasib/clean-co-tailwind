import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { publicRoutes } from "./routes/publicRoutes";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function App() {
	useEffect(() => {
		AOS.init();
	}, []);

	return (
		<>
			<Navbar />
			<Routes>
				{publicRoutes.map(({ path, Component }, index) => (
					<Route key={index} path={path} element={<Component />} />
				))}
			</Routes>
		</>
	);
}

export default App;
