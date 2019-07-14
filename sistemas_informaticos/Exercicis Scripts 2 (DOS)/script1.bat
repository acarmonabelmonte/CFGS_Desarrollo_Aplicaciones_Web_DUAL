echo off 

set variable=%0
echo %variable% > prueba.txt
for /F "tokens=*" %%A IN (prueba.txt) do @echo %%A
pause