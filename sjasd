// js con funciones principales de calculadora imc
// autor: Andres Forero
// fecha: 30/abril/2025
"use strict";
//Inicializo las variables y con el document. ingreso la informacion de las 
//etiquetas del html
const datos_formulario = document.querySelector('#form-data');
const divInferior = document.querySelector('#div-infer');
const botoncalcular = document.querySelector('#boton-calcular');
const formulario = document.getElementById("form-data");

//evento principal de la app, solo es usar cuando se oprime el boton de calcular
botoncalcular.addEventListener("click",(e) =>{
    //inicializo una variable donde voy a meter el url de la imagen que necesite segun el imc
    let imagen = "";
    //ingreso los datos del formulario en datos
    const datos = Object.fromEntries(new FormData(datos_formulario).entries());
    const imc = datos.peso/(datos.estatura * datos.estatura);
    //verifico que el calculo del imc sea un valor valido
    if (isNaN(imc) || imc == Infinity || imc == 0 || datos.estatura > 4) {
        imagen = "./img/error.png";
        //ademas del mensaje de error se crea el boton-nuevo para poder volver
        //al estado inicial de la pagina
        divInferior.innerHTML = `
        <h1>ERROR!</h1>
        <h1> Ingrese valores validos</h1>
        <p>En peso solo puede ingresar numeros mayores a 0 <br>
        En estatura solo se puede ingresar numeros mayores a 0 y menores que 3 <br>
        y se requiere ingresar por lo menos el peso y la estatura para continuar<p>
        <img src="${imagen}" alt=""> 
        <div>
        <button onclick="nuevo()" id="boton-nuevo">Nuevo</button>
        </div>`;
    }
    else{
        //inizializo la variable salud para almacenar la cadena de texto del resultado de su imc
        let salud = "";
        if (imc < 18.5) {
            salud = "tiene el peso bajo";
            imagen = "./img/bajopeso.png";
        }
        else if (imc > 18.5 && imc < 25) {
            salud = "tiene el peso normal";
            imagen = "./img/pesosano.png";
        }
        else if (imc > 25 && imc < 30) {
            salud = "tiene sobrepeso";
            imagen = "./img/sobrepeso.png";
        }
        else{
            salud = "tiene obesidad";
            imagen = "./img/obesidad.png";
        }
        //con innerHTML agrego a la pagina los datos segun el imc
        //ademas de los datos se crea el boton-nuevo para poder volver
        //al estado inicial de la pagina
        divInferior.innerHTML = `
        <h1> Tiene un imc de ${imc} <br> ${salud}</h1>
        <img src="${imagen}" alt=""> 
        <div>
        <button onclick="nuevo()" id="boton-nuevo">Nuevo</button>
        </div>`;
    }
    //agrego todos los inputs en la variable entradas para poder desactivarlos
    const entradas = formulario.querySelectorAll("input");
    entradas.forEach(entrada => {
        entrada.disabled = true;   
    })
    //agrego el boton en un varibale para desactivarlo
    let boton = document.getElementById('boton-calcular');
    boton.disabled = true;
    //preventDefault evita que la pagina se recargue cada vez que se oprime el boton
    e.preventDefault();
})
// funcion flecha que se activa cuando se oprime el boton nuevo
const nuevo = () =>{
    //se vacia la seccion de informacion para volver la pagina como en un inicio
    divInferior.innerHTML = `
    <p></p>`;
    //De la misma manera en que se desactiva los campos del formulario
    //esta funcion activa los campos y los vacia
    const entradas = formulario.querySelectorAll("input");
    entradas.forEach(entrada => {
        entrada.value = "";
        entrada.disabled = false;   
    })
    //esta funcion activa denuevo el boton calcular
    let boton = document.getElementById('boton-calcular');
    boton.disabled = false;
}