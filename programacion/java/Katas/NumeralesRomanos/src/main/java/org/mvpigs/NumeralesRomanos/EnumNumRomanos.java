package org.mvpigs.NumeralesRomanos;

public enum EnumNumRomanos {
	I(1), V(5), X(10), L(50), C(100), D(500), M(1000);
	
	private int valor;

EnumNumRomanos(int valor) {
	this.valor = valor;
	}

public int getValor() {
	return valor;
}

}
