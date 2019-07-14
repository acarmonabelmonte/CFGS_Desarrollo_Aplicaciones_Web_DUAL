@echo off
set /p carpeta1= Por favor introduzca el nombre de la primera carpeta.
set /p carpeta2= Por favor introduzca el nombre de la segunda carpeta.
mkdir %carpeta1%
mkdir %carpeta2%
if exist %carpeta1% (
if exist %carpeta2% (
dir
)
) else (
echo No se han podido crear los directorios
)
cd
C:\Users\adrian\Desktop\DAW DUAL 1º\SI\Mis ejercicios\Exercicis Scripts 2 (DOS)\%carpeta1%
echo "Entrando a la carpeta %carpeta1%"
timeout 2 > nul
echo "Generando los archivos de texto..."
timeout 2 > nul
echo "Escibir el texto de el documento pepet.txt o pulsar Ctrl + Z y
Enter para finalizar."
COPY CON pepet.txt
echo "Escribir el texto de el documento tomeuet.txt o pulsar Ctrl + Z y
Enter para finalizar."
COPY CON tomeuet.txt
timeout 3 > nul
echo "Volviendo a el directorio principal"
C:\Users\adrian\Desktop\DAW DUAL 1º\SI\Mis ejercicios\Exercicis Scripts 2 (DOS) 2 > nul
echo "Cambiando a la carpeta %carpeta2%"
cd
C:\Users\adrian\Desktop\DAW DUAL 1º\SI\Mis ejercicios\Exercicis Scripts 2 (DOS)\%car
peta2%
timeout 2 >nul
echo "Estamos dentro de la carpeta %carpeta2%"
echo "Generando los archivos de texto..."
echo "Escribir el texto de el documento auvesten.txt o pulsar Ctrl + Z y
Enter para finalizar."
COPY CON auvesten.txt
echo "Escribir el texto de el documento acauna.txt o pulsar Ctrl + Z y
Enter para finalizar."
COPY CON acauna.txt
timeout 3 > nul
echo "Volviendo a el directorio principal"
cd C:\Users\adrian\Desktop\DAW DUAL 1º\SI\Mis ejercicios\Exercicis Scripts 2 (DOS)
echo "Los documentos de texto se han creado. Proceso finalizado"
timeout 2 > nul
echo "Borrando %carpeta1%"
timeout 2 > nul
del %carpeta1%
rd %carpeta1%
echo "Borrando %carpeta2%"
timeout 2 > nul
del %carpeta2%
rd %carpeta2%
timeout 2 > nul
echo "Se han borrado los archivos"
pause>n




