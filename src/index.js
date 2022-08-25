window.onload = () => {
  const buttonClose = document.querySelector("#closebutton");
  buttonClose.addEventListener("click", (event) => {
    //event.preventDefault();
    const actionInvisible = document.querySelector(".anuncio-topo");
    actionInvisible.classList.toggle("invisible");
  });
};
