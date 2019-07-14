while read -ra line;
do
    palabra=""
    for word in "${line[@]}";
    do
        if [ "$palabra" != "" ];then
                if [ "$palabra" != "$word" ]; then

                        echo "columnas diferentes"
                        exit

                fi
        fi
        palabra="$word"
    done;
done < ejercicio5.txt
echo "columnas iguales"

