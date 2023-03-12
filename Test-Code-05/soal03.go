package main

import "fmt"

func main() {
	tajik := "САШАРВО"

	for i := 0; i < 5; i++ {
		fmt.Println("Nilai i =", i)
	}

	for j := 0; j < 5; j++ {
		fmt.Println("Nilai j =", j)
	}

	for index, value := range tajik {
		fmt.Printf("character %#U starts at byte position %d \n", value, index)
	}

	for j := 6; j <= 10; j++ {
		fmt.Println("Nilai j =", j)
	}
}
