import React from 'react'
import { Input } from '../../components/input/input.component'

/**
 *
 *
 * @param {*} { input, label, type, small, large, meta }
 * @description propriedades injetadas do <Field {...}/>
 *
 * @returns {React.Component<Input>}
 *
 * ?Input: Componente próprio da pollen, a caixa de texto
 */
export const RenderInput = ({
    input,
    label,
    type,
    small,
    large,
    meta,
    defaultValue
}) => (
    <div>
        <Input
            {...input}
            fullwidth
            inform
            type={type}
            large={large}
            small={small}
            placeholder={label}
            error={meta.touched && meta.error ? meta.error : undefined}
        />
    </div>
)
