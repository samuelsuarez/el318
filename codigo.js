var opciones = ["Piedra","Papel","Tijera"];


function confirmaJuego(){
	if(confirm("Confirme que iniciara el juego?.")){
		iniciarJuego();
		return true;
	}else{
		alert("Si se arrepiente, pulse el boton 'Iniciar Juego'...");
		return false;
	}
}

function iniciarJuego(){
	var opcionUsuario=prompt("Elige una opcion entre <0-2>\n0: Piedra\n1: Papel\n2: Tijera");
	var opcionUsuario=parseInt(opcionUsuario);
	if(isNaN(opcionUsuario)){
		alert("El valor ingresado no es numero...");
	}else if(opcionUsuario<0 || opcionUsuario>2){
		alert("El numero ingresado no corresponde a una de las opciones validas.");
	}else{
		var opcionJavascript=aleatorioJavascript(0,2);
		if (compite(opcionJavascript,opcionUsuario)){
			alert("Felicitaciones... Acaba de ganar");
		}else{
			alert("Lo sentimos, el ganador es Javascript\n Vuelva a intentar...")
		}
	}
}

function aleatorioJavascript(minimo,maximo){
	var opcionJavascript = Math.floor(Math.random()*(maximo-minimo+1)+minimo);
	return opcionJavascript;
}


function compite(opcionUsuario,opcionJavascript){
	alert("Usuario: "+opciones[opcionUsuario] + "    VS    "+"Javascript: " + opciones[opcionJavascript]);
        if (opciones[opcionUsuario]=="Piedra"){
		if(opciones[opcionJavascript]=="Tijera"){
			var ganador=true;
		}
	}else if (opciones[opcionUsuario]=="Papel"){
		if(opciones[opcionJavascript]=="Piedra"){
			var ganador=true;
		}
	}else if (opciones[opcionUsuario]=="Tijera"){
		if(opciones[opcionJavascript]=="Papel"){
			var ganador=true;
		}
	}
	return ganador;
}
