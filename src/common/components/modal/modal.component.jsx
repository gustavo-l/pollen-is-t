import React from 'react'
import ReactDOM from 'react-dom'
import Modal from 'react-modal'
import { connectModal } from 'redux-modal'

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
}

Modal.setAppElement('#root')

const ModalCustom = ({ Component, handleHide, show, children }) => (
    <div>
        <Modal
            isOpen={show}
            onRequestClose={handleHide}
            style={customStyles}
            contentLabel="Example Modal"
        >
            {children}
        </Modal>
    </div>
)

export default class WrappedModal extends React.PureComponent {
    render() {
        const { name, children } = this.props
        const Wrap = connectModal({ name })(ModalCustom)
        return <Wrap>{children}</Wrap>
    }
}
