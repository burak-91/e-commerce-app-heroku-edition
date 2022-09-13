import React from 'react'
import {CategoryPreviewContainer,Title, Preview} from './categoryPreview.style.js'
import Shop from '../Shop/Shop'


const CategoryPreview = ({title,products}) => {
  return (
    <CategoryPreviewContainer>
        <h2>
            <Title to={title}>{title.toUpperCase()}</Title>
        </h2>
        <Preview>
            {products
            .filter((_,index) => index < 4)
            .map(product => (
                <Shop key={product.id} product={product}/>
            ))}
        </Preview>
    </CategoryPreviewContainer>
  )
}

export default CategoryPreview