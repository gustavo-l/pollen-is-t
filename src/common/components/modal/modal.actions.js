import {
	createAction,
	createReducer,
	createAsyncTypes
} from '../../util/redux/redux.helper'

export const OPEN_MODAL = createAsyncTypes('@@modal/OPEN_MODAL')

const openModalSuccess = data => createAction(OPEN_MODAL.SUCCESS)
const openModalRequest = data => createAction(OPEN_MODAL.REQUEST)
const openModalFail = () => createAction(OPEN_MODAL.FAIL)

export const openModal = () => dispatch => {
	console.log('CHEGOU AQUI')
	dispatch(openModalRequest())
}

/*
openModal() {
    this.setState({ modalIsOpen: true })
}

afterOpenModal() {
    // references are now sync'd and can be accessed.
    this.subtitle.style.color = '#f00'
}

closeModal() {
    this.setState({ modalIsOpen: false })
}*/
