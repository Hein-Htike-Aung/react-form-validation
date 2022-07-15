import React, { useState } from 'react';
import './formInput.css';

const FormInput = (props) => {
	const [focused, setFocused] = useState(false);

	const { input, value, onChange } = props;

	return (
		<div className='formInput'>
			<label>{input.label}</label>
			<input
				onChange={onChange}
				{...input}
				value={value}
				required={input.required}
				pattern={input.pattern}
				onBlur={() => setFocused(true)} // click and leave
				onFocus={() => input.name === 'confirmPassword' && setFocused(true)} // click
				focused={focused.toString()}
			/>
			<span>{input.errormessage}</span>
		</div>
	);
};

export default FormInput;
