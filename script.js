document.addEventListener("DOMContentLoaded", () => {
  const imagens1 = [
    "/niver-helo/helo1.jpg",
    "/niver-helo/helo2.jpg",
    "/niver-helo/helo3.jpg",
    "/niver-helo/helo4.jpg",
    "/niver-helo/helo5.jpg",
    "/niver-helo/helo6.jpg",
    "/niver-helo/helo7.jpg",
  ];

  let index1 = 0;

  function trocarImagem() {
    const imgPolaroid1 = document.getElementById("img-polaroid1");

    if (imgPolaroid1) {
      imgPolaroid1.classList.add("fade-out");

      setTimeout(() => {
        index1 = (index1 + 1) % imagens1.length;
        imgPolaroid1.src = imagens1[index1];
        imgPolaroid1.classList.remove("fade-out");
      }, 1000);
    }
  }

  setInterval(trocarImagem, 3000);
});
