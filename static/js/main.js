const toggleButton = document.getElementById('theme-toggle');
const currentTheme = localStorage.getItem('theme');

// Aplicar tema guardado al cargar
if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
    toggleButton.textContent = currentTheme === 'dark' ? '☀️' : '🌙';
}

toggleButton.addEventListener('click', () => {
    let theme = document.documentElement.getAttribute('data-theme');
    let newTheme = theme === 'dark' ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    toggleButton.textContent = newTheme === 'dark' ? '☀️' : '🌙';
});
