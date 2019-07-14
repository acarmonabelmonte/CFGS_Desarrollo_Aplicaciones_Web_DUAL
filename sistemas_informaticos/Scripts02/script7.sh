#!/bin/bash

while true
do
  echo "Bucle infinito, pulsa CRTL + c para parar"
  if [$1 -eq "parar" ]; then
    exit 1
  fi
done
