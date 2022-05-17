import React from "react";

const Login = () => {
	return (
		<div className='h-[100vh] flex bg-accent justify-center items-center mt-20'>
			<div className='card w-full max-w-sm shadow-2xl bg-base-100'>
				<div className='card-body'>
					<h1 className='text-center text-2xl'>Login</h1>
					<div className='form-control'>
						<label className='label'>
							<span className='label-text'>Email</span>
						</label>
						<input
							type='text'
							placeholder='email'
							className='input input-bordered'
						/>
					</div>
					<div className='form-control'>
						<label className='label'>
							<span className='label-text'>Password</span>
						</label>
						<input
							type='text'
							placeholder='password'
							className='input input-bordered'
						/>
						<label className='label'>
							<p className='label-text-alt link link-hover'>Forgot password?</p>
						</label>
					</div>
					<div className='form-control'>
						<button className='btn btn-primary'>Login</button>
					</div>
					<div className='divider'>OR</div>
					<button className='btn btn-glass hover:btn-accent'>
						Continue with google
					</button>
				</div>
			</div>
		</div>
	);
};

export default Login;
