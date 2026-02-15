---
title: "Estructuras de Datos: Maps (Diccionarios)"
date: 2026-02-15T12:31:00.000-06:00
summary: Creación de un glosario interactivo para aprender a usar Maps, el
  modismo 'comma ok', y la lectura de cadenas con espacios.
tags:
  - Go
  - Ejercicios
  - Estructuras
---
```go
package main

import (
	"bufio"
	"fmt"
	"os"
	"strings"
)

func main() {
	// 1. Declaración e inicialización de un Map
	// La llave es un string, el valor es un string
	glosario := map\[string]string{
		"api":   "Interfaz de Programación de Aplicaciones que permite a dos sistemas comunicarse.",
		"linux": "El núcleo de sistema operativo libre y de código abierto.",
		"go":    "Lenguaje compilado, concurrente y de tipado estático creado por Google.",
		"kde":   "Un entorno de escritorio moderno y personalizable (¡el mejor!).",
		"rust":  "Lenguaje de sistemas enfocado en la seguridad de memoria.",
	}

	// 2. Usamos bufio.NewReader para leer texto con espacios desde la consola
	lector := bufio.NewReader(os.Stdin)

	fmt.Println("📚 Bienvenido al Glosario Tech")
	fmt.Println("Escribe un término para buscar su definición (o 'salir' para terminar).")

	for {
		fmt.Print("\nBuscar término: ")
		
		// Leemos hasta que el usuario presione Enter ('\n')
		entrada, _ := lector.ReadString('\n')
		
		// Limpiamos los espacios en blanco y saltos de línea, y pasamos a minúsculas
		termino := strings.TrimSpace(strings.ToLower(entrada))

		if termino == "salir" {
			fmt.Println("¡Hasta luego!")
			break
		}

		if termino == "" {
			continue
		}

		// 3. El modismo "Comma OK" (El superpoder de Go)
		// Go devuelve dos valores al buscar en un map: el valor, y un booleano si existe.
		definicion, existe := glosario\[termino]

		if existe {
			fmt.Printf("✅ %s: %s\n", strings.ToUpper(termino), definicion)
		} else {
			fmt.Printf("❌ El término '%s' no está en el glosario.\n", termino)
		}
	}
}
