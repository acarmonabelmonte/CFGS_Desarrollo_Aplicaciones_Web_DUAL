#!/bin/bash
cl1=$(zcat ejercicio5.txt.gz|awk '{print $1}')
cl2=$(zcat ejercicio5.txt.gz|awk '{print $2}')
cl3=$(zcat ejercicio5.txt.gz|awk '{print $3}')
if [ "$cl1"+"$cl2"+"$cl3" = "$cl2"+"$cl2"+"$cl2" ]; then
    echo columnas iguales
else
    echo columnas diferentes
fi
