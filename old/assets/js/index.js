//Variable que indica si la pagina esta en ingles (por defalut lo esta)
var english = true;

//Funcion para cambiar el lenguaje
function changeLang(){
    if(english){
        spa();
    }
    else{
        eng();
    }
    english = !english;
}

//Cambia el lenguaje a español
function spa(){
    $("#lang").text("English");
    $("#aboutLink").text("Acerca de");
    $("#portfolioLink").text("Portafolio");
    $("#contactLink").text("Contactanos");
    $("#intro").text("Estamos quebrados, por eso el ramen en el nombre");
    $("#aboutBtn").text("Sobre Nosotros");
    $("#titleAbout").text("Hecho con amor y hambre desde MX 🇲🇽");
    $("#shortDesc").text("Somos un equipo de desarrollo de software Mexicano con miembros profesionales y estudiantes de todo el país.");
    $("#titleContact").text("Pongamonos en contacto!");
    $("#contactDesc").text("Listo para comenzar un proyecto con nosotros? Envianos un email y contestaremos ASAP!");
    $("#titlePortfolio").text("Nuestro trabajo 👀");
}

//Cambia el lenguaje a ingles
function eng()
{
    //Como es el lenguaje default solo recarga la pagina xdd
    location.reload();
}

// Modal Image Gallery
function onClick(element) {
    document.getElementById("img01").src = element.src;
    document.getElementById("modal01").style.display = "block";
    var captionText = document.getElementById("caption");
    captionText.innerHTML = element.alt;
  }
  
  
  // Toggle between showing and hiding the sidebar when clicking the menu icon
  var mySidebar = document.getElementById("mySidebar");
  
  function w3_open() {
    if (mySidebar.style.display === 'block') {
      mySidebar.style.display = 'none';
    } else {
      mySidebar.style.display = 'block';
    }
  }
  
  // Close the sidebar with the close button
  function w3_close() {
      mySidebar.style.display = "none";
  }