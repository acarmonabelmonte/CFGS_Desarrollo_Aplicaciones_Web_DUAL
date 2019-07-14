#!/bin/bash
echo "Introduce un número"
read num
if (( $num % 2 != 0 )); then
echo "Impar"
for (( i = 1; i <= $num ; i = i+2 ));
do
echo "Números impares para $num son: $i "
done
else
echo "Número par"
for (( i = 2; i <=$num ; i = i+2 ));
do
echo "Números pares para $num son: $i "
done
fi
