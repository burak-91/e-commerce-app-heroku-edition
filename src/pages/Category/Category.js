import { useState, useEffect, Fragment } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { categorySelector } from '../../store/category/categorySelector'
import Shop from '../../components/Shop/Shop';
import Navbar from '../../components/Navbar/Navbar'
import { CategoryContainer, Title } from './category.style.js';
import { selectCategoriesIsLoading } from '../../store/category/categorySelector';
import Spinner from '../../components/Spinner/Spinner'



const Category = () => {
  const { category } = useParams();
  const categories = useSelector(categorySelector)
  const isLoading = useSelector(selectCategoriesIsLoading);
  const [products, setProducts] = useState(categories[category]);

  useEffect(() => {
    setProducts(categories[category]);
  }, [category, categories]);

  return (
    <Fragment>
      <Navbar />
      <Title>{category.toUpperCase()}</Title>
      {isLoading ?
        <Spinner />
        :
        <CategoryContainer>
          {products &&
            products.map((product) => (
              <Shop key={product.id} product={product} />
            ))}
        </CategoryContainer>
      }

    </Fragment>
  );
};

export default Category;