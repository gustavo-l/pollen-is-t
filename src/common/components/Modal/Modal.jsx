import React from 'react'

const Modal = ({ title, body, footer, id, noClickOutside }) => (
    <div
        className="modal fade"
        tabIndex="-1"
        role="dialog"
        id={id}
        data-backdrop={noClickOutside ? 'static' : true}
    >
        <div className="modal-dialog" role="document">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title">{title}</h5>
                    <button
                        type="button"
                        className="close"
                        data-dismiss="modal"
                        aria-label="Close"
                    >
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">{body}</div>
                <div className="modal-footer">{footer}</div>
            </div>
        </div>
    </div>
)

export default Modal
