const saludo = "Bienvenid@ "

let nombre = prompt ("Ingrese su nombre")

console.log (saludo + nombre)
alert (saludo + nombre)


let actual = 2023;
let nacimiento = prompt("Ingrese su año de nacimiento:")

let edad = actual - nacimiento;

console.log(edad);




if (edad >= 18) { alert("Podes ingresar al sitio"); console.log ("Ingresa al sitio")

/*let pasajeros = prompt("Ingrese cantidad de pasajeros")
console.log(pasajeros);
if (pasajeros <= 2) { alert("Solicitó habitación simple"); }
else if (pasajeros > 2 && pasajeros <= 4) { alert("Solicitó habitación doble"); }
else { alert("No poseemos habitaciones para esa cantidad de pasajeros"); }*/

let pasajeros = parseInt(prompt("Ingrese cantidad de pasajeros:"));

while (pasajeros>= 5 || pasajeros<=1) {
  alert("Solo habitaciones permitidas hasta 4 personas");
  pasajeros = parseInt(prompt("Por favor ingrese cantidad de pasajeros permitida"));
}

alert("Poseemos habitaciones disponibles");

if (pasajeros <= 2) { alert("Solicitó habitación simple"); }
else if (pasajeros > 2 && pasajeros <= 4) { alert("Solicitó habitación doble"); }

console.log(pasajeros);





let desayunar = prompt("Solicite Opcion de desayuno");

console.log (desayunar);

const desayuno =(nombre, desayunar) => {
    console.log(nombre + " usted eligió " + desayunar + " como opción de desayuno ")
}
desayuno(nombre , desayunar );

alert ("Su pedido de desayuno de " + desayunar + " se registró correctamente")

}

else { alert("Acceso denegado +18"); console.log ("Acceso denegado")}



















