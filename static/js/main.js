// --- 1. LÓGICA DEL TEMA OSCURO ---
const toggleButton = document.getElementById('theme-toggle');
const currentTheme = localStorage.getItem('theme');

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
    if(toggleButton) toggleButton.textContent = currentTheme === 'dark' ? '☀️' : '🌙';
}

if(toggleButton) {
    toggleButton.addEventListener('click', () => {
        let theme = document.documentElement.getAttribute('data-theme');
        let newTheme = theme === 'dark' ? 'light' : 'dark';
        
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        toggleButton.textContent = newTheme === 'dark' ? '☀️' : '🌙';
    });
}

// --- 2. LÓGICA DEL BOTÓN DE COPIAR ---
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

// --- 3. LÓGICA DEL BUSCADOR EN TIEMPO REAL ---
document.addEventListener("DOMContentLoaded", function() {
    const searchInput = document.getElementById('search-input');
    const searchResults = document.getElementById('search-results');
    
    // Si no hay barra de búsqueda en esta página, no hacemos nada.
    if (!searchInput || !searchResults) return; 

    let posts = [];

    // Descargamos el índice JSON
    fetch('/portafolio/index.json')
        .then(response => response.json())
        .then(data => posts = data)
        .catch(error => console.error("Error cargando el índice:", error));

    searchInput.addEventListener('input', function() {
        const query = this.value.toLowerCase();
        searchResults.innerHTML = ''; 
        
        if (query.length < 2) {
            searchResults.style.display = 'none';
            return;
        }

        const filtered = posts.filter(post => 
            (post.title && post.title.toLowerCase().includes(query)) || 
            (post.content && post.content.toLowerCase().includes(query))
        );

        if (filtered.length > 0) {
            searchResults.style.display = 'block';
            filtered.forEach(post => {
                const li = document.createElement('li');
                li.innerHTML = `<a href="${post.permalink}">${post.title}</a>`;
                searchResults.appendChild(li);
            });
        } else {
            searchResults.style.display = 'block';
            searchResults.innerHTML = '<li class="no-results">No hay resultados</li>';
        }
    });

    document.addEventListener('click', function(event) {
        if (!event.target.closest('.search-container')) {
            searchResults.style.display = 'none';
        }
    });
});
