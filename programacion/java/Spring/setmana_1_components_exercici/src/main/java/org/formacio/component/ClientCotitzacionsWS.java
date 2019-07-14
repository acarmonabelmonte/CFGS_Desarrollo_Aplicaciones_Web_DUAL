package org.formacio.component;

import org.springframework.stereotype.Component;



//aquesta classe ha de ser detectada com un component
@Component

public class ClientCotitzacionsWS implements IntegradorCotitzacions {
	
	//--Atributs--//
	
	public int nombreInvocacions = 0;
	private final float mitjanaDiaria = 20f;
	
	//--Constructor--//
	
	public ClientCotitzacionsWS() {
		this.obteMitjanaDiariaCotitzacions();
	}
	
	//--Getters y setters--//
	
	public float getMitjanaDiaria() {
		return this.mitjanaDiaria;
	}

	//--Métodos--//
	
	public float obteMitjanaDiariaCotitzacions() {
		nombreInvocacions++; // per controls del test
		return mitjanaDiaria;
	}

	@Override
	public float obteCotitzacio(String empresa) {
		switch (empresa) {
		     case "cervesses.sa": return 30f;
		     case "shandies.sa": return 10f;
		     default : return 20f;
		}
	}

}
