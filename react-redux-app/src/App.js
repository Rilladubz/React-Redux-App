import React, { useEffect } from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import { getMyGitHub } from "./actions";
import "./App.css";

//Components
import Header from "./Components/Header/Header";
import MyCard from "./Components/UserCards/MyCard";
import FollowersCardList from "./Components/UserCards/FollowersCardList";

//Contexts
import { MyCardContext, FollowersContext } from "./Contexts";

const App = props => {
  console.log("APP STATE:", props);
  const { myData, followersData } = props;

  useEffect(() => {
    props.getMyGitHub();
  }, []);

  return (
    <div className="App">
      <MyCardContext.Provider value={{ myData }}>
        <FollowersContext.Provider value={{ followersData }}>
          <Route exact path="/" component={Header} />
          <Route path="/" component={MyCard} />
          <Route path="/" component={FollowersCardList} />
        </FollowersContext.Provider>
      </MyCardContext.Provider>
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
