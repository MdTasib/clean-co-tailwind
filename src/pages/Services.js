import React, { useEffect, useState } from "react";
import fetecher from "../api";

const Services = () => {
	const [services, setServices] = useState([]);

	useEffect(() => {
		(async () => {
			const res = await fetecher.get("/service");
			setServices(res.data);
		})();
	}, []);

	console.log(services);
	return <div>this is services page</div>;
};

export default Services;
