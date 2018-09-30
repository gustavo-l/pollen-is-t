import React from 'react'
import { CheckBox } from '../../components/togglable/checkbox.component'
import { Field } from 'redux-form'

import { RenderCheckBox } from '../../util/redux-form/checkbox.forms'

import './userview.styles.scss'

export const UserView = ({ avatar, active, data }) => (
    <div className="userview-container">
        <div className="userview-checkbox">
            <Field name={data._id} component={RenderCheckBox} />
        </div>
        <img
            src={avatar}
            alt="Avatar"
            className="userview-avatar"
            draggable={false}
        />
        <div className="userview-data">
            {Object.values(data).map(data => (
                <strong key={data}>{data}</strong>
            ))}
        </div>
        <div className={active ? 'userview-active' : 'userview-inactive'}>
            <strong>{active ? 'ATIVO' : 'INATIVO'}</strong>
        </div>
    </div>
)
