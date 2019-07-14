#!/bin/bash
echo "Introduce un número y obtén los números pares del 1 hasta dicho este: "
read par
for (( num=2 ; num<=$par; num=num+2 ));
do
echo "El $num"
done
