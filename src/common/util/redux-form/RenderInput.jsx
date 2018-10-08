import React from 'react'
import Input from '../../components/Forms/Input'
import InvalidFormText from '../../components/Forms/InvalidFormText'

export const RenderInput = ({ input, meta, ...rest }) => (
    <div>
        <Input {...input} {...rest} invalid={meta.error && meta.touched} />
        <InvalidFormText
            message={meta.error && meta.touched ? meta.error : undefined}
        />
    </div>
)
