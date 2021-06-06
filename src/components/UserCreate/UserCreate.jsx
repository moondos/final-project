import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Form, Field } from 'react-final-form'; 

import './UserCreate.css';
import "../../index.css";


const UserCreate = ({ onSubmit, buttonName}) => {
    return (
        <Form
            onSubmit={onSubmit}
            render={({ handleSubmit, form, submitting, pristine }) => (
                <form className={"form"} onSubmit={handleSubmit}>
                    <label className="label">
                        Имя:
                        <Field
                            initialValue=""
                            component="input"
                            className="input"
                            placeholder="Имя"
                            type="text"
                            name="firstName"
                        />
                        </label>
                        <label className="label">
                            Фамилия:
                            <Field
                                initialValue=""
                                component="input"
                                className="input"
                                placeholder="Фамилия"
                                type="text"
                                name="lastName"
                            />
                        </label>
                        <label className="label">
                            Email:
                            <Field
                                initialValue=""
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
                        <label className="label">
                            Повторите пароль:
                            <Field
                                component="input"
                                className="input"
                                placeholder="пароль"
                                type="password"
                                name="repassword"
                            />
                        </label>
                        <div className={"buttons"}>
                            <button
                                className={`${"submit"} button`}
                                disabled={submitting || pristine}
                            >
                                {buttonName}
                            </button>
                            <button
                                className={`${"submit"} button`}
                                type="button"
                                onClick={form.reset}
                                disabled={submitting || pristine}
                            >
                                Сбросить
                            </button>
                        </div>
                    
                </form>
            )}
        /> 
    );
};

export default UserCreate;