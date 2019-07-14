#!/bin/bash
echo "Introduce tu nombre: "
read name
if test -n "$name"; then
	echo "Introduce tus apellidos: "
	read lname
	sleep .5
	echo "Tu nombre es: $name $lname"
else
	echo "Introduce un nombre: "
fi
