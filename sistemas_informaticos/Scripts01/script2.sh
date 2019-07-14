echo "¿Cómo te llamas?"
read nombre
if [ "$nombre" ==  "$USER" ] || [ "$nombre" == "Adri" ] || [ "$nombre" == "Adri" ]; then
         echo "Hola $nombre"
else
        echo "Hasta luego"
fi
