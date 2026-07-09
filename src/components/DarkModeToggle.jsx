import React from "react";

const DarkModeToggle = ({ isDarkMode, setIsDarkMode }) => {
  // TODO: Implement dark mode toggle logic

  return (
    <button onClick={() => setIsDarkMode(!isDarkMode)}>
      Toggle to {isDarkMode ? "Light" : "Dark"} Mode{" "}
    </button>
  );
};

export default DarkModeToggle;
