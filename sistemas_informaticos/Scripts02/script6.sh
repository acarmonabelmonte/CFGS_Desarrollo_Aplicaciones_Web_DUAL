#!/bin/bash
if [$# -eq 0]; then
  echo "no me has pasado nada"
  exit 1
fi

if [-z "$2"]; then
  echo "falta otro elemento"
  exit 1
else
  mkdir /home/adrian/Documentos/$1 /home/adrian/Documentos/$2
fi

cd /home/adrian/Documentos/$1

touch {pepet,tomeuet}.txt

echo Estructura de la carpeta $1

ls -l

cd /home/adrian/Documentos/$2

touch {pere,joan}.txt

echo Estructura de la carpeta $2

ls -l

cd /home/adrian/Documentos

echo Estructura de la carpeta Documents

ls -l

echo Ahora se borrará $1

if [-d "$1"]; then
  rm -rf $1
fi

echo Ahora se borrará $2

if [-d "$2"]; then
  rm -rf $2
fi

echo Estructura de las carpeta

ls -l
