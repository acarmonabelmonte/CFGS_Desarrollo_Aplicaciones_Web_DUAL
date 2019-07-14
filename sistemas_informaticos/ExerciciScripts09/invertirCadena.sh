#!/bin/bash
echo "Inserte una frase: "
read frase
reverse=""

len=${#frase}
for (( i=$len-1; i>=0; i-- ))
do
   reverse="$reverse${frase:$i:1}"
done

echo "Su frase invertida: "
echo "$reverse"
sleep 4s