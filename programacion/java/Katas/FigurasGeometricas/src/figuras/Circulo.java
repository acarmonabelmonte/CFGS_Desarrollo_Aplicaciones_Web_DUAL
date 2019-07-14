package figuras;

public class Circulo extends FiguraGeometrica {
    /*---Atributos---*/
    private double radio = 0d;
    private final double PI = Math.PI;

    /*Constructores*/
    public Circulo(){
        super();
    }

    public Circulo(float lado){
        super();
        this.radio = lado;
    }

    /*---Métodos---*/
    public Circulo(String nombre, double radio){
        super(nombre);
        this.radio = radio;
    }

    /*---Getters y Setters---*/
    public double getRadio() {
        return radio;
    }

    public void setRadio(double radio) {
        this.radio = radio;
    }

    @Override
    public double area(){
        return getRadio()*PI;
    }
}
