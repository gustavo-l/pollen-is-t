import React from 'react'
import { CheckBox } from '../../components/togglable/checkbox.component'
import { Field } from 'redux-form'

import { RenderCheckBox } from '../../util/redux-form/checkbox.forms'

import './userview.styles.scss'

export const UserView = ({ avatar, active, data }) => (
    <div className="userview-container">
        <div className="userview-checkbox">
            <CheckBox name={data._id} label="" />
        </div>
        <img
            src={avatar}
            alt="Avatar"
            className="userview-avatar"
            draggable={false}
        />
        <div className="userview-data">
            <strong>{data._id}</strong>
            <strong>{data.email}</strong>
            <strong>{data.user}</strong>
        </div>
        <div className={active ? 'userview-active' : 'userview-inactive'}>
            <strong>{active ? 'ATIVO' : 'INATIVO'}</strong>
        </div>
    </div>
)
