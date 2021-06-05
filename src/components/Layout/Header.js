import React from "react";

import mealsImage from "../../assets/meals.jpg";
import classes from "./Header.Module.css";
import HeaderCardButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <React.Fragment>
      {console.log(classes,"ayeee")}  
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCardButton/>
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="A table full of delicious food" />
      </div>
    </React.Fragment>
  );
};

export default Header;
