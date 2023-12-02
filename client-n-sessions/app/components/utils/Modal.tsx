import React from "react";

const Modal = ({ id, children }: { id: string; children: React.ReactNode }) => {
  return (
    <dialog id={id} className="modal">
      <div className="modal-box scrollbar">
        {children}
        <div className="modal-action">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn">Close</button>
          </form>
        </div>
      </div>
    </dialog>
  );
};

export default Modal;
