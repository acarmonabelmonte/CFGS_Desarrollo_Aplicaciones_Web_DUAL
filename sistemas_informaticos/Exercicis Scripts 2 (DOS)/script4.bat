@echo off

for /L %%n in (1,0,2) do (
	echo primero prueba1
	echo segunda prueba2
	echo tercera prueba3
	timeout 1
)
