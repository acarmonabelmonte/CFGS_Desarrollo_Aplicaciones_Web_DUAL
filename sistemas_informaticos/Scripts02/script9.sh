#!/bin/bash

for (( i = 0; i < 30; i++ )); do
  if [ $($i%2) -eq 0 ]; then
    echo "$i"
  fi
done
