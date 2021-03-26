import React from 'react';
import { Button } from '@material-ui/core';
import { useUserContext } from '../contexts/userAuthContext';
import { Google } from '../assets/svg/SVGindex';
import { useHistory } from 'react-router-dom';

export default function Login() {
	const { login } = useUserContext();
	const history = useHistory();

	async function handleSubmit(e) {
		e.preventDefault();
		try {
			await login();
			history.push('/hello');
		} catch (error) {
			console.log(error);
		}
	}

	return (
		<div>
			<form className='dead-center' onSubmit={handleSubmit}>
				<Button
					type='submit'
					size='large'
					variant='outlined'
					color='default'
					className='animate__animated animate__fadeInDown'>
					<Google fontSize='large' />
					Log in with google
				</Button>
			</form>
		</div>
	);
}
