import React, { useState, useEffect } from "react";
import { ThemeContext, themes } from "../contexts/themeContext";

const ThemeContextWrapper = (props: any) => {
  const [theme, setTheme] = useState(themes.light);

  const changeTheme = () => {
    setTheme(theme);
  };

  useEffect(() => {
    switch (theme) {
      case themes.dark:
        document.body.classList.add("dark-content");
        break;
      case themes.light:
        document.body.classList.remove("dark-content");
        break;
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme: theme, changeTheme: changeTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextWrapper;
