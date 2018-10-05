import React from 'react'

export const Loading = ({ isLoading, error }) => {
    // Handle the loading state
    if (isLoading) {
        return (
            <div>
                <h1>carregando</h1>
            </div>
        )
    }
    // Handle the error state
    else if (error) {
        console.log(error)
        return <div>Houve um problema ao carregar a página.</div>
    } else {
        return null
    }
}
