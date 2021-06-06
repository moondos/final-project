import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router";
import { addNewUnauthorizedReport, addNewAuthorizedReport } from "../../redux/report-reducer.js"
import Report from "./Report.jsx";

const ReportContainer = ({ isAuth, addNewUnauthorizedReport, addNewAuthorizedReport,  }) => {
    
    const onNewReportSubmit = (formData) => {
        console.log(formData)
        // isAuth ? addNewAuthorizedReport(formData) : addNewUnauthorizedReport(formData);
    }
    
    return (
        <Report
            isAuth={isAuth}
            onSubmit={onNewReportSubmit}
            // officers= {officers}
        />
    )
};

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        // officers: 
    };
};

export default connect(mapStateToProps, { addNewUnauthorizedReport, addNewAuthorizedReport })(ReportContainer);