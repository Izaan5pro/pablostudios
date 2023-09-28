
//No sirve (Practica)
//fechaActual = new Date();
//console.log(fechaActual);
//console.log(fechaActual.getDate());
//console.log(fechaActual.getMonth())
//console.log(fechaActual.getFullYear())
//console.log(fechaActual.getDay())

//Funciones del Reloj

const time = document.getElementById('time');
const date = document.getElementById('date');

const monthNames = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
    "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
];

const interval = setInterval(() => {

    const local = new Date();
    
    let day = local.getDate(),
        month = local.getMonth(),
        year = local.getFullYear();

    time.innerHTML = local.toLocaleTimeString();
    date.innerHTML = `${day} ${monthNames[month]} ${year}`;

}, 1000);