---
title: Conversor Clínico de Temperatura
date: 2026-02-15T12:37:00.000-06:00
summary: Creación de funciones puras con múltiples valores de retorno para
  evaluar temperaturas de terapias de recuperación.
tags:
  - Go
  - Ejercicios
  - Funciones
---
```go
package main

import (
	"fmt"
)

// 1. Definición de la función: Recibe un float64 y RETORNA DOS VALORES (float64 y string)
func evaluarTerapia(celsius float64) (float64, string) {
	// Fórmula estándar de conversión
	fahrenheit := (celsius * 9/5) + 32
	var tipoTerapia string

	// Lógica de negocio (aislada de la interfaz de usuario)
	switch {
	case celsius <= 15:
		tipoTerapia = "❄️ Crioterapia (Ideal para inflamación aguda)"
	case celsius >= 34 && celsius <= 40:
		tipoTerapia = "🔥 Termoterapia (Ideal para relajar musculatura)"
	case celsius > 40:
		tipoTerapia = "⚠️ Peligro: Riesgo de quemaduras tisulares"
	default:
		tipoTerapia = "💧 Temperatura neutral (Reposo estándar)"
	}

	// Go permite retornar múltiples variables de una sola vez
	return fahrenheit, tipoTerapia
}

func main() {
	var inputTemp float64

	fmt.Println("🌡️ Sistema de Evaluación de Terapias Térmicas")
	fmt.Println("----------------------------------------------")

	for {
		fmt.Print("Ingresa la temperatura del agua en °C (o -100 para salir): ")
		_, err := fmt.Scanln(&inputTemp)

		if err != nil {
			fmt.Println("Error: Ingresa un número válido.")
			var basura string
			fmt.Scanln(&basura)
			continue
		}

		if inputTemp == -100 {
			fmt.Println("Apagando sistema...")
			break
		}

		// 2. Llamada a la función y desempaquetado de los dos retornos
		gradosF, recomendacion := evaluarTerapia(inputTemp)

		// 3. Imprimimos los resultados generados por la función
		fmt.Printf("\nResultados:\n")
		fmt.Printf("➡️ Fahrenheit: %.2f °F\n", gradosF)
		fmt.Printf("➡️ Evaluación: %s\n\n", recomendacion)
	}
}
