@echo off
set fechaEsperada=25/03/2018
set fecha=%DATE%
if %fechaEsperada%==%DATE% goto correcto else goto incorrecto
:incorrecto
echo Avui es dia %fecha% tonto.
pause>nul
exit
:correcto
echo Felicitats avui es d�a  %DATE%
pause>nul
exit