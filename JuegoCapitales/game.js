const paisesFacil = {
  "Alemania": "Berlín", "Argentina": "Buenos Aires", "Austria": "Viena", "Bolivia": "Sucre", "Brasil": "Brasilia",
  "Canadá": "Ottawa", "República Checa": "Praga", "Chile": "Santiago", "China": "Pekín",
  "Colombia": "Bogotá", "Corea del Sur": "Seúl", "Cuba": "La Habana", "Ecuador": "Quito",
  "El Salvador": "San Salvador", "España": "Madrid", "Francia": "París", "Grecia": "Atenas", "Guatemala": "Ciudad de Guatemala",
  "Italia": "Roma", "Japón": "Tokio", "México": "Ciudad de México", "Mónaco": "Mónaco",
  "Nicaragua": "Managua", "Países Bajos": "Ámsterdam", "Panamá": "Ciudad de Panamá", "Paraguay": "Asunción",
  "Perú": "Lima", "Portugal": "Lisboa", "Inglaterra": "Londres", "Rusia": "Moscú",
  "Suecia": "Estocolmo", "Turquía": "Ankara", "Venezuela": "Caracás", "Uruguay": "Montevideo"
};

const paisesMedio = {
  "Afganistán": "Kabul", "Albania": "Tirana", "Andorra": "Andorra la Vieja", "Arabia Saudita": "Riad",
  "Argelia": "Argel", "Armenia": "Ereván", "Australia": "Canberra", "Bahamas": "Nasáu",
  "Bélgica": "Bruselas", "Bielorrusia": "Minsk", "Bosnia y Herzegovina": "Sarajevo", "Bulgaria": "Sofía",
  "Camboya": "Nom Pen", "Camerún": "Yaundé", "Qatar": "Doha", "Chipre": "Nicosia",
  "Ciudad del Vaticano": "Ciudad del Vaticano", "Corea del Norte": "Pionyang", "Costa Rica": "San José",
  "Croacia": "Zagreb", "Dinamarca": "Copenhague", "Djibuti": "Djibuti", "República Dominicana": "Santo Domingo",
  "Egipto": "El Cairo", "Emiratos Árabes Unidos": "Abu Dabi", "Eslovaquia": "Bratislava",
  "Eslovenia": "Liubliana", "Estonia": "Tallin", "Finlandia": "Helsinki", "Georgia": "Tiflis",
  "Ghana": "Acra", "Guinea Bisáu": "Bisáu", "Haití": "Puerto Príncipe", "India": "Nueva Delhi",
  "Indonesia": "Yakarta", "Irán": "Teherán", "Irlanda": "Dublín", "Islandia": "Reikiavik",
  "Israel": "Jerusalén", "Jamaica": "Kingston", "Kenia": "Nairobi", "Kuwait": "Kuwait",
  "Luxemburgo": "Ciudad de Luxemburgo", "Malasia": "Kuala Lumpur", "Malta": "La Valeta", "Marruecos": "Rabat", "Mongolia": "Ulán Bator",
  "Montenegro": "Podgorica", "Nigeria": "Abuya", "Noruega": "Oslo", "Nueva Zelanda": "Wellington", "Polonia": "Varsovia",
  "Rumania": "Bucarest", "San Marino": "San Marino", "Santo Tomé y Príncipe": "Santo Tomé", "Serbia": "Belgrado",
  "Singapur": "Singapur", "Senegal": "Dakar", "Sudáfrica": "Pretoria", "Suiza": "Berna", "Tailandia": "Bangkok",
  "Togo": "Lomé", "Trinidad y Tobado": "Puerto España", "Túnez": "Túnez", "Ucrania": "Kiev", "Vietnam": "Hanói"
};

