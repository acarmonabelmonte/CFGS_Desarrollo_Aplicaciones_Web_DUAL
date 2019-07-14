package figuras;

public class Cuadrado extends FiguraGeometrica{
     /*---Atributos---*/
    private double lado;

    /*---Constructor---*/
    public Cuadrado(float lado){
        super();
        this.lado = lado;
    }

    /*---Métodos---*/
    public Cuadrado(String nombre, float lado){
        super(nombre);
        this.lado = lado;
    }

    public double getLado() {
        return lado;
    }

    public void setLado(double lado) {
        this.lado = lado;
    }

    @Override
    public double area(){
        return Math.pow(getLado(), 2);
    }

}
