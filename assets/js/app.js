(function () {
  const URL = "https://api.adviceslip.com/advice";
  const generateAdviceButton = document.querySelector(".generateAdviceButton");

  function getAdvice() {
    fetch(URL)
      .then((response) => response.json())
      .then((e) => {
        let container = document.querySelector(".content");
        let image =
          window.innerWidth < 768
            ? "./assets/images/pattern-divider-desktop.svg"
            : "./assets/images/pattern-divider-mobile.svg";

        container.innerHTML = `
            <p class="title">ADVICE #${e.slip.id}</p>
            <h3>"${e.slip.advice}"</h3>
            <img src="${image}">
           
        `;
      });
  }

  getAdvice();

  generateAdviceButton.addEventListener("click", (e) => {
    getAdvice();
    if (e.target.tagName == "IMG") {
      generateAdviceButton.click();
    }
  });
})();
