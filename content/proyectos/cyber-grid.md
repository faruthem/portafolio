---
title: "Cyber Grid 2077: Full-Stack Web Draft"
date: 2026-04-29
tags: ["Go", "UI/UX", "Backend", "Proyectos"]
summary: "Prototipo de juego cyberpunk con lógica de servidor escrita en Go y renderizado en HTML/JS."
---

## Arquitectura del Proyecto

Este proyecto demuestra un enfoque *Full-Stack*. A diferencia de los juegos estáticos, este entorno es procesado por un servidor backend escrito en **Go**, el cual maneja las peticiones HTTP, la lógica de movimiento en la cuadrícula y la IA de los enemigos, mientras que el frontend renderiza la interfaz cyberpunk.

### Interactúa con el Servidor

<div class="game-container" style="text-align: center; margin-top: 20px;">
    <iframe 
        src="https://cyber-grid-2077-full-stack-cyberpunk-ui.onrender.com/" 
        width="100%" 
        height="600px" 
        style="border: 2px solid #cba6f7; border-radius: 8px; max-width: 800px; background-color: #11111b;" 
        allowfullscreen>
    </iframe>
    <p style="font-size: 0.8em; color: #a6adc8;">Conectado en tiempo real al servidor backend en Go.</p>
</div>

---
*Nota: Al estar alojado en un servicio gratuito (Cold Start), el servidor puede tardar unos 30 segundos en "despertar" si no ha recibido visitas recientemente.*
