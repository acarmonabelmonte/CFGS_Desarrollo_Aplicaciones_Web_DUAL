echo off 

echo Hola, bienvenido Adrian
echo.
echo Fecha y hora actuales:
@echo.%date:~6,4%-%date:~3,2%-%date:~0,2% %time:~0,8% 
echo.
echo Directorio actual: 
echo %0 
pause
cls
