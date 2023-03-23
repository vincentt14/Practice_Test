package main

import (
	"errors"
	"fmt"
	"log"
	"os"
)

type Student struct {
	Id        string
	Nama      string
	Alamat    string
	Pekerjaan string
	Alasan    string
}

var students []Student = []Student{
	{
		Id:     "s-1",
		Nama:   "Vincent",
		Alamat: "Benhil",
		Alasan: "Mau jadi fullstack",
	},
	{
		Id:     "s-2",
		Nama:   "Rucci",
		Alamat: "Blok M",
		Alasan: "Pengen ikut tapi dia udah kerja",
	},
	{
		Id:     "s-3",
		Nama:   "Jason",
		Alamat: "S.Parman",
		Alasan: "Penasaran sama golang",
	},
	{
		Id:     "s-4",
		Nama:   "Audric",
		Alamat: "Scientia Boulevard",
		Alasan: "Golang simpel",
	},
}

func GetStudentById(id string) (*Student, error) {
	for _, student := range students {
		if student.Id == id {
			return &student, nil
		}
	}

	return nil, errors.New("Student not found")
}

func main() {
	var args = os.Args

	if len(args) == 1 {
		fmt.Println("Masukkan id student setelah run go main.go")
		os.Exit(1)
	}

	var result, err = GetStudentById(args[1])

	if err != nil {
		log.Fatalln(err.Error())
	}

	fmt.Println("Result :", result)
}
