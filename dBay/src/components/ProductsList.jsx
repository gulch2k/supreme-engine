import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import "../styles/ProductList.css";

function ProductsList() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [sortType, setSortType] = useState("");

  useEffect(() => {
    const fetchAllProducts = async () => {
      // Fetch all products
      const response = await fetch("https://fakestoreapi.com/products");
      const productsData = await response.json();
      setProducts(productsData);

      // Extract unique categories from products
      const uniqueCategories = Array.from(
        new Set(productsData.map((product) => product.category))
      );
      setCategories(uniqueCategories.sort());
    };

    fetchAllProducts();
  }, []);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const handleSortTypeChange = (type) => {
    setSortType(type);
  };

  // Check if a category is selected. If so, filter the products to only include
// products in the selected category. If not, use all products.

  const filteredProducts = selectedCategory
    ? products.filter((product) => product.category === selectedCategory)
    : products;

// Check if a sort type is selected. If so, sort the filtered products based on
// the sort type. If "price" is selected, sort by price in ascending order. If
// "name" is selected, sort alphabetically by product title. If no sort type 
// is selected, use the filtered products as is.

  const sortedProducts = sortType
    ? [...filteredProducts].sort((a, b) => {
        if (sortType === "price") {
          return a.price - b.price;
        } else if (sortType === "name") {
          return a.title.localeCompare(b.title);
        }
        return 0;
      })
    : filteredProducts;

    // Function to handle going back to view all categories. It resets the selected
// category state to an empty string, which will cause all products to be displayed.

    const handleGoBack = () => {
      setSelectedCategory("");
    };

    

  return (
    <div className="product-list">
      <div className="categories">
        <h2>All Categories</h2>
        <div className="category-panels">
          {categories.map((category) => (
            <div className="category-panel" onClick={() => handleCategoryClick(category)} key={category}>
              {category}
            </div>
          ))}
        </div>
        <button onClick={handleGoBack}>Go Back</button>
      </div>
      <div className="sorting">
        <h2>Sort By</h2>
        <select value={sortType} onChange={(e) => handleSortTypeChange(e.target.value)}>
          <option value="">None</option>
          <option value="price">Price</option>
          <option value="name">Name</option>
        </select>
      </div>
      <div className="productsContainer">
        {sortedProducts.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
}

export default ProductsList;