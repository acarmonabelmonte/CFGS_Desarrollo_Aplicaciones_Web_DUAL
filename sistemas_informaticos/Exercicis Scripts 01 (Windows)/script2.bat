@echo off
set nombre= Adrian
set/p pregunta= Como te llamas?
if %nombre%==%pregunta% goto correcto else goto incorrecto
:incorrecto
echo Hasta luego %pregunta%
echo.
echo Pulse cualquier tecla para salir.
pause>nul
exit
:correcto
echo.
echo Hola %pregunta%. 
echo.
echo Pulse cualquier tecla para salir.
pause>nul
exit