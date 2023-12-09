import React from "react";

const Modal = ({
  id,
  children,
  className,
  onClose,
}: {
  id: string;
  children: React.ReactNode;
  className?: string;
  onClose?: () => void;
}) => {
  return (
    <dialog id={id} className="modal bg-black/60">
      <div className={`modal-box scrollbar ${className}`}>
        {children}
        <div className="modal-action">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn" onClick={onClose}>
              Close
            </button>
          </form>
        </div>
      </div>
    </dialog>
  );
};

export default Modal;
