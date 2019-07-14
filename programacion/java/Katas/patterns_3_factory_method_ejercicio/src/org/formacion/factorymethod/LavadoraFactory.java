package org.formacion.factorymethod;

public abstract class LavadoraFactory {
	public Lavadora creaLavadora() {
		Lavadora lavadora = creaLavadoraTipo();
		lavadora.ponerMandos();
		lavadora.ponerTambor();
		
		return lavadora;
	 }
	
	protected abstract Lavadora creaLavadoraTipo();
}
