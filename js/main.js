const saludo = "Bienvenid@ "

let nombre = prompt("Ingrese su nombre")

console.log(saludo + nombre)
alert(saludo + nombre)


let actual = 2023;
let nacimiento = prompt("Ingrese su año de nacimiento:")

let edad = actual - nacimiento;

console.log(edad);

let pais = prompt("País de orígen?")

let ciudad = prompt("Ciudad?")




if (edad >= 18) {
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
  } else { alert(desayunar + " no se encuentra disponible como desayuno") }
}

else { alert("Acceso denegado +18"); console.log("Acceso denegado") }























