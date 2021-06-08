import classes from "./Card.Module.css";
import React from "react";


const Cards = (props) => {
    return (
        <div className={classes.card}>{props.children}</div>
    );
};

export default Cards;