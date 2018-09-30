import React from 'react'
import { Input } from '../../components/input/input.component'

export const RenderInput = ({ input, label, type, small, large, meta }) => (
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
