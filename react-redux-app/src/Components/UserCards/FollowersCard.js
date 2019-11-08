import React from "react";

const FollowerCard = props => {
  const user = props.data;
  console.log("IN CARD", user);
  return (
    <div className="userCard">
      <div className="imgContainer">
        <img
          className="img"
          src={user.avatar_url}
          alt={`${user.login}/s photo`}
        />
      </div>
      <div className="userInfo">
        <h1>{user.login}</h1>
        <p>
          Profile:<a href={user.html_url}>{user.html_url}</a>
        </p>
      </div>
    </div>
  );
};

export default FollowerCard;
