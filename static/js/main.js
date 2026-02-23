const toggleButton = document.getElementById('theme-toggle');
const currentTheme = localStorage.getItem('theme');

/* --- Buscador en Tiempo Real --- */
document.addEventListener("DOMContentLoaded", function() {
    const searchInput = document.getElementById('search-input');
    const searchResults = document.getElementById('search-results');
    
    // PARCHE DE SEGURIDAD: Si no hay barra de búsqueda en esta página, no hacemos nada.
    if (!searchInput || !searchResults) return; 

    let posts = [];
    // ... (el resto del código fetch hacia abajo se queda igual)

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

/* --- Lógica del Botón de Copiar --- */
document.querySelectorAll('.highlight pre').forEach((codeBlock) => {
    const container = codeBlock.parentNode;
    container.style.position = 'relative'; 

    const copyButton = document.createElement('button');
    copyButton.innerText = 'Copiar';
    copyButton.style.cssText = 'position:absolute; right:10px; top:10px; padding:4px 8px; font-size:12px; background:#89b4fa; color:#11111b; border:none; border-radius:4px; cursor:pointer; font-weight:bold; opacity:0.8; transition:opacity 0.2s;';

    copyButton.onmouseover = () => copyButton.style.opacity = '1';
    copyButton.onmouseout = () => copyButton.style.opacity = '0.8';

    container.appendChild(copyButton);

    copyButton.addEventListener('click', () => {
        navigator.clipboard.writeText(codeBlock.innerText).then(() => {
            copyButton.innerText = '¡Copiado!';
            copyButton.style.background = '#a6e3a1';
            setTimeout(() => {
                copyButton.innerText = 'Copiar';
                copyButton.style.background = '#89b4fa';
            }, 2000);
        });
    });
});
