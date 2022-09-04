enum ThemeList {
  "light" = "light",
  "dark" = "dark",
}

function setTheme(theme: ThemeList) {
  window.localStorage.setItem("theme", theme);
}

export { setTheme, ThemeList };
