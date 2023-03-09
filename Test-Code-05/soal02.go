package main

import "fmt"

func main() {
	var i int = 21
	var q bool = true
	var angka int = 21
	var hex int = 15
	rusia := 'Я'
	r := '?'
	var k float64 = 123.456

	fmt.Printf("%d \n", i)
	fmt.Printf("%T \n", i)
	fmt.Printf("%%\n")
	fmt.Printf("%v \n", q)
	fmt.Println(rune(rusia))
	fmt.Printf("%c \n", r)
	fmt.Printf("%d \n", angka)
	fmt.Printf("%o \n", angka)
	fmt.Printf("%x \n", hex)
	fmt.Printf("%X \n", hex)
	fmt.Printf("%U \n", rusia)
	fmt.Printf("%f \n", k)
	fmt.Printf("%E \n", k)
}
