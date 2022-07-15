import React, { useState } from 'react';
import FormInput from './components/FormInput';
import './app.css';

const App = () => {
	const [formValues, setFormValues] = useState({
		username: '',
		email: '',
		birthday: '',
		password: '',
		confirmPassword: '',
	});

	const inputs = [
		{
			id: 1,
			name: 'username',
			type: 'text',
			placeholder: 'Username',
			errormessage:
				"Username should be 3-16 characters and sholdn't include any special character",
			label: 'Username',
			pattern: '^[A-Za-z0-9]{3,16}$',
			required: true,
		},
		{
			id: 2,
			name: 'email',
			type: 'email',
			placeholder: 'Email',
			errormessage: 'should be valid email address',
			label: 'Email',
			required: true,
		},
		{
			id: 3,
			name: 'birthday',
			type: 'date',
			placeholder: 'Birthday',
			label: 'Birthday',
		},
		{
			id: 4,
			name: 'password',
			type: 'password',
			placeholder: 'Password',
			errormessage:
				'should be 8 -20 characters and should include at least 1 letter, 1number and 1 special character',
			label: 'Password',
			pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
			required: true,
		},
		{
			id: 5,
			name: 'confirmPassword',
			type: 'password',
			placeholder: 'Confirm Password',
			errormessage: "Passwords don't match",
			label: 'Confirm Password',
			pattern: formValues.password,
			required: true,
		},
	];

	const onChange = (e) => {
		setFormValues({ ...formValues, [e.target.name]: e.target.value });
	};

	return (
		<div className='app'>
			<form className='form'>
				<h1>Register</h1>
				{inputs.map((input) => (
					<FormInput
						key={input.id}
						input={input}
						value={formValues[input.name]}
						onChange={onChange}
					/>
				))}
				<button>Submit</button>
			</form>
		</div>
	);
};

export default App;
