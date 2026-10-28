// Interaktiv SVG-side
const svgPlaceholder = document.querySelector(".svg-placeholder");

// Opsamlingsside
const opsamlingPlaceholder = document.querySelector(".opsamling-placeholder");

if (opsamlingPlaceholder) {
  const params = new URLSearchParams(window.location.search);
  // Eksempel: params.get("navn") henter værdien fra et formularfelt med name="navn".
}

const eventMap = document.querySelector(".event-map");

if (eventMap) {
  const firstDetails = document.querySelector("#details-first");
  const secondDetails = document.querySelector("#details-second");
  const thirdDetails = document.querySelector("#details-third");

  function updateSvgPosition() {
    const openDetails = document.querySelector(".accordion-item[open]");
    if (openDetails) {
      eventMap.dataset.position = openDetails.dataset.position;
    } else {
      delete eventMap.dataset.position;
    }
  }

  firstDetails.addEventListener("toggle", updateSvgPosition);
  secondDetails.addEventListener("toggle", updateSvgPosition);
  thirdDetails.addEventListener("toggle", updateSvgPosition);
}
