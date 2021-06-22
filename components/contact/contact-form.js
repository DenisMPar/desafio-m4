function formComponent(el) {
  const formComp = document.createElement("div");
  formComp.className = "cont-form";
  formComp.innerHTML = `<p class="contact-form__p">Escríbeme</p>
    <form class="contact-form" action="">
      <label for="nombre" class="contact-form__label-name">
        NOMBRE
        <input type="text" name="name" class="contact-form__input-name" />
      </label>

      <label for="email" class="contact-form__label-email">
        EMAIL
        <input type="text" name="email" class="contact-form__input-email" />
      </label>

      <label for="nombre" class="contact-form__label-message">
        MENSAJE
        <textarea
          class="contact-form__area-message"
          name="mensaje"
          id=""
          cols="30"
          rows="10"
        ></textarea>
      </label>
      <button class="contact-form__button">Enviar</button>
    </form>`;
  formComp.addEventListener("submit", (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const value = Object.fromEntries(data.entries());
    const mensaje =
      "mensaje de: " +
      value.name +
      " email: " +
      value.email +
      " mensaje: " +
      value.mensaje;
    const correo = {
      to: "denis.mtn7@gmail.com",
      message: mensaje,
    };

    fetch("https://apx-api.vercel.app/api/utils/dwf", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(correo),
    })
      .then(() => {
        alert("su mensaje fue enviado");
        window.location.reload();
      })
      .catch(() => {
        alert("error al enviar");
      });
  });
  el.appendChild(formComp);
}
