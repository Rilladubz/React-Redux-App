import React, { useContext } from "react";
import FollowerCard from "./FollowersCard";

//Contexts
import { FollowersContext } from "../../Contexts/index";

const FollowersCardList = () => {
  const { followersData } = useContext(FollowersContext);
  console.log("FOLLOWERSLIST:", followersData);
  return (
    <div>
      {followersData.map(item => (
        <FollowerCard key={item.id} data={item} />
      ))}
    </div>
  );
};

export default FollowersCardList;
