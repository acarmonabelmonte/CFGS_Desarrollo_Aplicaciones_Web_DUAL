#!/bin/bash
dia=$(date +%d-%m-%y)
dias=$(date --date "+5 day" +%d-%m-%y)
echo "Estamos a $dia ,si le sumas 5 a $dias"
