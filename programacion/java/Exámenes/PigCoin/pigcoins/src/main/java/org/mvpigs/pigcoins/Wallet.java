package org.mvpigs.pigcoins;

import java.security.KeyPair;
import java.security.PrivateKey;
import java.security.PublicKey;

public class Wallet {
	//---Atributos---//
	private PublicKey address = null;
	private PrivateKey sKey = null;
	double total_input = 0d;
	double total_output = 0d;
	double balance = 0d;

	
	
	//---Constructor---//
	public Wallet() {
		
	}
	
	//---Getters y Setters---//
	
	public PublicKey getAddress() {
		return address;
	}

	public void setAddress(PublicKey address) {
		this.address = address;
	}

	public PrivateKey getsKey() {
		return sKey;
	}

	public void setSK(PrivateKey sKey) {
		this.sKey = sKey;
	}
	
	//---Métodos---//
	
	public void generateKeyPair() {
		KeyPair pair = GenSig.generateKeyPair();
		setSK(pair.getPrivate());
		setAddress(pair.getPublic());
	
	}

}



