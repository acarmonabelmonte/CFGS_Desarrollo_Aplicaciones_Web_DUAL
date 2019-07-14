package org.formacio.component;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

// aquesta classe ha de ser detectada com un component

@Component
public class ServeiConsultaEmpreses {
	
	// aquest servei necessita d'un integrador de cotitzacions per retornar la informacio
	// declarau la dependencia i feis que spring la resolgui
	//--Atributs--//
	
	@Autowired
	private ClientCotitzacionsWS calculoCotizacion;
	
	//--Getters y setters--//
	
	public void setCalculoCotizacion(ClientCotitzacionsWS calculoCotizacion) {
		this.calculoCotizacion = calculoCotizacion;
	}

	// modifiqueu aquest metode per canviar el 0 per el valor obtingut del clientCotitzacionsWS
	//--Métodos--//
	
	public String infoEmpresa(String empresa) {
		return "La empresa " + empresa + " cotitza a " + calculoCotizacion.obteCotitzacio(empresa);
	}

	//--Métodos--//
	
	// modifiqueu aquest metode per canviar el 0 per el valor obtingut del clientCotitzacionsWS
	// aquest es, segurament, l'exercici mes xungo !
	// com farieu per fer que el metode infoDiari de obteMitjanaDiariaCotitzacions nomes se crides una vegada?
	// pista (si nomes s'ha de cridar una vegada ... haurem de guardar el resultat a alguna banda ... )
	public String infoDiari() {
		return "La cotitzacio mitjana diaria es " + calculoCotizacion.getMitjanaDiaria();
	}

}
