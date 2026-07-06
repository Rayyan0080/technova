import React, { useState, useMemo } from "react";
import { products, categories, brands } from "../../data/products";
import ProductCard from "../../components/ProductCard/ProductCard";
import "./Products.css";

const Products = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("recommended");

  const filteredProducts = useMemo(() => {
    return products
      .filter((product) => {
        const matchSearch = product.name
          .toLowerCase()
          .includes(searchTerm.toLowerCase());
        const matchCategory =
          selectedCategory === "All" || product.category === selectedCategory;
        return matchSearch && matchCategory;
      })
      .sort((a, b) => {
        if (sortBy === "price-low") return a.price - b.price;
        if (sortBy === "price-high") return b.price - a.price;
        return 0;
      });
  }, [searchTerm, selectedCategory, sortBy]);

  return (
    <div className="container page-container products-page">
      <aside className="sidebar">
        <div className="filter-group">
          <label>Search</label>
          <input
            type="text"
            placeholder="Search..."
            className="form-control"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="filter-group">
          <label>Category</label>
          <select
            className="form-control"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>
      </aside>
      <main className="product-results">
        <div className="results-header">
          <h2>Showing {filteredProducts.length} results</h2>
          <select
            className="form-control sort-select"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="recommended">Recommended</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
          </select>
        </div>
        <div className="grid">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Products;
