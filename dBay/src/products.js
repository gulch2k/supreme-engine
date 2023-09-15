
export async function fetchAllProducts() {
    const response = await fetch("https://fakestoreapi.com/products");
    const productsData = await response.json();
    return productsData;
  }
  
  export async function fetchUniqueCategories() {
    const response = await fetch("https://fakestoreapi.com/products");
    const productsData = await response.json();
    const uniqueCategories = Array.from(
      new Set(productsData.map((product) => product.category))
    );
    return uniqueCategories.sort();
  }