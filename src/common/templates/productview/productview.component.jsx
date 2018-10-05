import React from 'react'
import { Card } from '../../components/card/card.component'

import './productview.styles.scss'
import { Button } from '../../components/button/button.component'

const ProductView = ({ data, onUpdate }) => (
    <div className="product-item">
        <Card
            heading={data.code}
            head={
                <div>
                    <Button
                        name={data._id}
                        inform
                        small
                        fullwidth
                        onClick={({ target: { name } }) => onUpdate(name)}
                    >
                        Editar
                    </Button>
                </div>
            }
            description={data.description}
            title={data.name}
            avatar="https://via.placeholder.com/300x300"
        >
            {data.prices.map((price, index) => (
                <div key={index}>
                    <b>{`R$ ${price.value}, Tamanho ${price.size}\n`}</b>
                </div>
            ))}
        </Card>
    </div>
)
export default ProductView
