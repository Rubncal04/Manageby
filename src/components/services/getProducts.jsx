export default async function getProducts() {
  const apiUrl = 'http://127.0.0.1:8080/api/v1/products';

  return await fetch(apiUrl)
    .then((res) => res.json())
    .then((data) => {
      return data;
    });
}
