document.addEventListener("DOMContentLoaded", () => {
  const title = document.querySelector("h1");
  const comment = document.querySelector("p");
  const edit = document.querySelector(".portfolio-btn");
  const imgDumalo = document.querySelector(".img-dumalo");
  fetch("http://localhost:3000/home")
    .then((e) => {
      return e.json();
    })
    .then((e) => {
      title.textContent = e.title;
      comment.textContent = e.description;
      imgDumalo.src = e.heroImage;

      edit.addEventListener("click", () => {
        title.contentEditable = true;
        comment.contentEditable = true;
        edit.textContent = "submit";
        edit.addEventListener("click", () => {
          fetch("http://localhost:3000/home", {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              title: title.textContent,
              subtitle: "Crafting web solutions with passion and precision",
              heroImage: "https://via.placeholder.com/1920x1080",
              description: comment.textContent,
              ctaButton: {
                text: "View My Work",
                link: "/portfolio",
              },
            }),
          })
            .then((response) => {
              if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
              }
              return response.json();
            })
            .then((data) => {
              edit.textContent = "edit";
              title.contentEditable = false;
              comment.contentEditable = false;
              title.textContent = data.title;
              comment.textContent = data.description;
            });
        });
      });
    });
});
