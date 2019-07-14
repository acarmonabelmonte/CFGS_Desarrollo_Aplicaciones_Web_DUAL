#!/bin/bash
echo "Introduce un número para calcular su cuadrado: "
read num
cuadrado=`expr $num \* $num`
echo "El resultado es $cuadrado"
