import React from "react";

import "./Header.css";

//images
import lambdalogo from "../../assets/lambdalogo.png";
import githublogo from "../../assets/githublogo.png";

const Header = () => {
  return (
    <div className="header">
      <div className="lambda">
        <img src={lambdalogo} alt="Lambda Logo" />
      </div>
      <span className="emoji" role="img" aria-label="heart emoji">
        ❤️'s
      </span>
      <div className="git">
        <img src={githublogo} alt="GitHub Logo" />
      </div>
    </div>
  );
};

export default Header;
