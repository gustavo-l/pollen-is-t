import React from 'react'
import { CheckBox } from '../../components/togglable/checkbox.component'
export const UserView = ({ avatar, active, data }) => (
    <div className="userview-container">
        <CheckBox label="" />
        <img src={avatar} alt="Avatar" className="avatar" draggable={false} />
        <div>
            {Object.values(data).map(data => (
                <strong key={data}>{data}</strong>
            ))}
        </div>
        <div>{active ? 'ATIVO' : 'INATIVO'}</div>
    </div>
)
