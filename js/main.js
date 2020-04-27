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
    secciones[9] = document.getElementById("seccion-preguntas");
    secciones[10] = document.getElementById("seccion-tips");
    secciones[11] = document.getElementById("seccion-contactos");
    secciones[12] = document.getElementById("seccion-informacion");
    secciones[13] = document.getElementById("seccion-instrucciones");
    secciones[14] = document.getElementById("seccion-tramite");
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

/* Funcniones - formularios ------------------------------------------------------*/
function MostrarFormulario(id_formulario) {
    let img = document.getElementById("masInfo-formulario");
    let formulario = document.getElementById("formulario");
    let formulario2 = document.getElementById("formulario-formulario");
    let p = document.getElementById("p-formulario");
    let p2 = document.getElementById("p2-formulario");
    let h1 = document.getElementById("h1-formulario");
    let btn = document.getElementById("btnPrincipal-formulario");
    let btnCopia = document.getElementById("btnCopia-formulario");
    let volver1 = document.getElementById("volver-1");
    let volver2 = document.getElementById("volver-2");
    let masInfo = document.getElementById("masInfo-formulario");
    if (id_formulario == "Plan padrino") {
        formulario2.style.top = "14%";
        formulario.classList.remove("oculto");
        p.classList.remove("oculto");
        p.innerHTML = "El padrino hace una inscripción y se encarga de hacer un acompañamiento de su ahijado, dotándolo de una cuota, por medio de la cual, garantizamos su alimentación y atenciones veterinarias; dicha cuota es flexible y permite, brindarle al peludo , todo lo que requiere.";
        p2.classList.add("oculto");
        h1.classList.add("oculto");
        img.setAttribute("src", "img/Componente 16 – 1.png");
        btn.classList.remove("oculto");
        btn.style.width = "128px";
        btn.style.height = "61px";
        btn.style.right = "0px";
        btn.style.backgroundImage = "url('img/Componente\ 19\ –\ 1.png')";
        btn.classList.add("boton");
        volver1.classList.remove("oculto");
        volver2.classList.add("oculto");
        btn.classList.remove("oculto");
        btnCopia.classList.add("oculto");
    } else if (id_formulario == "Voluntariado") {
        img.setAttribute("src", "img/Componente 18 – 1.png");
        formulario2.style.top = "30%";
        formulario2.classList.remove("oculto");
        formulario.classList.remove("oculto");
        p.classList.add("oculto");
        p2.classList.add("oculto");
        h1.classList.add("oculto");
        btn.classList.remove("oculto");
        btn.style.right = "0px";
        btn.style.width = "128px";
        btn.style.height = "61px";
        btn.style.backgroundImage = "url('img/Componente\ 19\ –\ 1.png')";
        btn.classList.add("boton");
        volver1.classList.remove("oculto");
        volver2.classList.add("oculto");
        btn.classList.remove("oculto");
        btnCopia.classList.add("oculto");
    } else if (id_formulario == "Donaciones") {
        img.setAttribute("src", "img/Componente 17 – 1.png");
        formulario.classList.add("oculto");
        formulario2.style.top = "14%";
        p.classList.remove("oculto");
        p.innerHTML = "El 80% de la financiación de O.R.C.A. proviene de las donaciones que las personas que conocen la labor de la institución, otorgan a la misma; ello, porque las cuentas de lo atendido en los diferentes centros veterinarios (como el Centro Veterinario El Poblado), son expuestas para la revisión y conocimiento de todos los integrantes. A la fecha, O.R.C.A. adeuda al CVP una suma de aproximadamente $18.000.000 (dieciocho millones de pesos)."
        p.style.marginBottom = "5%"
        p2.classList.remove("oculto");
        p2.innerHTML = "Puedes ayudar con tu aporte a la cuenta de Ahorros Bancolombia:";
        p2.style.width = "80%";
        p2.style.margin = "auto";
        p2.style.marginBottom = "5%"
        h1.classList.remove("oculto");
        h1.innerHTML = "Fundación ORCA 09759529224";
        h1.style.width = "80%";
        h1.style.margin = "auto";
        btn.style.width = "93px";
        btn.style.height = "73px";
        btn.style.right = "15%";
        btn.style.backgroundImage = "url('img/Enmascarar\ grupo\ 7.png')";
        btn.classList.remove("boton");
        volver1.classList.remove("oculto");
        volver2.classList.add("oculto");
        btn.classList.remove("oculto");
        btnCopia.classList.add("oculto");
    } else if (id_formulario == "submit") {
        h1.innerHTML = "¡Gracias!";
        h1.classList.remove("oculto");
        p.classList.remove("oculto");
        p.innerHTML = "Te estaremos respondiendo la solicitud en tu correo electronico";
        p2.classList.remove("oculto");
        p2.innerHTML = "correoingresado@gmail.com";
        btn.style.backgroundImage = "url('img/Componente\ 20\ –\ 1.png')";
        formulario.classList.add("oculto");
        formulario2.style.top = "30%";
        p2.style.width = "80%";
        p2.style.margin = "auto";
        p2.style.marginBottom = "5%"
        volver1.classList.remove("oculto");
        volver2.classList.add("oculto");
        btn.classList.remove("oculto");
        btnCopia.classList.add("oculto");
    } else {
        h1.innerHTML = "¡Gracias!";
        h1.classList.remove("oculto");
        p.classList.remove("oculto");
        p.innerHTML = "Te estaremos respondiendo la solicitud en tu correo electronico";
        p2.classList.remove("oculto");
        p2.innerHTML = "correoingresado@gmail.com";
        btn.style.backgroundImage = "url('img/Componente\ 20\ –\ 1.png')";
        formulario.classList.add("oculto");
        formulario2.style.top = "30%";
        p2.style.width = "80%";
        p2.style.margin = "auto";
        p2.style.marginBottom = "5%";
        volver2.classList.remove("oculto");
        volver1.classList.add("oculto");
        btn.classList.add("oculto");
        btnCopia.classList.remove("oculto");
        masInfo.setAttribute("src", "img/Componente\ 24\ –\ 1.png")
    }
}
function contactoVeterinario(numVeterinario){
    var link='https://wa.me/'+numVeterinario;
    alert(link);
}