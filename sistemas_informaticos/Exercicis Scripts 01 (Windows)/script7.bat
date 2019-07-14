@echo off
set /p documento= Escriba el nombre del documento a crear:
set /p documento1= Escriba el nombre del documento a copiar 1:
set /p documento2= Escriba el nombre del documento a copiar 2:
set /p documento3= Escriba el nombre del documento a copiar 3:
COPY "%documento1%" + "%documento2%" + "%documento3%" "%documento%"
pause>nul
exit