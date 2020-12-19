import React from "react";
import "./Header.css";
import PersonIcon from "@material-ui/icons/Person";
import QuestionAnswerIcon from "@material-ui/icons/QuestionAnswer";
import IconButton from "@material-ui/core/IconButton";
import logo from "./images/tinder-logo.png";

function Header() {
  return (
    <div className="header">
      <IconButton>
        <PersonIcon className="header__icon" fontSize="large" />
      </IconButton>
      <IconButton>
        <img className="header__logo" src={logo} alt="tinder logo" />
      </IconButton>
      <IconButton>
        <QuestionAnswerIcon className="header__icon" fontSize="large" />
      </IconButton>
    </div>
  );
}

export default Header;
