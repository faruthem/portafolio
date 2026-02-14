---
title: Control de flujo
date: 2026-02-13T22:36:00.000-06:00
summary: Versión mejorada con validación de errores. El programa no termina
  hasta recibir un número válido.
tags:
  - Go
  - Ejercicios
  - Logica
---
```go
package main

import "fmt"

func main() {
    var nota int

    // Iniciamos un bucle infinito
    for {
        fmt.Print("Ingresa tu calificación (0-10): ")

        // Scanln devuelve dos valores:
        // 1. Cuántas variables leyó con éxito
        // 2. Si hubo un error (err)
        _, err := fmt.Scanln(&nota)

        // Si hay error (ej: usuario escribió "hola")
        if err != nil {
            fmt.Println("❌ Error: Eso no es un número. Intenta de nuevo.")

            // TRUCO IMPORTANTE:
            // El texto "hola" sigue estorbando en la entrada.
            // Leemos esa basura en una variable vacía para limpiar el buffer.
            var basura string
            fmt.Scanln(&basura)

            continue // Vuelve al inicio del for
        }

        // Si es número, validamos el rango
        if nota < 0 || nota > 10 {
            fmt.Println("❌ Error: El número debe estar entre 0 y 10.")
            continue
        }

        // Si llegamos aquí, el dato es válido y correcto.
        break // Rompemos el bucle infinito
    }

    // Lógica de clasificación limpia
    switch {
    case nota < 6:
        fmt.Println("Resultado: Reprobado 🔴")
    case nota >= 6 && nota < 9:
        fmt.Println("Resultado: Aprobado 🟡")
    case nota >= 9:
        fmt.Println("Resultado: ¡Excelente! 🟢")
    }
}
