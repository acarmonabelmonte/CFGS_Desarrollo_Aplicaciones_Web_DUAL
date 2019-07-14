package sentenciascontrol;

public class CalculaMesSwitch {
    public static void main(String[] args){
        int mes = 4; //Mes año
        String estación;

        String saludo = "Hola mundo";

        switch (mes){
            case 1: case 2: case 12:
                estación = "Invierno";
                break;
            case 3: case 4: case 5:
                estación = "Primavera";
                break;
            case 6: case 7: case 8:
                estación = "Verano";
                break;
            case 9: case 10: case 11:
                estación = "Otoño";
                break;
             default:
                 estación = "Mes incorrecto";
        }
        System.out.println("La estacion para el mes " + mes + " es: " + estación);
    }
}
