const inputName = document.querySelector ("#input-nombre")
const inputApellido = document.querySelector ("#input-apellido")
const inputHuesped = document.querySelector ("#input-huesped")
const inputCiudad = document.querySelector ("#input-ciudad")
const inputFechaI = document.querySelector ("#input-fechaI")
const inputFechaS = document.querySelector ("#input-fechaS")  
 
const respName = document.querySelector ("#respNombre")
const respApellido = document.querySelector ("#respApellido")
const respCiudad = document.querySelector ("#respCiudad")
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

inputCiudad.addEventListener("select",() => {
  respCiudad.innerHTML = "En nuestro hotel Ro de la ciudad de " + inputCiudad.value ;
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
   respuesta.classList.remove("confirmar");
  })


  //6488c8e8e6e957ce5e8d887a9b7773f5

  //https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

  const btn = document.querySelector('#btn');

  btn.addEventListener('click', ()=> {

    const key = "6488c8e8e6e957ce5e8d887a9b7773f5";

    let ciudad = document.querySelector('#ciudad').value;
    ciudad = encodeURIComponent (ciudad);

    if (ciudad !=""){
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${key}
      `

      //console.log(url)

      fetch (url)
      .then( res =>{
        return res.json()
      })

      .then(clima =>{

        console.log(clima);
        let temp = clima.main.temp;
        tempC = temp - 273.15;
        let html = document.querySelector('#temperatura');
        html.innerHTML = tempC.toFixed(0) + "°";

      })
      .catch()
    }


  });