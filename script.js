fetch('imagenes.json')
  .then(response => response.json())
  .then(elementos => {
    const img_container = document.getElementById('img-container');
    elementos.forEach(element => {
      const img = document.createElement('img');
      img.src = element.url;
      img_container.appendChild(img);
    });
  })

  // Selecciona el ícono de hamburguesa y el menú
const hamburger = document.querySelector('.hamburger');
const navbar = document.querySelector('.navbar');

// Alterna la clase 'active' al hacer clic
hamburger.addEventListener('click', () => {
    navbar.classList.toggle('active');
});

// Elementos
const popup = document.getElementById('popup');
const openPopup = document.getElementById('openPopup');
const closeBtn = document.querySelector('.close-btn');

// Abrir la ventana emergente
openPopup.addEventListener('click', () => {
    popup.style.display = 'flex'; // Muestra la ventana emergente
});

// Cerrar la ventana emergente
closeBtn.addEventListener('click', () => {
    popup.style.display = 'none'; // Oculta la ventana emergente
});

// Cerrar si se hace clic fuera del contenido
window.addEventListener('click', (e) => {
    if (e.target === popup) {
        popup.style.display = 'none';
    }
});
