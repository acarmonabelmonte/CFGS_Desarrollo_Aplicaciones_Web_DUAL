printMenu()
{
        echo "----------------";
        echo "Elige uno de los scripts";
        echo "-----------------";
        echo "1 - Saluda user";
        echo "2 - Comprueba nombre user";
        echo "3 - ¿Es día 25? ";
        echo "4 - ¿Se encuentra la palabra en el fichero?";
        echo "5 - Columnas iguales";
        echo "6 - Script 5 pero en gzip";
        echo "7 - La vaca lechera";
        echo "8 - fulanos del mundo";
        echo "9 - Menu opciones";
        echo "0 - EXIT";
        read opcion
}

while [ "$opcion" != "0" ];

 do
        case $opcion in
                "1")
                        bash script1.sh
                ;;
                "2")
                        bash script2.sh
                ;;
                "3")
                        bash script3.sh
                ;;
                "4")
                        bash script4.sh
                ;;
                "5")
                        bash script5.sh
                ;;
                "6")
                        bash script6.sh
                ;;
                "7")
                        bash script7.sh
                ;;
                "8")
                        bash script8.sh
                ;;
                "9")
                        bash script9.sh
                ;;
                "*")
                        echo "No has elegido ninguna opcion correcta"
                ;;
        esac
        printMenu
done
