import React , {Fragment} from "react";
import ReactDOM from 'react-dom';
import classes from "./Modal.Module.css";

const Backdrop = (props) => {
    return <div className={classes.backdrop} onClick={props.onhideCart}></div>
};
const ModalOverlay = props => {
    return (<div className={classes.modal}>
        <div className={classes.content}>
            {props.children}
        </div>
    </div>)
};
const portalElement = document.getElementById('overlay');

const Modal = (props) => {
    return (
        /*Create Portal */
        <Fragment>
            {ReactDOM.createPortal(<Backdrop onhideCart={props.onhideCart}/> , portalElement)}
            {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)}
        </Fragment>)
};

export default Modal;