#!/bin/bash

mkdir /home/adrian/Documentos/$1 /home/adrian/Documentos/$2

cd /home/adrian/Documentos/$1

touch {pepet,tomeuet}.txt

echo Estructura de la carpeta $1

ls -l

cd /home/adrian/Documentos/$2

touch {pere,joan}.txt

echo Estructura de la carpeta $2

ls -l

cd /home/adrian/Documentos

echo Estructura de la carpeta Documentos

ls -l

echo Ara esborrarem la carpeta $1

if [-d "$1"]; then
  rm -rf $1
fi

echo Borram carpeta 2 $2

if [-d "$2"]; then
  rm -rf $2
fi

echo RM es para borrar las carpetas creadas

ls -l
