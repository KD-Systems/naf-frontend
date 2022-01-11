import React from "react";
import "react-responsive-modal/styles.css";
import { Modal as PModal } from "react-responsive-modal";

const Modal = (props) => {

    
  return (
    <div>
      <PModal
        open={props?.open}
        onClose={props?.onCloseModal}
        closeIcon={props?.closeIcon}
      >
        <div className="card card-custom gutter-b">
          <div className="card-header">
            <div className="card-title">
              <h3 className="card-label">{props.title}</h3>
            </div>
          </div>
          <div className="card-body">{props.body}</div>
        </div>
      </PModal>
    </div>
  );
};

export default Modal;
