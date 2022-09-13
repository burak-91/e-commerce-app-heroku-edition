import { createSelector } from 'reselect';

const selectCategoryReducer = (state) => state.category


export const selectCategories = createSelector(
  [selectCategoryReducer],
  (categoriesSlice) => { 
        return categoriesSlice.categories
});

export const selectCategoriesIsLoading = createSelector(
  [selectCategoryReducer],
  (categoriesSlice) =>{
    return categoriesSlice.isLoading
  }
)


export const categorySelector  = createSelector(
  [selectCategories],
  (categories) =>{
      return  categories.reduce((acc, category) => {
      const { title, items } = category;
      acc[title.toLowerCase()] = items;
      return acc;
    }, {})}
);









