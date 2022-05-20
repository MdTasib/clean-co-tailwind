import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import fetcher from "../../api";

const AddAdmin = () => {
	const [imageUrl, setImageUrl] = useState("");
	const { register, handleSubmit, reset } = useForm();
	const onSubmit = async data => {
		const serviceData = {
			...data,
			image: imageUrl,
		};
		// const res = await fetcher.post("add-service", serviceData);
		await fetcher.post("add-service", serviceData);
		reset();
	};

	const handleImage = event => {
		const image = event.target.files[0];
		const formData = new FormData();
		formData.set("image", image);
		axios
			.post(
				"https://api.imgbb.com/1/upload?key=eb7bb93d7839539a8bddb41471f7e0da",
				formData
			)
			.then(res => setImageUrl(res.data.data.url))
			.catch(error => console.log(error));
	};

	return (
		<div className='w-full flex bg-accent justify-center items-center mt-20'>
			<div className='card shadow-2xl bg-base-100'>
				<div className='card-body'>
					<h1 className='text-center text-2xl'>Add Service</h1>
					<form onSubmit={handleSubmit(onSubmit)}>
						<div className='form-control'>
							<label className='label'>
								<span className='label-text'>Service Name</span>
							</label>
							<input
								type='text'
								className='input input-bordered'
								{...register("serviceName")}
							/>
						</div>
						<div className='form-control'>
							<label className='label'>
								<span className='label-text'>Service Charge</span>
							</label>
							<input
								type='text'
								className='input input-bordered'
								{...register("serviceCharge")}
							/>
						</div>
						<div className='form-control'>
							<label className='label'>
								<span className='label-text'>Image</span>
							</label>
							<input
								type='file'
								className='input input-bordered'
								onChange={handleImage}
							/>
						</div>
						<div className='form-control'>
							<button
								type='submit'
								className='btn btn-primary'
								disabled={!imageUrl && true}>
								Add Service
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default AddAdmin;
