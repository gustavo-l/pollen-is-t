import React from 'react'
import { CheckBox } from '../../components/input/input.component'

/**
 *
 *
 * @param {*} { input, label }
 * @description propriedades injetadas do <Field {...}/>
 *
 * @returns {React.Component<CheckBox>}
 *
 * ?CheckBox: Componente próprio da pollen, uma checkbox
 */

export const RenderCheckBox = ({ input, label }) => (
    <CheckBox {...input} label={label} />
)
