package tarjetaUsuario;

public class TarjetaUsuario {
	//---Atributos---
	String id = null;
	boolean activada = false;
	
	
	//--Constructores--
	public TarjetaUsuario() {
		
	}
	
	public TarjetaUsuario(String id, boolean activada) {
		this.id = id;
		this.activada = activada;
	}
	
	
	
	//--Getters y setters--
	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public boolean isActivada() {
		return activada;
	}

	public void setActivada(boolean activada) {
		this.activada = activada;
	}

	public Boolean getActivada() {
		return activada;
	}

	
	
	
}
