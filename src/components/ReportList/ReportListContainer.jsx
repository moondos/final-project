import React, {useEffect} from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router";
import { getReports } from "../../redux/report-reducer.js"
import ReportList from "./ReportList.jsx";

const ReportListContainer = ({ isAuth, reports, getReports  }) => {
    if (!isAuth) {
        return <Redirect to={"/"} />;
    }
    
    useEffect(() => {
        getReports();
        
    }, []);

    // console.log(reports)

    return (
        <ReportList
          reports={reports}
        />
        
    );

    
};

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        reports: state.reports.reports
    };
};


export default connect(mapStateToProps, { getReports })(ReportListContainer);