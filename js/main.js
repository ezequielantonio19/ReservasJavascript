/*const agregarNombre = (evt) => {
  evt.preventDefault ()
const nombre1 = document.querySelector ('#Inicio').value
}*/


const alertaForm = document.querySelector("#alerta-form");
const alertaInput = document.querySelector("#alerta-input");

alertaForm.addEventListener("submit", (e) => {
  e.preventDefault();
  alert('Bienvenid@ ' + alertaInput.value);
  console.log (alertaInput.value)
});


const nacimiento = document.querySelector("#fechaNac")
const edad = document.querySelector("#nacimiento");

nacimiento.addEventListener("submit", (e) => {
  e.preventDefault();
  
  console.log(edad.value);

  if (edad >= 18) {
    alert("Podes ingresar al sitio"); console.log("Ingresa al sitio")}


else { alert("Acceso denegado +18"); console.log("Acceso denegado") }
  

});
const edadJSON = JSON.stringify(edad);

localStorage.setItem ("DatoEdad" , edadJSON);



const pasajeros = document.querySelector ('#pasajeros')
const cantidad = document.querySelector ('#cantidadPasajeros')

pasajeros.addEventListener ("submit" , (e) =>{
  e.preventDefault();
  if (cantidad <= 2) { alert("Solicitó habitación simple"); }
  else if (cantidad > 2 && cantidad <= 4) { alert("Solicitó habitación doble"); }
})

/*if (edad >= 18) {
  alert("Podes ingresar al sitio"); console.log("Ingresa al sitio")



  let pasajeros = parseInt(prompt("Ingrese cantidad de pasajeros:"));

  while (pasajeros >= 5 || pasajeros <= 0) {
    alert("Solo habitaciones permitidas hasta 4 personas");
    pasajeros = parseInt(prompt("Por favor ingrese cantidad de pasajeros permitida"));
  }

  alert("Poseemos habitaciones disponibles");

  if (pasajeros <= 2) { alert("Solicitó habitación simple"); }
  else if (pasajeros > 2 && pasajeros <= 4) { alert("Solicitó habitación doble"); }

  console.log(pasajeros);








  let desayunar = prompt("Solicite Opcion de desayuno");


  console.log(desayunar);

  const desayuno = (nombre, desayunar) => {
    console.log(nombre + " usted eligió " + desayunar + " como opción de desayuno ")
  }
  desayuno(nombre, desayunar);

  alert("Su pedido de desayuno de " + desayunar + " se registró correctamente")

  const usuario1 = {
    nombre: nombre,
    edad: edad,




  }

  console.log(usuario1)

  const datos =
    [nombre, edad, pais, ciudad,



    ]

  console.log(datos)


  console.log(datos.length)
  for (let i = 0; i < datos.length; i++) {
    console.log(datos[i])
  }

  const opcion = ["te", "cafe", "mate", "tostadas", "jugo", "americano", "huevos", "medialunas", "facturas", "pan",];

  if (opcion.includes(desayunar)) {
    console.log(opcion.indexOf(desayunar));
  } else { alert(desayunar + " no se encuentra disponible como desayuno")
  }
  
}

else { alert("Acceso denegado +18"); console.log("Acceso denegado") }*/



//function mostrarAlerta() {alert ("Bienvenid@ " + nombre)} 




















