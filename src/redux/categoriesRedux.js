
//selectors
export const getAllCategories = state => state.categories;
export const getCategoryId = ({ categories }, categoryId) => categories.find(category => category.id === categoryId)

const categoriesReducer = (statePart = []) => {
  return statePart;
};

export default categoriesReducer;