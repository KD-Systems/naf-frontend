import React from "react";
import "react-responsive-modal/styles.css";
import { Modal as PModal } from "react-responsive-modal";

const Modal = (props) => {
  const closeIcon = (
    <span className="svg-icon svg-icon-primary svg-icon-2x mt-7">
      <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
        <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
          <g
            transform="translate(12.000000, 12.000000) rotate(-45.000000) translate(-12.000000, -12.000000) translate(4.000000, 4.000000)"
            fill="#000000"
          >
            <rect x="0" y="7" width="16" height="2" rx="1" />
            <rect
              opacity="0.3"
              transform="translate(8.000000, 8.000000) rotate(-270.000000) translate(-8.000000, -8.000000) "
              x="0"
              y="7"
              width="16"
              height="2"
              rx="1"
            />
          </g>
        </g>
      </svg>
    </span>
  );

  let options = { ...{ open: false, title: 'Modal heading here', body: '' }, ...props }

  return (
    <div>
      <PModal
        open={options.open}
        onClose={options.onCloseModal}
        closeIcon={closeIcon}
      >
        <div className="card card-custom gutter-b">
          <div className="card-header">
            <div className="card-title">
              <h3 className="card-label">{options.title}</h3>
            </div>
          </div>
          <div className="card-body">{options.body}</div>
        </div>
      </PModal>
    </div>
  );
};

export default Modal;
