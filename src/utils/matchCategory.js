const matchCategory = (categories, postCategoryId) => {
  const category = categories.find(category => category.id === postCategoryId)
  return category.name;
}

export default matchCategory;