import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getMyGitHub } from "./actions";
import "./App.css";

const App = props => {
  console.log("APP STATE:", props);

  useEffect(() => {
    props.getMyGitHub();
  }, []);

  return (
    <div className="App">
      <h1>REACT APP:</h1>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    myData: state.myData,
    followersData: state.followersData,
    myDataError: state.myDataError,
    isFetching: state.isFetching
  };
};

export default connect(
  mapStateToProps,
  { getMyGitHub }
)(App);
