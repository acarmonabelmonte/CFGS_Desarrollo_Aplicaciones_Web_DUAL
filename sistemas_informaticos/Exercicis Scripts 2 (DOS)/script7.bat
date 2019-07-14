@echo off
:bucle
set /p contador="Bucle infinito. Escribe salir para salir "
if "%contador%"=="salir" (
exit
)
goto bucle