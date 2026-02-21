---
title: "Punteros: Gestión de Memoria por Referencia"
date: 2026-02-21T14:25:00.000-06:00
summary: Demostración de cómo modificar variables en su dirección de memoria
  original usando punteros (* y &).
tags:
  - Go
  - ejercicios
  - Memoria
---
```go
package main

import "fmt"

// 1. Paso por Valor: Recibe una copia aislada
func modificarPorValor(numero int) {
	numero = numero * 2
	fmt.Printf("Dentro de modificarPorValor: %d\n", numero)
}

// 2. Paso por Referencia: Recibe un PUNTERO (\*int)
func modificarPorReferencia(numero *int) {
	// Usamos \* para acceder al valor que vive en esa dirección de memoria y modificarlo
	*numero = *numero * 2
	fmt.Printf("Dentro de modificarPorReferencia: %d\n", *numero)
}

func main() {
	cargaBase := 50

	fmt.Println("--- ESTADO INICIAL ---")
	fmt.Printf("Valor original: %d\n", cargaBase)
	
	// El operador & nos dice en qué parte de la RAM vive la variable
	fmt.Printf("Dirección en memoria: %p\n\n", &cargaBase)

	fmt.Println("--- INTENTO 1: PASO POR VALOR ---")
	modificarPorValor(cargaBase)
	fmt.Printf("Resultado en el main: %d (El original NO cambió)\n\n", cargaBase)

	fmt.Println("--- INTENTO 2: PASO POR REFERENCIA ---")
	// Usamos & para enviar la dirección de memoria, no el número 50
	modificarPorReferencia(&cargaBase)
	fmt.Printf("Resultado en el main: %d (¡El original SÍ cambió!)\n", cargaBase)
}
```
