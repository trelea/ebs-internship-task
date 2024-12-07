export const getCategories = async (): Promise<Array<string>> => {
  return await fetch('https://fakestoreapi.com/products/categories').then(
    (res) => res.json()
  );
};
