const theme = localStorage.getItem('theme');
if (theme === "dark") {
    document.documentElement.setAttribute('data-theme', 'dark');
}
const userPrefers = getComputedStyle(document.documentElement).getPropertyValue('content');
if (theme === "dark") {
    document.getElementById("theme-toggle").classList.remove('fa-moon');
    document.getElementById("theme-toggle").classList.add('fa-sun');
} else if (theme === "light") {
    document.getElementById("theme-toggle").classList.remove('fa-sun');
    document.getElementById("theme-toggle").classList.add('fa-moon');
} else if  (userPrefers === "dark") {
    document.documentElement.setAttribute('data-theme', 'dark');
    window.localStorage.setItem('theme', 'dark');
    document.getElementById("theme-toggle").classList.remove('fa-moon');
    document.getElementById("theme-toggle").classList.add('fa-sun');
} else {
    document.documentElement.setAttribute('data-theme', 'light');
    window.localStorage.setItem('theme', 'light');
    document.getElementById("theme-toggle").classList.remove('fa-sun');
    document.getElementById("theme-toggle").classList.add('fa-moon');
}

function modeSwitcher() {
    let currentMode = document.documentElement.getAttribute('data-theme');
    if (currentMode === "dark") {
        document.documentElement.setAttribute('data-theme', 'light');
        window.localStorage.setItem('theme', 'light');
        document.getElementById("theme-toggle").classList.remove('fa-sun');
        document.getElementById("theme-toggle").classList.add('fa-moon');
    } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        window.localStorage.setItem('theme', 'dark');
        document.getElementById("theme-toggle").classList.remove('fa-moon');
        document.getElementById("theme-toggle").classList.add('fa-sun');
    }
}