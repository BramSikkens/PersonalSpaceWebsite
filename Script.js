var sections = document.getElementsByTagName("section");
for (let section of sections) {
  section.addEventListener("scroll", (e) => {
    console.log("scroll");
  });
}
