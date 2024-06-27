document.body.addEventListener("click", {
  handleEvent(event) {
    let target = event.target;
    if (target.closest(".menu-section-item").dataset.activity == 'active') return;
    if (target.closest(".menu-section-item")) {
      document.body.querySelector(
        '[data-activity = "active"]'
      ).dataset.activity = "disabled";
      document.body.querySelector('[data-show = "show"]').dataset.show =
        "negative";
      target.dataset.activity = "active";
      //   alert(target.textContent);
      switch (target.textContent) {
        case "Pizza":
          document.body.querySelector("#Pizza").dataset.show = "show";
          break;
        case "Salads":
          document.body.querySelector("#Salads").dataset.show = "show";
          break;
        case "Starter":
          document.body.querySelector("#Starter").dataset.show = "show";
          break;
      }
    }
  },
});
