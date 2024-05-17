// Obtener el modal
var modal = document.getElementById("news-modal");

// Obtener el elemento de título del modal
var modalTitle = document.getElementById("modal-title");

// Obtener el elemento de descripción del modal
var modalDescription = document.getElementById("modal-description");

// Obtener el botón de cierre del modal
var closeBtn = document.getElementsByClassName("close")[0];

// Obtener todos los enlaces "Leer más"
var readMoreLinks = document.getElementsByClassName("read-more");

// Recorrer todos los enlaces "Leer más" y agregar un evento de clic
for (var i = 0; i < readMoreLinks.length; i++) {
    readMoreLinks[i].addEventListener("click", function() {
        var newsId = this.getAttribute("data-news");
        openModal(newsId);
    });
}

// Función para abrir el modal con el contenido de la noticia
function openModal(newsId) {
    modalTitle.innerText = "Título de la noticia " + newsId;
    modalDescription.innerText = "Descripción completa de la noticia " + newsId;

    modal.style.display = "block";
}

// Cerrar el modal al hacer clic en el botón de cierre
closeBtn.onclick = function() {
    modal.style.display = "none";
}

// Cerrar el modal al hacer clic fuera del cuadro de diálogo
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
var newsData = {
    "1": {
        title: "Inauguración de Nuevas Instalaciones en la Residencia Universitaria",
        description: "Nos complace anunciar la apertura de nuestras nuevas instalaciones, que incluyen un moderno gimnasio, una sala de estudio equipada con la última tecnología y un salón de juegos para que nuestros residentes puedan relajarse y socializar. La ceremonia de inauguración se llevará a cabo el próximo viernes a las 17:00, seguida de una recepción con aperitivos. ¡Esperamos verlos allí!"
    },
    "2": {
        title: "Programa de Actividades de Verano para Residentes",
        description: "Este verano, la residencia universitaria ofrece una serie de actividades diseñadas para enriquecer la experiencia de nuestros residentes. Entre las actividades destacadas se incluyen talleres de cocina, clases de yoga al aire libre, y excursiones a destinos locales de interés histórico y cultural. Las inscripciones ya están abiertas y los cupos son limitados. No te pierdas la oportunidad de participar y hacer nuevos amigos mientras disfrutas del verano."
    },
    "3": {
        title: "Consejos de Seguridad y Protocolos de Emergencia",
        description: "La seguridad de nuestros residentes es nuestra máxima prioridad. Hemos actualizado nuestros protocolos de emergencia y queremos recordarles algunos consejos importantes para mantenerse seguros. Por favor, revisen el documento adjunto con las nuevas directrices de evacuación, puntos de reunión y contactos de emergencia. Además, llevaremos a cabo un simulacro de evacuación el próximo lunes a las 10:00 para asegurarnos de que todos estén preparados en caso de una emergencia real."
    }
};

// ...

// Función para abrir el modal con el contenido de la noticia
function openModal(newsId) {
    var news = newsData[newsId];
    modalTitle.innerText = news.title;
    modalDescription.innerText = news.description;
    modal.style.display = "block";
}