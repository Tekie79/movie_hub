import React from "react";
import "./Header.css";
import MovieFilterOutlinedIcon from "@material-ui/icons/MovieFilterOutlined";

const Header = () => {
  return (
    <span className="header" onClick={() => window.scroll(0, 0)}>
      Movie Hub
      <MovieFilterOutlinedIcon fontSize="large" />
    </span>
  );
};

export default Header;
