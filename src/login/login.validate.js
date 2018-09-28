const validate = values => {
    const errors = {}
    if (!values.user) errors.user = 'Digite o usuário'
    if (!values.password) errors.password = 'Digite a senha'
    return errors
}
