export const getExampleUrl = (category, subCategory, template) => {
  return `/templates/${category.id}/${subCategory.id}/${template.filename}`;
};