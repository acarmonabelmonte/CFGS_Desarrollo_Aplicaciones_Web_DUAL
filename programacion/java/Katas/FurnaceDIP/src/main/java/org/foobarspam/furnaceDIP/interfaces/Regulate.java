package org.foobarspam.furnaceDIP.interfaces;

import org.foobarspam.furnaceDIP.interfaces.Heater;
import org.foobarspam.furnaceDIP.interfaces.Thermometer;
import org.foobarspam.furnaceDIP.types.RegulatorDisplayCodes;
import org.foobarspam.furnaceDIP.types.RoomTemperature;

public interface Regulate {
	
	public void regulate(Thermometer t, Heater h, double minTemp, double maxTemp, RoomTemperature temperature);
	public void message(RegulatorDisplayCodes code, RoomTemperature temperature);
}
