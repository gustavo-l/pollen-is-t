import React from 'react'
import { Button } from '../common/components/button/button.component'
import { Input } from '../common/components/input/input.component'
import { show } from 'redux-modal'
import { connect } from 'react-redux'

let UserForm = ({ pending, handleOpen }) => (
    <div>
        <div className="headline-user">
            <h2 className="headline">Gerencie seus usuários</h2>
            <Button
                className="action-button"
                fullwidth
                disabled={pending}
                onClick={handleOpen('userCreate')}
            >
                Incluir
            </Button>
        </div>
        <div className="search-user">
            <Input fullwidth placeholder="Pesquisar" />
        </div>
    </div>
)

UserForm = connect(
    null,
    dispatch => ({ handleOpen: name => () => dispatch(show(name)) })
)(UserForm)

export default UserForm
