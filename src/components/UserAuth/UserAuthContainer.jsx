import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router";

import { signIn } from "../../redux/auth-reducer.js";
import UserAuth from "./UserAuth.jsx";

const UserAuthContainer = ({ isAuth, signIn }) => {
    if (isAuth) {
        return <Redirect to={"/"} />;
    }

    const onSubmit = (formData) => {
        signIn(formData);
    }

    return <UserAuth onSubmit={onSubmit} />;
};

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
    };
};

export default connect(mapStateToProps, { signIn })(UserAuthContainer);