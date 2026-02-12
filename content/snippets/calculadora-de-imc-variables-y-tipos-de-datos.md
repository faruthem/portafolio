---
title: Calculadora de IMC (variables y tipos de datos)
date: 2026-02-12T11:17:00.000-06:00
summary: >-
  Entender la declaración de variables, entrada de datos y operaciones
  matemáticas básicas.


  Creamos un programa interactivo que solicita peso y altura para calcular el IMC.
tags:
  - Go
  - Variables
  - Ejercicios
---
```go
package main

import "fmt"

func main() {
    // Declaración de variables
    var peso, altura float64

    // Entrada de datos
    fmt.Print("Ingresa tu peso (kg): ")
    fmt.Scanln(&peso)

    fmt.Print("Ingresa tu altura (metros): ")
    fmt.Scanln(&altura)

    // Cálculo del IMC
    imc := peso / (altura * altura)

    // Salida formateada (%.2f limita a 2 decimales)
    fmt.Printf("Tu Índice de Masa Corporal es: %.2f\n", imc)
}
