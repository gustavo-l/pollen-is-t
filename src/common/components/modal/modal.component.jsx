import React from 'react'
import ReactDOM from 'react-dom'
import { connectModal } from 'redux-modal'
import Loadable from 'react-loadable'
import { Loading } from '../../../main/main.routes'

import Modal from 'react-modal'

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
const ModalCustom = ({ handleHide, show, children, ...rest }) => (
    <div>
        <Modal
            isOpen={show}
            onRequestClose={handleHide}
            style={customStyles}
            contentLabel="Example Modal"
        >
            {React.cloneElement(children, { ...rest })}
        </Modal>
    </div>
)

export default class WrappedModal extends React.PureComponent {
    render() {
        const { name, children, ...rest } = this.props
        const childrenWithProps = React.cloneElement(children, { ...rest })
        const Wrap = connectModal({ name })(ModalCustom)
        return <Wrap>{childrenWithProps}</Wrap>
    }
}
