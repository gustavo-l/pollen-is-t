import React from 'react'
import { CheckBox } from '../../components/togglable/checkbox.component'
import { Field } from 'redux-form'

import { RenderCheckBox } from '../../util/redux-form/checkbox.forms'

import './userview.styles.scss'

export const UserView = ({ avatar, active, data }) => (
	<div className="userview-container">
		<div className="userview-checkbox flexitem-1">
			<CheckBox name={data._id} label="" />
		</div>
		<div className="flexitem-1 userview-avatar">
			<img src={avatar} alt="Avatar" draggable={false} />
		</div>
		<div className="userview-data flexitem-1">
			<span>{data.email}</span>
			<span>{data.user}</span>
		</div>
		<div
			className={
				active ? 'userview-active flexitem-1' : 'userview-inactive flexitem-1'
			}
		>
			<span>{active ? 'ATIVO' : 'INATIVO'}</span>
		</div>
	</div>
)
