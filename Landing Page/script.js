document.addEventListener("DOMContentLoaded", () => {
    const botonEscucha = document.getElementById("btn-escucha");
  
    botonEscucha?.addEventListener("click", () => {
      alert("Funcionalidad de voz aún en desarrollo.");
    });
  
    const formularios = document.querySelectorAll("form");
  
    formularios.forEach(form => {
      form.addEventListener("submit", e => {
        e.preventDefault();
        alert("Gracias por tu mensaje. Recibido correctamente.");
      });
    });
  });
  

  