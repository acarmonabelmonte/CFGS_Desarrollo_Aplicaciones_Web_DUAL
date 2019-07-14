#!/bin/bash
clear
echo "Selecciona una de las opciones"
echo "1- opción 1"
echo "2- opción 2"
echo "3- opción 3"
echo "4- opción 4"
echo "5- opción 5"
echo -n "Elige una opcion del 1 al 5: "
read opcion
case $opcion in
 1) echo "Has elegido la opción 1";;
 2) echo "Has elegido la opción 2";;
 3) echo "EHas elegido la opción 3";;
 4) echo "Has elegido la opción 4";;
 5) echo "Has elegido la opción 5";;
 *) echo "No existe";;
esac
