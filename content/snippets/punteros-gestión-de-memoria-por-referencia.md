---
title: "Structs: Tipos de Datos Complejos"
date: 2026-02-22T17:27:00.000-06:00
summary: Definición e instanciación de Structs para agrupar datos relacionados
  bajo una misma entidad.
tags:
  - Go
  - Ejercicios
  - Estructuras
---
```go
package main

import "fmt"

// 1. Definición del Struct "Atleta"
// Piensa en esto como el "molde" o la plantilla arquitectónica
type Atleta struct {
	Nombre        string
	Deporte       string
	Edad          int
	AlturaMetros  float64
	EnTratamiento bool
}

func main() {
	// 2. Instanciación: Crear una entidad usando nuestro molde directamente
	jugador1 := Atleta{
		Nombre:        "Michael",
		Deporte:       "Basketball",
		Edad:          25,
		AlturaMetros:  1.98,
		EnTratamiento: false,
	}

	// 3. Crear una instancia vacía y llenarla después usando la notación de punto (.)
	var paciente1 Atleta
	paciente1.Nombre = "David"
	paciente1.Deporte = "Atletismo"
	paciente1.Edad = 30
	paciente1.AlturaMetros = 1.75
	paciente1.EnTratamiento = true

	// 4. Mostrar la información accediendo a los campos
	fmt.Println("🏀 Perfil de Rendimiento:")
	fmt.Printf("Nombre: %s\n", jugador1.Nombre)
	fmt.Printf("Deporte: %s (Altura: %.2fm)\n", jugador1.Deporte, jugador1.AlturaMetros)
	fmt.Printf("Status Médico (En tratamiento): %t\n", jugador1.EnTratamiento)

	fmt.Println("\n🏥 Perfil Clínico:")
	fmt.Printf("Paciente: %s\n", paciente1.Nombre)
	fmt.Printf("Status Médico (En tratamiento): %t\n", paciente1.EnTratamiento)
}
