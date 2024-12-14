import React from "react";

interface ModalProps {
  titulo: string;
  children?: React.ReactNode;
}

const Modal = ({ titulo, children }: ModalProps) => {
  return (
    <div className="modal" id="exampleModal">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{titulo}</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
