import React, { Component } from 'react';
import "./Header.css";
import logo from '../../img/logo.svg';
import { NavLink, Redirect } from 'react-router-dom';

const Header = ({ auth, signOut }) => {
    const { isAuth } = auth;
    
    const onExitButtonClicked = () => {
      signOut();
    };

    
    return (
        <div className={"header"}>
            <div className="container">
                <div className={"headerContainer"}>
                <NavLink to="/">
                    <img src={logo} alt="logo" />
                </NavLink>
                {isAuth && (
                    <div className={"breadcrumbs"}>
                    <NavLink
                        to="/report"
                        className={"link"}
                        activeClassName={"active"}
                    >
                        Новый случай
                    </NavLink>
                    <NavLink
                        to="/stolen-bikes"
                        className={"link"}
                        activeClassName={"active"}
                    >
                        Украденные велосипеды
                    </NavLink>
                    <NavLink
                        to="/officers"
                        className={"link"}
                        activeClassName={"active"}
                    >
                        Ответственные сотрудники
                    </NavLink>
                    </div>
                )}

                <div className={"buttons"}>
                    {!isAuth && (
                    <>
                        <NavLink to="/auth">
                        <button className="button">Войти</button>
                        </NavLink>
                        <NavLink to="/create">
                        <button className="button">Зарегистрироваться</button>
                        </NavLink>
                    </>
                    )}
                    {isAuth && (
                    <button className="button" onClick={onExitButtonClicked}>
                        Выйти
                    </button>
                    )}
                </div>
                </div>
            </div>
        </div>
    
    );
};

export default Header;
