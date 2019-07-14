package figuras;

public class Rectangulo extends FiguraGeometrica {
    /*---Atributos---*/
    private double lado1;
    private double lado2;


    /*---Constructor---*/
    public Rectangulo(float lado1, float lado2){
        super();
        this.lado1 = lado1;
        this.lado2 = lado2;
    }

    /*---Métodos---*/
    public Rectangulo(String nombre, float lado1, float lado2){
        super(nombre);
        this.lado1 = lado1;
        this.lado2 = lado2;
    }

    public double getLado1() {
        return lado1;
    }

    public void setLado1(double lado1) {
        this.lado1 = lado1;
    }

    public double getLado2() {
        return lado2;
    }

    public void setLado2(double lado2) {
        this.lado1 = lado2;
    }

    @Override
    public double area(){
        return getLado1() * getLado2();
    }
}
