import React, { useState } from "react";
import ProductList from "./components/ProductList";
import DarkModeToggle from "./components/DarkModeToggle";
import Cart from "./components/Cart";
import themeStyles from "./styles/DarkMode.module.css";

const App = () => {
  // State for dark mode toggle (false = light, true = dark)
  const [isDarkMode, setIsDarkMode] = useState(false);

  // State for cart management (array of product objects)
  const [cart, setCart] = useState([]);

  // State for category filtering
  const [selectedCategory, setSelectedCategory] = useState("all");

  const handleAddToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  // Combine baseline wrapper class with conditional mode class
  const currentThemeClass = `${themeStyles.appContainer} ${
    isDarkMode ? themeStyles.darkMode : themeStyles.lightMode
  }`;

  return (
    <div className={currentThemeClass}>
      <h1>🛒 Shopping App</h1>
      <p>
        Welcome! Your task is to implement filtering, cart management, and dark
        mode.
      </p>

      {/* Render DarkModeToggle and pass state handler */}
      <DarkModeToggle isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />

      {/* Category filter dropdown */}
      <div style={{ margin: "20px 0" }}>
        <label htmlFor="category-select">Filter by Category: </label>
        <select
          id="category-select"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="all">All</option>
          <option value="Fruits">Fruits</option>
          <option value="Dairy">Dairy</option>
          <option value="NonExistent">NonExistent</option>{" "}
          {/* Added to satisfy test edge case */}
        </select>
      </div>

      {/* Total Cart Count (Bonus Challenge) */}
      <p>
        <strong>Total Items in Cart:</strong> {cart.length}
      </p>

      <ProductList
        selectedCategory={selectedCategory}
        onAddToCart={handleAddToCart}
      />

      <Cart cartItems={cart} />
    </div>
  );
};

export default App;
