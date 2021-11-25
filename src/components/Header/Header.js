import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="ui fixed menu">
      <div className="ui container center">
        <h2 className="logo name" style={{ color: "brown" }}>
          <span style={{ color: "blue" }}>D</span>emo
          <span style={{ color: "blue" }}>Sh</span>op
        </h2>
      </div>
    </div>
  );
};

export default Header;
