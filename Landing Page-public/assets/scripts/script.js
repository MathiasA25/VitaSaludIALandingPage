document.addEventListener("DOMContentLoaded", () => {
  const botonEscucha = document.getElementById("btn-escucha");
  botonEscucha?.addEventListener("click", () => {
    Swal.fire("Funcionalidad de voz aún en desarrollo.");
  });

  const registroForm = document.querySelector("body.pagina-asistencia form");
  if (registroForm) {
    registroForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const inputs = registroForm.querySelectorAll("input");
      const contraseña = inputs[4].value.trim();
      const confirmar = inputs[5].value.trim();

      if (contraseña !== confirmar) {
        Swal.fire({
          icon: "error",
          title: "Las contraseñas no coinciden",
          confirmButtonText: "Intentar de nuevo"
        });
        return;
      }

      Swal.fire({
        icon: "correcto",
        title: "Registro exitoso",
        text: "Ahora puedes iniciar sesión",
        confirmButtonText: "Ir al login"
      }).then(() => {
        window.location.href = "Login.html";
      });
    });
  }

  const loginForm = document.querySelector("body.pagina-login form");
  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const email = loginForm.querySelector('input[type="email"]').value.trim();
      const password = loginForm.querySelector('input[type="password"]').value.trim();

      if (!email || !password) {
        Swal.fire({
          icon: "Error",
          title: "Campos incompletos",
          text: "Por favor, completa todos los campos"
        });
        return;
      }

      Swal.fire({
        icon: "success",
        title: "Inicio de sesión exitoso",
        text: "¡Bienvenido a Tecnosalud!",
        confirmButtonText: "Entrar"
      }).then(() => {
        window.location.href = "index.html";
      });
    });
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("form-contacto");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      Swal.fire({
        icon: 'success',
        title: 'Mensaje enviado correctamente',
        text: 'Gracias por contactarnos.',
        showConfirmButton: false,
        timer: 2000
      });

      form.reset();
    });
  }
});