import React from 'react'
import { Card } from '../common/components/card/card.component'

const Product = props => (
    <div>
        <h2>Seus produtos</h2>
        <Card
            heading="hello"
            description="world"
            title="title"
            avatar="https://via.placeholder.com/300x300"
        >
            <strong>Hello World</strong>
        </Card>
        <Card
            heading="hello"
            description="world"
            title="title"
            avatar="https://via.placeholder.com/300x300"
        >
            <strong>Hello World</strong>
        </Card>
    </div>
)
export default Product
