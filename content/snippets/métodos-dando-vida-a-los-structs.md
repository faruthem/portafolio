---
title: "Métodos: Dando Vida a los Structs"
date: 2026-02-22T20:10:00.000-06:00
summary: Creación de métodos asociados a un Struct. Diferencia entre métodos de
  valor y métodos de puntero para modificar estados.
tags:
  - Go
  - Ejercicios
  - Estructuras
  - POO
---
```go
package main

import "fmt"

// 1. Definimos nuestro Struct base
type Atleta struct {
	Nombre        string
	Deporte       string
	Edad          int
	AlturaMetros  float64
	PesoKg        float64
	EnTratamiento bool
}

// 2. MÉTODO DE VALOR (Solo lectura)
// El "(a Atleta)" antes del nombre es el "Receptor" (Receiver).
// Esto amarra la función al struct Atleta.
func (a Atleta) CalcularIMC() float64 {
	return a.PesoKg / (a.AlturaMetros * a.AlturaMetros)
}

// 3. MÉTODO DE PUNTERO (Modifica el estado original)
// Usamos \*Atleta porque queremos alterar la variable original en la RAM,
// no una copia temporal.
func (a *Atleta) DarDeAlta() {
	a.EnTratamiento = false
	fmt.Printf("\n✅ INFORME MÉDICO: El atleta %s ha sido dado de alta médica y deportiva.\n", a.Nombre)
}

func main() {
	// Instanciamos nuestro paciente
	paciente := Atleta{
		Nombre:        "Kevin",
		Deporte:       "Basketball",
		Edad:          28,
		AlturaMetros:  1.85,
		PesoKg:        82.5,
		EnTratamiento: true,
	}

	fmt.Println("🏥 --- Expediente Clínico Deportivo ---")
	fmt.Printf("Paciente: %s | Disciplina: %s\n", paciente.Nombre, paciente.Deporte)

	// 4. Llamamos al método de lectura usando la notación de punto (.)
	imc := paciente.CalcularIMC()
	fmt.Printf("📊 Índice de Masa Corporal (IMC): %.2f\n", imc)
	fmt.Printf("🏥 Estado inicial - ¿En rehabilitación?: %t\n", paciente.EnTratamiento)

	// 5. Llamamos al método que modifica el estado interno
	// Go es inteligente: sabe que DarDeAlta() requiere un puntero y hace la conversión por debajo.
	paciente.DarDeAlta()

	fmt.Printf("🏥 Estado actualizado - ¿En rehabilitación?: %t\n", paciente.EnTratamiento)
}
```
