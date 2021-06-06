import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Form, Field } from 'react-final-form'; 

import './UserAuth.css';
import "../../index.css";


const UserAuth = ({ onSubmit }) => {
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
					<button
						className={`${"submit"} button`}
						// type="button"
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