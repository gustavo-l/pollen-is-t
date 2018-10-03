import { OPEN_MODAL } from './modal.actions'
const initialState = {
	open: false
}

export const modal = (state = initialState, action) => {
	console.log(action)
	switch (action.type) {
		case OPEN_MODAL.REQUEST: {
			return {
				...state,
				open: true
			}
		}
		default:
			return state
	}
}
