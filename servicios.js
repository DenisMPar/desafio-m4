// clona el template y agrega los params provenientes de getServicesContent() a la seccion services de la pagina
function addServiceCards(params) {
  const containerServiceCards = document.querySelector(
    ".services__container-cards"
  );
  const templateServiceCard = document.querySelector("#template__service-card");
  const clone = templateServiceCard.content.cloneNode(true);

  const serviceImgEl = clone.querySelector(".service-card__img");
  serviceImgEl.src = params.imageUrl;

  const servicetitleEl = clone.querySelector(".service-card__title");
  servicetitleEl.textContent = params.title;

  const serviceParragraph = clone.querySelector(".service-card__p");
  serviceParragraph.textContent = params.description;

  containerServiceCards.appendChild(clone);
}
//Usa el id de una imagen del model para encontrar la url de la imagen en el Asset
function getAssetImageUrl(imageId, data) {
  const itemImageArray = data.includes.Asset.find((item) => {
    return item.sys.id == imageId;
  });
  return itemImageArray.fields.file.url;
}

// trae el contenido del modelo ServiceCard desde la api y crea un array de objetos con cada instancia del modelo
function getServicesContent() {
  return fetch(
    "https://cdn.contentful.com/spaces/lj3cfwngwqd5/environments/master/entries?access_token=U4E_8brZv1ELdNO1SqdfpFESzL_KywzLQwAb7fusz3o&content_type=serviceCard"
  )
    .then((data) => {
      return data.json();
    })
    .then((data) => {
      const fieldsCollection = data.items.map((item) => {
        const imageId = item.fields.serviceImg.sys.id;
        return {
          imageUrl: getAssetImageUrl(imageId, data),
          title: item.fields.serviceTitle,
          description: item.fields.serviceDescription,
        };
      });
      return fieldsCollection;
    });
}
function addFooter() {
  const footerEl = document.querySelector(".footer");
  console.log();
  footerComp(footerEl);
}
function addHeader() {
  const headerEl = document.querySelector(".header");
  componentHeader(headerEl);
}

function main() {
  addFooter();
  addHeader();
  getServicesContent().then((r) => {
    for (const item of r) {
      addServiceCards(item);
    }
  });
}
main();
