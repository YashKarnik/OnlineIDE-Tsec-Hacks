import React from 'react';
import { useUserContext } from '../contexts/userAuthContext';
import Navbar from './Navbar';
import { GoogleSvg, GithubSVG } from '../assets/svgs';
export default function Login(props) {
	const { login, currentUser } = useUserContext();

	async function handleLogin(e) {
		try {
			await login();
			props.history.push('./ide');
		} catch (error) {}
	}

	return (
		<div className='landing-pg'>
			<Navbar />
			<div>
				<section className='landing-btns'>
					<button
						type='button'
						className='google-login-btn'
						onClick={handleLogin}>
						<GoogleSvg />
						LOGIN WITH GOOGLE
					</button>
					<button type='button' className='github-login-btn'>
						<GithubSVG />
						LOGIN WITH GITHUB
					</button>
				</section>
			</div>
		</div>
	);
}
