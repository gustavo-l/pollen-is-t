const validate = values => {
    const errors = {}
    if (!values.user) errors.user = 'Digite o usuário'
    if (!values.firstname) errors.firstname = 'Digite o nome'
    if (!values.lastname) errors.lastname = 'Digite o sobrenome'
    if (!values.password) errors.password = 'Digite a senha'
    if (!values.email) errors.email = 'Digite o email'
    if (!values.confirmPassword) errors.confirmPassword = 'Confirme a senha'
    if (values.confirmPassword !== values.password)
        errors.confirmPassword = 'Senhas não batem'
    if (
        !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(
            values.email
        )
    )
        errors.email = 'Digite um email valido'
    return errors
}
