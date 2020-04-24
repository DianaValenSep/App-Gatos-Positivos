var secciones = [];
var tiempo_splash = 2500;
var tiempo_nivel = 1000;
window.onload = function() {
    inicializarReferencias();
    setTimeout(cambiarSplash, tiempo_splash);
}

function inicializarReferencias() {
    secciones[1] = document.getElementById("seccion-splash");
    secciones[2] = document.getElementById("seccion-info");
    secciones[3] = document.getElementById("seccion-home");
    secciones[4] = document.getElementById("seccion-orca");
    secciones[5] = document.getElementById("seccion-colaboraciones");
    secciones[6] = document.getElementById("seccion-adopciones");
    secciones[7] = document.getElementById("seccion-ayudas");
    secciones[8] = document.getElementById("seccion-formulario");
}

function cambiarSplash() {
    secciones[1].className = "splash oculto";
    secciones[2].className = "info";
}


function cambiarSeccion(id_seccion) {
    for (var i in secciones) {
        secciones[i].classList.add("oculto");
    }
    secciones[id_seccion].classList.add("animated");
    secciones[id_seccion].classList.add("headShake");
    secciones[id_seccion].classList.remove("oculto");
}

/* Funciones - info ----------------------------------------------------------*/
function SiguientePagInfo() {
    let H1 = document.getElementById("h1-info");
    let P = document.getElementById("p-info");
    let img = document.getElementById("imgGato-info");
    let regreso = document.getElementById("botonizq-info");
    let siguiente = document.getElementById("boton-info");
    let indice1 = document.getElementById("indice1-info");
    let indice2 = document.getElementById("indice2-info");
    let indice3 = document.getElementById("indice3-info");
    comenzar = document.getElementById("imgSaltar");
    if (H1.innerHTML == "Positivo") {
        H1.innerHTML = "Gatos";
        P.innerHTML = "Ellos merecen un hogar que les pueda brindar amor y bienestar, tu mereces que te alegren la vida."
        img.setAttribute("src", "./img/gato.PNG");
        regreso.classList.remove("oculto");
        indice1.setAttribute("src", "./img/Elipse 7.png");
        indice2.setAttribute("src", "./img/Elipse 6.png");
    } else {
        H1.innerHTML = "Positivo";
        P.innerHTML = "Queremos conectarte con estos animales que merecen la pena darles un hogar y amor.";
        img.setAttribute("src", "img/Grupo 26.png");
        siguiente.classList.add("oculto");
        comenzar.setAttribute("src", "img/Grupo 312.png");
        indice2.setAttribute("src", "./img/Elipse 7.png");
        indice3.setAttribute("src", "./img/Elipse 6.png");
    }
}

function RetrocederPagInfo() {
    let H1 = document.getElementById("h1-info");
    let P = document.getElementById("p-info");
    let img = document.getElementById("imgGato-info");
    let regreso = document.getElementById("botonizq-info");
    let siguiente = document.getElementById("boton-info");
    let indice1 = document.getElementById("indice1-info");
    let indice2 = document.getElementById("indice2-info");
    let indice3 = document.getElementById("indice3-info");
    if (H1.innerHTML == "Gatos") {
        H1.innerHTML = "Positivo";
        P.innerHTML = "En esta app encontrarás todo lo que necesitas si estas interesado en conocer más sobre los gatos positivos a sida y a leucemia felina."
        img.setAttribute("src", "./img/Grupo 26.png");
        regreso.classList.add("oculto");
        indice1.setAttribute("src", "./img/Elipse 6.png");
        indice2.setAttribute("src", "./img/Elipse 7.png");
    } else {
        H1.innerHTML = "Gatos";
        P.innerHTML = "Ellos merecen un hogar que les pueda brindar amor y bienestar, tu mereces que te alegren la vida.";
        img.setAttribute("src", "./img/gato.PNG");
        siguiente.classList.add("oculto");
        siguiente.classList.remove("oculto");
        indice3.setAttribute("src", "./img/Elipse 7.png");
        indice2.setAttribute("src", "./img/Elipse 6.png");
        comenzar.setAttribute("src", "img/Grupo 311.png");
    }
}

/* Funciones - colaboraciones ----------------------------------------------------------*/
function MostrarColaboraciones(id_colaboracion) {
    let titulo = document.getElementById("titulo-colaboraciones");
    let texto = document.getElementById("p-colaboraciones");
    let btnPrincipal = document.getElementById("btnPrincipal-colaboraciones");
    let btnColaboracion1 = document.getElementById("btnColaboracion1");
    let btnColaboracion2 = document.getElementById("btnColaboracion2");
    let btnColaboracion3 = document.getElementById("btnColaboracion3");
    if (id_colaboracion == "Plan padrino") {
        titulo.innerHTML = "Plan padrino";
        texto.innerHTML = "Los padrinos, le devuelven a un ser abandonado, la certeza de ser un alguien importante, una vida llena de oportunidades; la posibilidad de olvidar, los padecimientos del pasado, el dolor, el hambre, el frío y el miedo, sabiendo que hay alguien que los apoya, que los quiere y los acompaña hasta que logren el fin de hallar un lindo hogar.";
        btnPrincipal.style.backgroundImage = "url('img/Componente 4 – 1.png')";

        btnColaboracion1.style.paddingTop = 20;
        btnColaboracion1.style.backgroundColor = "rgb(237,181,14)";
        btnColaboracion2.style.paddingTop = 12;
        btnColaboracion2.style.backgroundColor = "rgb(253, 198, 32)";
        btnColaboracion3.style.paddingTop = 12;
        btnColaboracion3.style.backgroundColor = "rgb(253, 198, 32)";
    } else if (id_colaboracion == "Voluntariado") {
        titulo.innerHTML = "Voluntariado";
        texto.innerHTML = "Buscamos voluntarios que nos ayuden a cambiar la realidad de los animales que sufren. Tu puedes hacer parte de nuestra red de voluntarios.";
        btnPrincipal.style.backgroundImage = "url('img/Componente 11 – 1.png')";

        btnColaboracion1.style.paddingTop = 12;
        btnColaboracion1.style.backgroundColor = "rgb(253, 198, 32)";
        btnColaboracion2.style.paddingTop = 20;
        btnColaboracion2.style.backgroundColor = "rgb(237,181,14)";
        btnColaboracion3.style.paddingTop = 12;
        btnColaboracion3.style.backgroundColor = "rgb(253, 198, 32)";
    } else if (id_colaboracion == "Donaciones") {
        titulo.innerHTML = "Donaciones";
        texto.innerHTML = "O.R.C.A. es una Organización sin ánimo de lucro, en ningún momento se generan ingresos para los miembros de la fundación, antes por el contrario, el mayor porcentaje de los mismos, deben aportar una cuota mensual para el mantenimiento de la institución y para poder cancelar los gastos que se derivan de las atenciones de los perros y gatos.";
        btnPrincipal.style.backgroundImage = "url('img/Componente 12– 1.png')";

        btnColaboracion1.style.paddingTop = 12;
        btnColaboracion1.style.backgroundColor = "rgb(253, 198, 32)";
        btnColaboracion2.style.paddingTop = 12;
        btnColaboracion2.style.backgroundColor = "rgb(253, 198, 32)";
        btnColaboracion3.style.paddingTop = 20;
        btnColaboracion3.style.backgroundColor = "rgb(237,181,14)";
    }
}