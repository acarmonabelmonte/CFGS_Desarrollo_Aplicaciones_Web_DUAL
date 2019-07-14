package org.formacio.component;

import javax.annotation.PostConstruct;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class ServeiAlumnat {

	@Autowired
	RepositoriAlumnesMemoria repo;
	/**
	 * ha de donar d'alta a la base de dades d'alumnes l'alumne indicat amb 
	 * el corresponent codi.
	 * Si el nom de l'alumne es null, no l'ha de donar d'alta
	 * Retorna true si l'alumne s'ha inscrit, false si no.
	 */
	@PostConstruct
	public void init() throws Exception {
		repo.altaAlumne(1, "Antonia");
		repo.altaAlumne(2, "Joan");
	}
	
	public int nombreAlumnes() {
		return repo.getBbdd().size();
	}

	public boolean matricula (int id, String alumne) {
	boolean state = false;
		if (alumne != null) {
			repo.altaAlumne(id, alumne);
			state = true;
		}
	return state;
	}
	
}