const paisesDificil = {
  "Abjasia": "Sujumi", "Angola": "Luanda", "Antigua y Barbuda": "Saint John", "Azerbaiyán": "Bakú", "Bangladés": "Daca", "Barbados": "Bridgetown",
  "Bahréin": "Manama", "Belice": "Belmopán", "Benín": "Porto Novo", "Botsuana": "Gaborone", "Brunéi": "Bandar Seri Begawan", "Burkina Faso": "Uagadugú",
  "Burundi": "Gitega", "Bután": "Timbu", "Cabo Verde": "Praia", "Camboya": "Pnom Pen", "Chad": "Yamena", "Comoras": "Moroni", "Costa de Marfil": "Yamusukro", "Dominica": "Roseau", 
  "Escocia": "Edimburgo", "Eritrea": "Asmara", "Etiopía": "Adís Abeba", "Filipinas": "Manila", "Fiji": "Suva", "Gabón": "Libreville",  "Gales": "Cardiff", 
  "Gambia": "Banjul", "Granada": "Saint George", "Guinea": "Conakri", "Guinea Ecuatorial": "Malabo", "Guyana": "Georgetown", "Hungría": "Budapest", 
  "Irlanda del Norte": "Belfast", "Irak": "Bagdad", "Islas Marshall": "Majuro",  "Israel": "Jerusalén", "Jordania": "Aman",   "Kazajistán": "Astaná", 
  "Kirguistán": "Biskek", "Kiribati": "Tarawa", "Laos": "Vientián", "Lesoto": "Maseru", "Letonia": "Riga", "Líbano": "Beirut", "Liberia": "Monrovia", "Libia": "Trípoli",
  "Liechnestein": "Vadúz", "Lituani": "Vilna", "Macedonia del Norte": "Skopie", "Madagascar": "Antananarivo", "Malaui": "Lilongüe", "Maldivas": "Malé", "Mali": "Bamako",
  "Mauricio": "Port Louis", "Mauritania": "Nuakchot", "Micronesia": "Palikir", "Moldavia": "Chisinau", "Mozambique": "Maputo", "Myanmar/Birmania": "Naipyidó", "Namibia": "Windhoek", "Nauru": "Yaren",
  "Nepal": "Katmandú", "Níger": "Niamey", "Omán": "Mascate", "Pakistán": "Islamabad", "Palaos": "Ngerulmud", "Palestina": "Ramala", "Papúa Nueva Guinea": "Port Moresby",
  "Ruanda": "Kigali", "Islas Salomon": "Honiara", "Samoa": "Apia", "San Cristobal y Nieves": "Basseterre", "San Vicente y Granadinas": "Kingstown", "Santa Lucia": "Castries",
  "Seychelles": "Victoria", "Sierra Leona": "Freetown", "Siria": "Damasco", "Somalia": "Mogadiscio", "Sri Lanka": "Sri Jayawardenapura Kotte", "Suazilandia/Esuatini": "Mbabane",
  "Sudan": "Jartrum", "Surinam": "Paramaribo", "República Centroafricana": "Bangui", "República Congo": "Brazzaville", "República Democrática del Congo": "Kinsasa", "Tanzania": "Dodoma", 
  "Tayikistán": "Dusambé", "Timor Oriental": "Dili", "Tonga": "Nukualofa", "Turkmenistán": "Asjabad", "Tuvalu": "Funafuri", "Uganda": "Kampala", "Uzbekistán": "Taskent", 
  "Vanuatú": "Port Vila", "Yemén": "Saná", "Zambia": "Lusaka", "Zimbabue": "Harare"
};



let preguntas = [];
let preguntaActual = 0;
let respuestasCorrectas = 0;
let respuestasIncorrectas = 0;
let vidas = 3;
let dificultad = "facil";
let timer;
let tiempoRestante = 10;

function barajar(array) {
  return array.sort(() => Math.random() - 0.5);
}

function iniciarJuego(nivel) {
  dificultad = nivel;
  document.getElementById("seleccion-dificultad").style.display = "none";
  document.getElementById("game-container").style.display = "block";
  reiniciarJuego();
}

function generarPreguntas(diccionario, cantidad = 10, cantidadOpciones = 4) {
  const paises = Object.keys(diccionario);
  const seleccionados = barajar(paises).slice(0, cantidad);

  return seleccionados.map(pais => {
    const correcta = diccionario[pais];
    const opcionesIncorrectas = barajar(
      Object.values(diccionario).filter(capital => capital !== correcta)
    ).slice(0, cantidadOpciones - 1);
    const opciones = barajar([correcta, ...opcionesIncorrectas]);

    return {
      pais,
      correcta,
      opciones
    };
  });
}

