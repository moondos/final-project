import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Form, Field } from 'react-final-form';
import { OnChange } from 'react-final-form-listeners';

import './UserAuth.css';
import "../../index.css";

// const toogleCheckbox = (value, previous) => {

// 		const pwdfield = document.getElementsByName("password")
// 		console.log()
// 		if (value == true) { pwdfield.type = "text" } else { pwdfield.type = "password" };
// 		console.log(value, pwdfield)

// }

const UserAuth = ({ onSubmit }) => {
    // const password= "password"
	return (
        <Form
            onSubmit={onSubmit}
			
            render={({ handleSubmit, submitting, pristine }) => (
				
                <form className={"form"} onSubmit={handleSubmit}>
					<label className="label">
						Email:
						<Field
							component="input"
							className="input"
							placeholder="email"
							type="text"
							name="email"
						/>
					</label>
					<label className="label">
						Пароль:
						<Field
							component="input"
							className="input"
							placeholder="пароль"
							type="password"
							name="password"
						/>
					</label>

					{/* <label className="label">
						Show password
            			<Field 
							name="show_pwd" 
							component="input" 
							type="checkbox"
						/>
						<OnChange name="show_pwd">
  							{ toogleCheckbox}
						</OnChange>
					</label> */}
					<button
						className={`${"submit"} button`}
						disabled={submitting || pristine}
					>
						Войти
					</button>
                  
                </form>
            )}
        /> 
    );
};

export default UserAuth;