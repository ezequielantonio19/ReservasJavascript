const inputName = document.querySelector ("#input-nombre")
const inputApellido = document.querySelector ("#input-apellido")
const inputHuesped = document.querySelector ("#input-huesped")
const inputFechaI = document.querySelector ("#input-fechaI")
const inputFechaS = document.querySelector ("#input-fechaS")  
 
const respName = document.querySelector ("#respNombre")
const respApellido = document.querySelector ("#respApellido")
const respHuesped = document.querySelector ("#respHuesped")
const respFechaI = document.querySelector ("#respFechaI")
const respFechaS = document.querySelector ("#respFechaS")

const form = document.querySelector (".formulario")
const respuesta = document.querySelector (".respuesta")



inputName.addEventListener("input",() => {
    respName.innerText = "Bienvenid@ " + inputName.value;

});

inputApellido.addEventListener("input",() => {
    respApellido.innerText = inputApellido.value;
});

inputHuesped.addEventListener("input",() => {
    respHuesped.innerText = "Usted solicitó ingreso para " + inputHuesped.value + " huesped/es";
});

inputFechaI.addEventListener("input", () => {
    const fecha = new Date(inputFechaI.value) ;
    respFechaI.innerHTML = "Ingresando el día " + fecha.toLocaleDateString();
  });

  inputFechaS.addEventListener("input", () => {
    const fecha = new Date(inputFechaS.value) ;
    respFechaS.innerHTML = "Y solicitando su salida el día " + fecha.toLocaleDateString();
  });

  form.addEventListener("submit", (evt) => {
    evt.preventDefault ();
   form.classList.add("confirmar");
   //respuesta.classList.add("confirmar2");
  })