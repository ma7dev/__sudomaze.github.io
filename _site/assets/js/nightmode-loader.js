const theme = localStorage.getItem('theme');
console.log(`theme: ${theme}`)

if (theme === "dark") {
    document.documentElement.setAttribute('data-theme', 'dark');
}