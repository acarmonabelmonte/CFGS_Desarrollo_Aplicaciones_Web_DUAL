def accesoCasosTexttest(matrizCasosTest, rutaAccesoFichero):
    '''Esta función/módulo recibe dos argumentos/parámetros.
    El orimer parámetro matrizCasosTest recibe una matriz vacía, 
    mientras que el segundo parámetro rutaAccesoFichero indica la ruta del fichero a leer.
    Si la ruta del fichero no es de tipo string o no encuentra el fichero devuelve un
    mensaje avísando de dichos errores y devuelve una lista vacía.
    De lo contrario, si todo funciona correctamente, devuelve una matriz separando todos los productos
    de la tienda de Ollivander separandólos con comas.'''
    try:
        if not isinstance(rutaAccesoFichero, str):
            raise ValueError
        fichero = open(rutaAccesoFichero, 'r')
    except FileNotFoundError:
        print("Fichero no encontrado")
        return []
    except ValueError:
        print("El nombre del fichero ha de ser un string")
        return []
    else:
        matrizCasosTest = []
        numeroPropiedadesItem = 0
        for linea in fichero:
            if linea.find("day") != -1:
                casosTestDia = []
            elif linea == "\n":
                matrizCasosTest.append(casosTestDia)
            elif linea.find("name") != -1:
                numeroPropiedadesItem = len(linea.split(','))
            else:
                #Parte del código a refactorizar.
                item = linea.rstrip().rsplit(',', maxsplit=numeroPropiedadesItem - 1)

                casosTestDia.append(item)
        fichero.close()
        return matrizCasosTest


def crearFicheroCasosTest(ficheroVolcadoCasosTest, matrizCasosTest):
    '''Este módulo recibe dos parámetros.
    ficheroVolcadoCasosTest que es el fichero que se crea con la información de los productos
    y matrizCasosTest que contiene la matriz que contiene todos los productos separados por comas.
    Se genera un fichero stdout.gr en el que se escribe con la info de la matrizCasosTest y finalmente se cierra'''
    try:
        if not isinstance(ficheroVolcadoCasosTest, str):
            raise ValueError
        stdout = open(ficheroVolcadoCasosTest, 'w')
    except ValueError:
            print("La ruta de acceso al fichero ha de ser un string")
    else:
        for (offset, casosTestDia) in enumerate(matrizCasosTest):
            stdout.write('-' * 5 + " Dia %d: " % offset + '-' * 5 + '\n')
            for item in casosTestDia:
                stdout.write(','.join(item) + '\n')
        stdout.close()


def mostrarCasosTest(matrizCasosTest):
    '''Este módulo recibe como parámetro la matrizCasosTest que contiene los productos de la tienda
    separados por comas e imprime en pantalla cada uno de estos productos(items)'''
    for (offset, casosTestDia) in enumerate(matrizCasosTest):
        print('-' * 5 + " Dia %d: " % offset + '-' * 5)
        for item in casosTestDia:
            print(item)


if __name__ == "__main__":

    rutaAccesoFichero = "C:/Proyectos/Practica_Ollivander/casosTest.txt"
    # rutaAccesoFichero = "./stdout.gr"
    # rutaAccesoFichero = "stdout_bug_conjured.gr"

    matrizCasosTest = []

    matrizCasosTest = accesoCasosTexttest(matrizCasosTest, rutaAccesoFichero)

    mostrarCasosTest(matrizCasosTest)

    ficheroVolcadoCasosTest = "./stdout.txt"

    crearFicheroCasosTest(ficheroVolcadoCasosTest, matrizCasosTest)