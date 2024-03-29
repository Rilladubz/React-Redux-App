import React, { useContext } from "react";
import { MyCardContext } from "../../Contexts";
import "./myCard.css";

const MyCard = () => {
  const { myData } = useContext(MyCardContext);
  console.log("MY CARD DATA:", myData);
  return (
    <div className="userCard">
      <div className="imgContainer">
        <img className="img" src={myData.avatar_url} />
      </div>
      <div className="userInfo">
        <h1>{myData.name}</h1>
        <h3>{myData.login}</h3>
        <p>
          Profile:
          <a className="tag" href={myData.html_url}>
            {myData.html_url}
          </a>
        </p>
        <p>Followers: {myData.followers}</p>
        <p>Following: {myData.following}</p>
      </div>
    </div>
  );
};

export default MyCard;
