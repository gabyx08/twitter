
var contadorCaracteres = 0;
var contadorClicks = 0;

var body = document.getElementById("body");
body.addEventListener("click", contadorClick);

var textarea = document.getElementById("mensaje");
textarea.addEventListener("keypress",contarCaracteres);

var boton = document.getElementById("botonEnviar");
boton.addEventListener("click", enviarComentario)


function contadorClick(){
	var span = document.getElementById("contadorDeClicks");
	contadorClicks++;
	span.textContent = "Contador de Clicks = " + contadorClicks;
}

function contarCaracteres(event){
	var mostrarContador= document.getElementById("mostrarContadorCaracteres");
	var charCode = event.charCode;
	if (contadorCaracteres < 0){
		contadorCaracteres = 0;
	}

	if (charCode === 0){
		contadorCaracteres--;
	} else {
		contadorCaracteres++;
	}
	mostrarContadorCaracteres();

}

function enviarComentario(){
	var mostrarTweet = document.getElementById("mostrarTweet");
	var textarea = document.getElementById("mensaje");
	var autorTweet = document.getElementById("autor");

	if(textarea.value.length === 0){
		alert("Escribe un tweet");
	} else if(textarea.value.length > 140){
		alert("El tweet tiene más de 140 caracteres");
	} else{

		if(autorTweet.value.length === 0){
			alert("Te falta escribir el autor del tweet")
		} else {
		var elementoP = document.createElement("p");
		elementoP.innerHTML = textarea.value + "<br> <i> Por: " + autorTweet.value + "</i>" ;
		mostrarTweet.appendChild(elementoP);
		//borrar textarea e input value
		textarea.value = "";
		autorTweet.value = "";
		contadorCaracteres = 0;
		mostrarContadorCaracteres();
		}

	}

}

function mostrarContadorCaracteres(){
	var mostrarContador= document.getElementById("mostrarContadorCaracteres");
	mostrarContador.textContent= contadorCaracteres + "/140";
}
