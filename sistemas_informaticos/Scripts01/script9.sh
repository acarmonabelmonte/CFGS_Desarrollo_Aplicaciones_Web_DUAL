printMenu()
{
        echo "Elige una de las siguientes opciones ";
        echo "-----------------";
        echo " 1 ";
        echo " 2 ";
        echo " 3 ";
        echo " 4 ";
        echo " 5 ";
        echo " 6 - EXIT ";
        read opcion
}

printMenu

while [ "$opcion" != "6" ];

 do

        if [ "$opcion" == "1" ] || [ "$opcion" == "2" ] || [ "$opcion" == "3" ] || [ "$opcion" == "4" ] || [ "$opcion" == "5" ]; then
                echo "Has elegido la opción $opcion"
        fi
        printMenu
done
