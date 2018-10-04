import { createAction } from '../../util/redux/redux.helper'

export const OPEN_MODAL = '@@modal/OPEN_MODAL'
export const CLOSE_MODAL = '@@modal/CLOSE_MODAL'

const openModalRequest = () => createAction(OPEN_MODAL)
const closeModalRequest = () => createAction(CLOSE_MODAL)

//Não estamos usando thunk
export const openModal = dispatch => dispatch(openModalRequest())
export const closeModal = dispatch => dispatch(closeModalRequest())
