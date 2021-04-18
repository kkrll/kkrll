import React from "react";
import MenuItem from "./MenuItem";

const Header = () => {
  return (
    <header>
      <div>
        <p>kkrll</p>
      </div>
      <div>
        <MenuItem pageName="about me" address="/" />
        <MenuItem pageName="posts" address="/posts" />
        <MenuItem pageName="reading list" address="/list" />
      </div>
    </header>
  );
};

export default Header;