function mostrarPregunta() {
  const pregunta = preguntas[preguntaActual];
  const contenedor = document.getElementById("opciones");
  const preguntaTexto = document.getElementById("pregunta");
  const vidasTexto = document.getElementById("vidas");
  const temporizador = document.getElementById("temporizador");

  preguntaTexto.textContent = `Pregunta ${preguntaActual + 1} de ${preguntas.length}: ¿Cuál es la capital de ${pregunta.pais}?`;
  vidasTexto.textContent = `Vidas: ${vidas}`;
  document.getElementById("contador-respuestas").textContent = `Correctas: ${respuestasCorrectas} | Incorrectas: ${respuestasIncorrectas}`;
  document.getElementById("numero-pregunta").textContent = `Pregunta ${preguntaActual + 1} de ${preguntas.length}`;
  contenedor.innerHTML = "";
  temporizador.textContent = "";

  // Restablecemos el tiempo del temporizador para la nueva pregunta
  tiempoRestante = 10;
  temporizador.textContent = tiempoRestante;

  // Si es nivel medio, iniciamos el temporizador
  if (dificultad === "medio" || dificultad === "dificil") {
    tiempoRestante = 10;
    actualizarTemporizador();
    iniciarTemporizador();
  } else {
  detenerTemporizador(); // Por si venís de una pregunta anterior en modo medio
  temporizador.textContent = "";
}
  if (dificultad === "dificil") {
    // Dividimos las opciones en dos filas
    const fila1 = document.createElement("div");
    fila1.classList.add("fila-opciones");

    const fila2 = document.createElement("div");
    fila2.classList.add("fila-opciones");

    // Distribuimos las opciones entre las dos filas
    const opcionesFila1 = pregunta.opciones.slice(0, 4);
    const opcionesFila2 = pregunta.opciones.slice(4, 8);

 [...opcionesFila1, ...opcionesFila2].forEach((opcion, index) => {
    const btn = document.createElement("button");
    btn.textContent = opcion;
    btn.classList.add("boton-opcion");
    btn.onclick = () => {
      detenerTemporizador();
      verificarRespuesta(opcion);
    };

    if (index < 4) {
      fila1.appendChild(btn);
    } else {
      fila2.appendChild(btn);
    }
  });

    contenedor.appendChild(fila1);
    contenedor.appendChild(fila2);
} 
 else {
  // Para las dificultades fácil y media: una sola fila centrada
  const fila = document.createElement("div");
  fila.classList.add("fila-opciones");

  pregunta.opciones.forEach(opcion => {
    const btn = document.createElement("button");
    btn.textContent = opcion;
    btn.classList.add("boton-opcion"); // agregamos clase para estilos consistentes
    btn.onclick = () => {
      detenerTemporizador();
      verificarRespuesta(opcion);
    };
    fila.appendChild(btn);
  });

  contenedor.appendChild(fila);
}
}


function iniciarTemporizador() {
  detenerTemporizador(); // Para que no queden múltiples timers corriendo
  tiempoRestante = 10;
  actualizarTemporizador();
  timer = setInterval(() => {
    tiempoRestante--;
    actualizarTemporizador();
    if (tiempoRestante <= 0) {
      detenerTemporizador();
      vidas--;
      siguiente(); // pasar a la siguiente pregunta si el tiempo se termina
    }
  }, 1000);
}

function detenerTemporizador() {
  clearInterval(timer);
}

function actualizarTemporizador() {
  const temporizador = document.getElementById("temporizador");
  temporizador.textContent = `Tiempo: ${tiempoRestante}s`;
}

function verificarRespuesta(respuestaSeleccionada) {
  const esCorrecta = respuestaSeleccionada === preguntas[preguntaActual].correcta;
  
  // Sumar al contador correcto
  if (esCorrecta) {
    respuestasCorrectas++;
  } else {
    respuestasIncorrectas++;
  }

  // Actualizar el texto en pantalla
  document.getElementById("contador-respuestas").textContent =
    `Correctas: ${respuestasCorrectas} | Incorrectas: ${respuestasIncorrectas}`;

  // Mostrar si la respuesta es correcta o incorrecta
  const respuestaTexto = esCorrecta ? "¡Correcto!" : "Incorrecto";
  const respuestaContenedor = document.createElement("p");
  respuestaContenedor.textContent = respuestaTexto;
  document.getElementById("game-container").appendChild(respuestaContenedor);

  const botones = document.querySelectorAll("#opciones button");
  botones.forEach(btn => btn.disabled = true);

  // Esperar 2 segundos antes de continuar
  setTimeout(() => {
    respuestaContenedor.remove();
    if (!esCorrecta) vidas--; // Si la respuesta es incorrecta, se pierde una vida
    siguiente();
  }, 2000);
}


function siguiente() {
  if (vidas === 0) {
    alert("¡Perdiste! Te quedaste sin vidas.");
    location.reload();
    return;
  }

  preguntaActual++;

  if (preguntaActual >= preguntas.length) {
    alert("¡Ganaste! Completaste todas las preguntas.");
    location.reload();
  } else {
    mostrarPregunta();
  }
}

function reiniciarJuego() {
  let diccionario;
  let cantidadPreguntas = 10;
  let cantidadOpciones = 4;

  const cantidad = dificultad === "dificil" ? 20 : 10;
  cantidadOpciones = dificultad === "dificil" ? 8 : 4;

  if (dificultad === "facil") {
    diccionario = paisesFacil;
  } else if (dificultad === "medio") {
    diccionario = paisesMedio;
  } else if (dificultad === "dificil") {
    diccionario = paisesDificil;
    cantidadPreguntas = 20;
    cantidadOpciones = 8;
  }

  preguntas = generarPreguntas(diccionario, cantidad, cantidadOpciones);
  preguntaActual = 0;
  vidas = 3;
  mostrarPregunta();
}
