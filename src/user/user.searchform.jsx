import React from 'react'
import { Button } from '../common/components/button/button.component'
import { Input } from '../common/components/input/input.component'

const UserForm = ({ pending, handleOpen }) => (
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

export default UserForm
