package org.mvpigs.NumeralesRomanos;


import static org.assertj.core.api.Assertions.assertThat;
import java.util.regex.Matcher;
import java.util.regex.Pattern;
import org.mvpigs.NumeralesRomanos.EnumNumRomanos;


public class NumeroRomano {
	
	/*Atributos*/
	
	private String numeroRomano = null;
	private short numeroDecimal = 0;
	private RegexNumerosRomanos regex = new RegexNumerosRomanos();
	
	/*Constructor*/
	
	public NumeroRomano() {
		this.initArrayRegex();
	};

	public NumeroRomano(String numeroRomano) {
		this.numeroRomano = numeroRomano;
		this.initArrayRegex();
	}

	/*Getters y Setters*/
	
	public String getNumeroRomano() {
		return numeroRomano;
	}

	public void setNumeroRomano(String numeroRomano) {
		this.numeroRomano = numeroRomano;
	}

	public short getNumeroDecimal() {
		return numeroDecimal;
	}

	public void setRegex(RegexNumerosRomanos regex) {
		this.regex = regex;
	}
	
	/*Métodos*/
	private void initArrayRegex() {
		
	}
	
	


}
