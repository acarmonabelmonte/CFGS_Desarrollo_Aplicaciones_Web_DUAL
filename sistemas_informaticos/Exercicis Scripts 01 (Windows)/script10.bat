@echo off
:inicio
SET var=0
cls
echo
------------------------------------------------------------------------
------
echo %DATE% ^| %TIME%
echo
------------------------------------------------------------------------
------
echo 1 Opcion 1
echo 2 Opcion 2
echo 3 Opcion 3
echo 4 Opcion 4
echo 5 Opcion 5
echo 6 Opcion 6
echo 7 Opcion 7
echo 8 Opcion 8
echo 9 Opcion 9
echo 10 Salir
echo
------------------------------------------------------------------------
------
echo.
SET /p var= ^> Seleccione una opcion [1-10]:
if "%var%"=="0" goto inicio
if "%var%"=="1" goto op1
if "%var%"=="2" goto op2
if "%var%"=="3" goto op3
if "%var%"=="4" goto op4
if "%var%"=="5" goto op5
if "%var%"=="6" goto op6
if "%var%"=="7" goto op7
if "%var%"=="8" goto op8
if "%var%"=="9" goto op9
if "%var%"=="10" goto salir
echo. El numero "%var%" no es una opcion valida, por favor intente de
nuevo.
echo.
pause
echo.
goto:inicio
:op1
echo.
echo. Has elegido la opcion No. 1
echo.
start script1.bat
echo.
pause
goto:inicio
:op2
echo.
echo. Has elegido la opcion No. 2
echo.
start script2.bat
echo.
pause
goto:inicio
:op3
echo.
echo. Has elegido la opcion No. 3
echo.
start script3.bat
echo.
pause
goto:inicio
:op4
echo.
echo. Has elegido la opcion No. 4
echo.
start script4.bat
echo.
pause
goto:inicio
:op5
echo.
echo. Has elegido la opcion No. 5
echo.
start script5.bat
echo.
pause
goto:inicio
:op6
echo.
echo. Has elegido la opcion No. 6
echo.
start script6.bat
echo.
pause
goto:inicio
:op7
echo.
echo. Has elegido la opcion No. 7
echo.
start script7.bat
echo.
pause
goto:inicio
:op8
echo.
echo. Has elegido la opcion No. 8
echo.
start script8.bat
echo.
pause
goto:inicio
:op9
echo.
echo. Has elegido la opcion No. 9
echo.
start script9.bat
echo.
pause
goto:inicio
:salir