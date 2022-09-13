import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import CategoryPreview from '../../components/Category-Preview/CategoryPreview'
import './categorypreview.style.scss'
import { useSelector } from 'react-redux';
import { categorySelector, selectCategoriesIsLoading } from '../../store/category/categorySelector'
import Spinner from '../../components/Spinner/Spinner'


const CategoryPreviewPage = () => {
  const categories = useSelector(categorySelector)
  const isLoading = useSelector(selectCategoriesIsLoading)
  return (
    <>
      <Navbar />
      {isLoading ?
        <Spinner />
        :
        <div className='shop-container'>
          {Object.keys(categories).map((title) => {
            const products = categories[title]
            return <CategoryPreview key={title} title={title} products={products} />
          })}
        </div>
      }
    </>
  )
}

export default CategoryPreviewPage