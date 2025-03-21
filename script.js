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
  

  const imagens2 = [
    "/niver-helo/helo2.jpg",
    "/niver-helo/helo4.jpg",
    "/niver-helo/helo6.jpg",
    "/niver-helo/helo7.jpg",
    "/niver-helo/helo3.jpg",
    "/niver-helo/helo5.jpg",
    "/niver-helo/helo1.jpg",
  ];


  let index1 = 0;
  let index2 = 0;

  function trocarImagem() {
    const imgPolaroid1 = document.getElementById("img-polaroid1");
    const imgPolaroid2 = document.getElementById("img-polaroid2");

    if (imgPolaroid1 && imgPolaroid2) {
      imgPolaroid1.classList.add("fade-out");
      imgPolaroid2.classList.add("fade-out");

      setTimeout(() => {
        index1 = (index1 + 1) % imagens1.length; // Alterna entre 0 e 6 (7 imagens)
        index2 = (index2 + 1) % imagens2.length; // Alterna entre 0 e 6 (7 imagens)

        imgPolaroid1.src = imagens1[index1];
        imgPolaroid2.src = imagens2[index2];

        imgPolaroid1.classList.remove("fade-out");
        imgPolaroid2.classList.remove("fade-out");
      }, 1000);
    }
  }

  setInterval(trocarImagem, 3000);
});
