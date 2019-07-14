#!/bin/bash

clear
echo "Inserte una frase: "
read str
len=$(expr length $str)
count=0
while [ $len -gt 0 ]
do
   ch=$(echo $str | cut -c $len)
   case $ch in
      [aeiouAEIOU] )
         count=$(($count + 1))
      ;;
   esac
   len=$(( $len - 1 ))
done
len=$(expr length $str)
count1=0
while [ $len -gt 0 ]
do
   ch=$(echo $str | cut -c $len)
   case $ch in
      [qwrtypdfghjklñzxcvbnmQWRTYPSDFGHJKLÑZXCVBNM] )
         count1=$(($count1 + 1))
      ;;
   esac
   len=$(( $len - 1 ))
done
echo "$str Tiene $count vocales y $count1 consonantes"

sleep 2s