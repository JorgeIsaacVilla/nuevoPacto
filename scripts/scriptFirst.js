// Obtener el elemento de video
const video = document.getElementById('myVideo');

// Verificar si el dispositivo es un móvil
const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

// URL del video para móviles y versión de escritorio
const videoURLMobile = "./data/img/first/GroungeOverlayMovile.mp4";
const videoURLDesktop = "./data/img/first/grungeOverlayDesck.mp4";

// Cambiar la fuente del video según el dispositivo
if (isMobile) {
  video.src = videoURLMobile;
} else {
  video.src = videoURLDesktop;
  
}
// Reiniciar el video cuando haya terminado
video.addEventListener('ended', function() {
  this.currentTime = 0; // Reiniciar el tiempo de reproducción del video
  this.play(); // Volver a reproducir el video
}, false);

//reproducir el video al tocar la pantalla
/*
document.addEventListener('touchstart', function() {
  // Reproducir el video
  video.play();
});
*/