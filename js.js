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

	/* login.style.display = "none";
	logOut.style.display = "inline";
	guardar.style.display = "inline";
	administrador.style.display = "inline";
	document.querySelector("#bienvenida").style.display = "none";
	document.querySelector("#formulario").style.display = "block"; */


}

function modoAdmistrador(e) {

	formulario.appendChild(labelDni);
	formulario.appendChild(inputDni);
	
}

	/* <div id="bienvenida">
      <!-- <h2>Datos Usuario</h2>
      <p>Bienvenido a esta web!</p>
      <p>Pulsa login para entrar como usuario registrado</p> -->
    </div>*/

	let div1 = document.createElement("div");
	div1.setAttribute("id","bienvenida");
	let h2 = document.createElement("h2");
	h2.textContent = "Datos Usuario";
	let p1 = document.createElement("p");
	p1.textContent = "Bienvenido a esta web!";
	let p2 = document.createElement("p");
	p1.textContent = "Pulsa login para entrar como usuario registrado";

	div1.appendChild(h2);
	div1.appendChild(p1);
	div1.appendChild(p2);

	document.querySelector("#botones").insertAdjacentElement("afterend",div1)


    /*<div id="formulario">
      <h2>Datos Usuario</h2>
      <label for="usuario">Usuario:</label>
      <input type="text" id="usuario">
      <br><br>
      <label  for="email">Email:</label>
      <input type="text" id="email">
      <br><br>
      <!-- <span id="campoDni">
      <label  id="labeldni" for="dni">DNI:</label>
      <input type="text" id="dni">
      </span> -->
    </div> */

	 let div2 = document.createElement("div");
	div2.setAttribute("id","formulario");
	let h21 = document.createElement("h2");
	h21.textContent = "Datos Usuario";
	div2.appendChild(h21);
	