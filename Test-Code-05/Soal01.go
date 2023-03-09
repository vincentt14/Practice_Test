package main

import "fmt"

func main() {
	var a string = "a"

	var b int = 10

	var c bool = true

	_, _, _ = a, b, c

	//Buatlah kode yang dapat menghasilkan suatu result di terminal seperti pada comment dibawah ini berdasarkan dari variable yang telah disediakan diatas :)
	/**
	  a
	  string
	  10
	  int
	  c
	  bool
	**/

	fmt.Printf("%s \n", a)
	fmt.Printf("%T \n", a)
	fmt.Printf("%d \n", b)
	fmt.Printf("%T \n", b)
	fmt.Printf("%t \n", c)
	fmt.Printf("%T", c)
}
