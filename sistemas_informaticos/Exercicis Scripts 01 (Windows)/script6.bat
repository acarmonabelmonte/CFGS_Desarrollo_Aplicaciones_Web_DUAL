@echo off
set /p documento= Nombre de archivo a descomprimir:
"C:\Program Files\WinRAR\WinRAR.exe" 
C:\Users\adrian\Desktop\DAW DUAL 1º\SI\Mis ejercicios\Exercicis Scripts 01 (Windows)\
%documento%
C:\Users\adrian\Desktop\DAW DUAL 1º\SI\Mis ejercicios\Exercicis Scripts 01 (Windows)\
set /p documento1= Nombre del archivo:
setlocal enabledelayedexpansion
set num= 0
for /f "tokens=1-3 delims= " %%a in (%documento1%) do (
if !num! leq 0 (
echo La primera palabra es: %%a, La segunda palabra es: %%b, La tercera
palabra es: %%c.
if %%a==%%b (
if %%a==%%c (
echo Las palabras son iguales.
) else (
echo Las palabras son diferentes.
)
) else (
echo Las palabras son diferentes.
)
set /a num = !num! + 1
)
)
pause>nul
exit