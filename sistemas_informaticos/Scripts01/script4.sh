echo "Escribe una palabra para ver si se encuentra en texto.txt"
read palabra
if grep -q $palabra "texto.txt"; then
        echo "Se encuentra la palabra $palabra"
else
        echo "No se encuentra la palabra $palabra"
fi
