@echo off
setlocal EnableDelayedExpansion
title Numeros Pares e Impares
(setlocal && cls && echo.)

set /P _num1="Ingrese primer numero: "
set /P _num2="Ingrese segundo numero: "

for /L %%i in (%_num1%,1, %_num2%) do (
    set /A _pares=%%i %% 2  
    if "!_pares!"=="0" (echo %%i es par)
    if "!_pares!"=="1" (echo %%i es impar)
)

(pause && endlocal)