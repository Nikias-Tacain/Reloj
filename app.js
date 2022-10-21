let contador = document.getElementById("contador")
let dia = document.getElementById("dia")

let fecha = new Date();

let diaSemana = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];
let mesAnio = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

dia.innerHTML = `${diaSemana[fecha.getDay()]}, ${fecha.getDate()} de  ${mesAnio[fecha.getMonth()]} de ${fecha.getFullYear()}`;

setInterval(()=>{
    let hora = new Date();
    contador.innerHTML = hora.toLocaleTimeString();
})