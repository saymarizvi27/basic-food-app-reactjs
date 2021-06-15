import React, { useContext } from "react";

import mealsImage from "../../assets/meals.jpg";
import classes from "./Header.Module.css";
import HeaderCardButton from "./HeaderCartButton";
import CartContext from "../../store/cart-context";

const Header = (props) => {

  return (
    <React.Fragment>
      {console.log(classes,"ayeee")}  
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCardButton onClick={props.onShowCart}/>
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="A table full of delicious food" />
      </div>
    </React.Fragment>
  );
};

export default Header;
