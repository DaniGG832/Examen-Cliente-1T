/* window.addEventListener("load", usuario); */
let login = document.querySelector("#login");

document.getElementById("login").addEventListener("click", modoUsuario);
document.getElementById("logOut").addEventListener("click", modoUsuario);
document.getElementById("guardar").addEventListener("click", modoUsuario);
document.getElementById("administrador").addEventListener("click", modoAdmistrador);

/* campo dni */
let labelDni =  document.createElement("label")
labelDni.setAttribute("for","dni");
let nododni = document.createTextNode("DNI:");
labelDni.appendChild(nododni);

let inputDni = document.createElement("input");
inputDni.setAttribute("type","text");
inputDni.setAttribute("id","dni");




/* div formulario */
let formulario = document.querySelector("#formulario");

/* display none */

let logOut = document.querySelector("#logOut");
logOut.style.display = "none";

let guardar = document.querySelector("#guardar");
guardar.style.display = "none";

let administrador = document.querySelector("#administrador");
administrador.style.display = "none";

const usuario = {
	Usuario: "",
	email: "",
	dni: "",
	rango: "invitado",
}

function modoUsuario(e) {

	login.style.display = "none";
	logOut.style.display = "inline";
	guardar.style.display = "inline";
	administrador.style.display = "inline";
	document.querySelector("#bienvenida").style.display = "none";
	document.querySelector("#formulario").style.display = "block";


}

function modoAdmistrador(e) {

	formulario.appendChild(labelDni);
	formulario.appendChild(inputDni);
	
}