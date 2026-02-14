---
title: Arrays vs Slices
date: 2026-02-13T23:08:00.000-06:00
summary: Creando una lista de compras dinámica para entender la diferencia entre
  Arrays de tamaño fijo y Slices dinámicos usando append y range.
tags:
  - Go
  - Ejercicios
  - Estructuras
---
```go
package main

import (
	"fmt"
	"strings"
)

func main() {
	// 1. ARRAY: Tamaño fijo \[3]. No puede crecer ni encogerse.
	var esenciales \[3]string = \[3]string{"Agua", "Arroz", "Frijoles"}

	// 2. SLICE: Tamaño dinámico \[]. Comienza vacío.
	var miLista \[]string

	fmt.Println("🛒 Bienvenido al creador de Listas de Compras")
	fmt.Println("----------------------------------------------")

	// Bucle interactivo para llenar el Slice
	for {
		var articulo string
		fmt.Print("Agrega un artículo (o escribe 'fin' para terminar): ")
		fmt.Scanln(&articulo)

		// Convertimos a minúsculas para evaluar más fácil
		articulo = strings.ToLower(articulo)

		if articulo == "fin" {
			break // Salimos del bucle
		}

		if articulo != "" {
			// Así se agrega un elemento a un Slice en Go
			miLista = append(miLista, articulo)
		}
	}

	// --- MOSTRANDO LOS RESULTADOS ---

	fmt.Println("\n📝 Tu lista final:")
	fmt.Println("--- Artículos Esenciales (Array) ---")
	
	// Uso de 'range' para recorrer colecciones de forma limpia
	for indice, valor := range esenciales {
		fmt.Printf("%d. %s\n", indice+1, valor)
	}

	fmt.Println("\n--- Artículos Extra (Slice) ---")
	if len(miLista) == 0 {
		fmt.Println("No agregaste artículos extra.")
	} else {
		for i, v := range miLista {
			fmt.Printf("%d. %s\n", i+1, v)
		}
	}
	
	// Mostrar el tamaño en memoria del Slice
	fmt.Printf("\nEstadísticas: Llevas %d artículos extra.\n", len(miLista))
}
