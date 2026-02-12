---
title: "Hola Mundo concurrente en Go"
date: 2026-02-11T12:00:00-06:00
draft: false
tags: ["Go", "Goroutines", "Básico"]
summary: "Un ejemplo rápido de cómo usar goroutines básicas."
---

Aquí un ejemplo clásico de concurrencia básica:

```go
package main

import (
	"fmt"
	"time"
)

func saludar(nombre string) {
	fmt.Printf("Hola, %s desde una goroutine\n", nombre)
}

func main() {
	go saludar("Kevin")
	time.Sleep(100 * time.Millisecond)
	fmt.Println("Fin del programa")
}
