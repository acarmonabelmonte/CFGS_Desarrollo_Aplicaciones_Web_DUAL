#!/bin/bash

clear
while true
do
echo "escoge una opcion"
echo "Opción 1 (Configuración de ip)"
echo "Opción 2 (Disco duro)"
echo "Opción 3 (RAM)"
echo "Opción 4 (nada)"
echo "Opción 5 (salir)"
echo -n "Seleccioniona una opción [1 - 5]"
read opcion
case $opcio in
1) echo "La configuración de ip:";
ifconfig;
2) echo "El uso de disco:";
df;
3) echo "El uso de RAM:";
free;
4) echo "no hago nada de momento"
5) echo "adios";
exit 1;
*) echo "$opcio no es una opción posible.";
echo "Pressiona una tecla para continuar--->";
read foo;
esac
done
