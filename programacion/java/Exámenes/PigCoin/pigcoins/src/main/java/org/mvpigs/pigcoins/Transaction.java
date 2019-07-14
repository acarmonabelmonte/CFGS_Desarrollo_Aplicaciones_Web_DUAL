package org.mvpigs.pigcoins;

import java.security.PublicKey;

public class Transaction {
	///---Atributos---///
	private String hash = "";
	private String prev_hash = "";
	private PublicKey pKey_sender = null;
	private PublicKey pKey_recipient = null;
	private int pigcoins = 0;
	private String message = "";
	
	///---Constructores---///
	public Transaction() {
			
		}
	
	public Transaction(String hash, String prev_hash, PublicKey pKey_sender, PublicKey pKey_recipient, int pigcoins, String message) {
		this.hash = hash;
		this.prev_hash = prev_hash;
		this.pKey_sender = pKey_sender;
		this.pKey_recipient = pKey_recipient;
		this.pigcoins = pigcoins;
		this.message = message;
	}
	
	
	

}
