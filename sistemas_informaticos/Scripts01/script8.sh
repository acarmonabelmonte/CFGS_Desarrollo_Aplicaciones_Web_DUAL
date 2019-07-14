cat fulanos.txt | \
while read fulano; do
    for i in $(echo $fulano | tr " " "\n"); do
        if [ "$i" == "Lepelandia" ]; then
                echo "$fulanito es de Lepelandia "
        fi
        fulanito=$i
    done
done
