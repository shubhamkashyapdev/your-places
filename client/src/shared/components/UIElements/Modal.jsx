import React, { Fragment } from "react";
import { CSSTransition } from "react-transition-group";
import ReactDOM from "react-dom";

// components //
import Backdrop from "./Backdrop";

import "../../../css/shared/UIElements/Modal.css";

const ModalOverlay = ({
  className,
  style,
  headerClass,
  header,
  onSubmit,
  contentClass,
  footerClass,
  footer,
  children,
}) => {
  const content = (
    <div className={`modal ${className}`} style={{ style }}>
      <header className={`modal__header ${headerClass}`}>
        <h2> {header} </h2>
      </header>
      <form onSubmit={onSubmit ? onSubmit : (e) => e.preventDefault()}>
        <div className={`modal__content ${contentClass}`}>{children}</div>
        <footer className={`modal__footer ${footerClass}`}>{footer}</footer>
      </form>
    </div>
  );
  return ReactDOM.createPortal(content, document.getElementById("modal-hook"));
};

export const Modal = (props) => {
  return (
    <Fragment>
      {props.show && <Backdrop onClick={props.onCancel} />}
      <CSSTransition
        in={props.show}
        mountOnEnter
        unmountOnExit
        timeout={200}
        classNames='modal'
      >
        <ModalOverlay {...props} />
      </CSSTransition>
    </Fragment>
  );
};

export default Modal;
