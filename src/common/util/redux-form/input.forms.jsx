import React from 'react'
import { Input } from '../../components/input/input.component'

export const RenderInput = ({ input, label, type, large, meta }) => (
    <div>
        <Input
            {...input}
            fullwidth
            inform
            type={type}
            large={large}
            placeholder={label}
            error={meta.touched && meta.error ? meta.error : undefined}
        />
    </div>
)
