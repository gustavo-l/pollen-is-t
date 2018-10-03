import React from 'react'
import ReactDOM from 'react-dom'
import Modal from 'react-modal'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'

import { openModal } from './modal.actions'

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

class ModalCustom extends React.PureComponent {
	render() {
		const { open, openModal } = this.props
		return (
			<div>
				<button onClick={openModal}>Open Modal</button>
				<Modal
					isOpen={open}
					//onAfterOpen={this.afterOpenModal}
					//onRequestClose={this.closeModal}
					style={customStyles}
					contentLabel="Example Modal"
				>
					<h2 ref={subtitle => (this.subtitle = subtitle)}>Hello</h2>
					<div>I am a modal</div>
					<form>
						<input />
						<h2>I am a modal</h2>
					</form>
				</Modal>
			</div>
		)
	}
}

const mapStateToProps = state => ({
	open: state.modal.open
})

const mapDispatchToProps = dispatch => ({
	//loadUsers: ({ size, page }) => loadUsers({ size, page })(dispatch),
	//setSelectedUser: data => dispatch(setSelectedUser(data))
	openModal: () => openModal()(dispatch)
	//afterOpenModal: () => afterOpenModal()(dispatch),
	//closeModal: () => closeModal()(dispatch)
})

export default withRouter(
	connect(
		mapStateToProps,
		mapDispatchToProps
	)(ModalCustom)
)
