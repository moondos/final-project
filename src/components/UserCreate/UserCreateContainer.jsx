import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router";
import { signUp } from "../../redux/auth-reducer.js";
import UserCreate from "./UserCreate.jsx";

const UserCreateContainer = ({ isAuth, signUp }) => {
    if (isAuth) {
        return <Redirect to={"/"} />
    }

    const onSubmit = (formData) => {
        signUp(formData);
    }

    return (
        <UserCreate
            onSubmit={onSubmit}
            buttonName="Зарегистрироваться"
            isRegistration={true}
        />
    )
};

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
    };
};

export default connect(mapStateToProps, { signUp })(UserCreateContainer);