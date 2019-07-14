#!/bin/bash

mkdir /home/adrian/Documentos/$1 /home/adrian/Documentos/$2

cd /home/adrian/Documentos/$1

touch {pepet,tomeuet}.txt

echo Estructura de la carpeta $1

ls -l

cd /home/adrian/Documentos/$2

touch {auvesten,acauna}.txt

echo Estructura de la carpeta $2

ls -l

cd /home/adrian/Documentos

echo Estructura de la carpeta Documents

ls -l

rm -rf $1

rm -rf $2

echo Se borran las carpetas creadas

ls -l
