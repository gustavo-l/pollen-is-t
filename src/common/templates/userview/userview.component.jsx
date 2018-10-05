import React from 'react'

import { Button } from '../../components/button/button.component'
import './userview.styles.scss'

const UserView = ({ avatar, active, data, onDisable, onUpdate }) => (
    <div className="userview-container">
        {/* <div className="userview-checkbox flexitem-1">
            <CheckBox
                name={data._id}
                label="Selecionar"
                checked={checked}
                onChange={({ target: { name } }) => onChangeHandler(name)}
            />
        </div> */}
        <div className=" userview-avatar">
            <img src={avatar} alt="Avatar" draggable={false} />
        </div>
        <div className="userview-data flexitem-3">
            <strong>{data.user ? data.user : '-'}</strong>
            <span>{data.email}</span>
        </div>
        <div
            className={
                active
                    ? 'userview-active flexitem-2'
                    : 'userview-inactive flexitem-2'
            }
        >
            <span>{active ? 'ATIVO' : 'INATIVO'}</span>
        </div>
        <div className="userview-actions flexitem-1">
            <Button
                name={data._id}
                small
                inform
                fullwidth
                onClick={({ target: { name } }) => onUpdate(name)}
            >
                Editar
            </Button>
            <Button
                name={data._id}
                small
                inform
                fullwidth
                onClick={({ target: { name } }) => onDisable(name)}
            >
                {active ? 'Desativar' : 'Ativar'}
            </Button>
        </div>
    </div>
)
export default UserView
