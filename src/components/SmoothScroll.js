const anchors = document.querySelectorAll("a[href*='#']");

for (let anchor of anchors) {
  anchor.addEventListener("click", (e) => {
    e.preventDefault();

    const blockID = anchor.getAttribute("href").substr(1);

    document.getElementById(blockID).scrollIntoView({
      scroll: "smooth",
      block: "start",
    });
  });
}
