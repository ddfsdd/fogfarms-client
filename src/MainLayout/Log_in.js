import { Button, FormControl, Form, Container, Image } from 'react-bootstrap';
import React, { useState } from 'react';
import axios from 'axios';
import '../css_sheet/login.css';
import '../css_sheet/global_theme.css';
import Logo from '../image/Dashboard_Logo.png';
function Login(props) {
	const [email, setEmail] = useState(''); //use useState to store variable
	//store in variable email, change the stored value with setEmail
	const [password, setPassword] = useState('');
	const serverName = 'https://salty-oasis-24147.herokuapp.com';
	function validateForm() {
		return email.length > 0 && password.length > 0;
	}
	function handleSubmit(event) {
		event.preventDefault();
		console.log(email + ' ' + password);
		// console.log(serverName.concat('/auth/sign_in'));
		const data = {
			username: email,
			password: password,
		};
		axios.post(serverName + '/auth/sign_in', data).then((res) => {
			console.log(res);
		});
	}
	return (
		<Container fluid className="Login">
			<Image className="fluid mx-auto d-block" src={Logo} fluid />
			<form onSubmit={handleSubmit}>
				<Form.Group controlId="Email">
					<Form.Label>Email Address</Form.Label>
					<FormControl
						autoFocus
						type="string"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						placeholder="name@example.com"
					/>
				</Form.Group>
				<Form.Group controlId="Password">
					<Form.Label>Password</Form.Label>
					<FormControl
						type="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						placeholder="enter password here"
					/>
				</Form.Group>
				<Button block bsSize="large" disabled={!validateForm()} type="submit">
					LogIn
				</Button>
			</form>
		</Container>
	);
}
export default Login;
