#!/bin/bash

clear
while true
do
echo "selecciona una opción"
echo "Ejercicio 1"
echo "Ejercicio 2"
echo "Ejercicio 3"
echo "Ejercicio 4 (Ctrl + C para salir del bucle)"
echo "Ejercicio 5"
echo "Ejercicio 6"
echo "Ejercicio 7"
echo "Ejercicio 8"
echo "Ejercicio 9"
echo "0 (salir)"
echo -n "Seleciona una opción [0 - 9]"
read opcion
case $opcio in
1) sudo /home/adrian/Documentos/script1.sh;
2) sudo /home/adrian/Documentos/script2.sh;
3) echo -n "escribe el nombre de la 1ra carpeta a crear";
read carpeta1;
echo -n "escribe el nombre de la 2nda carpeta a crear";
read carpeta2;
sudo /home/adrian/Documentos/script3.sh $carpeta1 $carpeta2;
4) sudo /home/adrian/Documentos/script4.sh;
5) echo -n "Introduce el nombre de la 1ra carpeta a crear";
read carpeta1;
echo -n "Introduce el nombre de la 2da carpeta a crear";
read carpeta2;
sudo /home/adrian/Documentos/script5.sh $carpeta1 $carpeta2;
6) echo -n "Introduce el nombre de la 1ra carpeta a crear";
read carpeta1;
echo -n "Introduce el nombre de la 2da carpeta a crear";
read carpeta2;
sudo /home/adrian/Documentos/script6.sh $carpeta1 $carpeta2;
7) sudo /home/adrian/Documentos/script7.sh;
8) sudo /home/adrian/Documentos/script8.sh;
9) sudo /home/adrian/Documentos/script9.sh;
0) echo "GOOD BYE!";
exit 1;
*) echo "$opcio no esta dentro de las posibilidades";
echo "Presiona una tecla per continuar...";
read foo;
esac
done
