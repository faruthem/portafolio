---
title: "Bucles en Go: Tablas de multiplicar"
date: 2026-02-13T22:39:00.000-06:00
summary: Dominando la única estructura de ciclo en Go (for) mediante un
  generador de tablas de multiplicar robusto.
tags:
  - Go
  - Ejercicios
  - Bucles
---
```go

package main

import "fmt"

func main() {
    var numero int

    // 1. Bucle infinito para validar la entrada (estilo 'while true')
    for {
        fmt.Print("Ingresa un número entero para ver su tabla: ")
        _, err := fmt.Scanln(&numero)

        if err != nil {
            fmt.Println("❌ Error: Por favor ingresa solo números enteros.")
            var basura string
            fmt.Scanln(&basura) // Limpiamos el buffer
            continue
        }
        break // Rompemos el bucle si la entrada es correcta
    }

    fmt.Printf("\n--- Tabla de multiplicar del %d ---\n", numero)

    // 2. Bucle for tradicional (inicialización; condición; incremento)
    for i := 1; i <= 10; i++ {
        resultado := numero * i
        // %d sirve para imprimir números enteros con formato
        fmt.Printf("%d x %2d = %d\n", numero, i, resultado)
    }
    
    fmt.Println("---------------------------------")
}
