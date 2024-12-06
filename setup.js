
document.addEventListener("DOMContentLoaded", () => {
  fetch("http://localhost:3000/setup")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Ma'lumotlarni olishda xato yuz berdi!");
      }
      return response.json();
    })
    .then((data) => {
      const editButton = document.querySelector(".editBTN");
      const emailElement = document.querySelector(".ulEdit");
      const githubElement = document.querySelector(".ulEdit1");
      const twitterElement = document.querySelector(".ulEdit2");

      emailElement.textContent = data.contactEmail;
      githubElement.textContent = data.socialLinks.github;
      twitterElement.textContent = data.socialLinks.twitter;

      let isEditable = false; 

      editButton.addEventListener("click", () => {
        if (!isEditable) {
          emailElement.contentEditable = "true";
          githubElement.contentEditable = "true";
          twitterElement.contentEditable = "true";
          editButton.textContent = "Submit";
          isEditable = true;
        } else {
          const updatedData = {
            contactEmail: emailElement.textContent.trim(),
            socialLinks: {
              github: githubElement.textContent.trim(),
              twitter: twitterElement.textContent.trim(),
            },
          };

          fetch("http://localhost:3000/setup", {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(updatedData),
          })
            .then((response) => {
              if (!response.ok) {
                throw new Error("Ma'lumotlarni yangilashda xato yuz berdi!");
              }
              return response.json();
            })
            .then(() => {
              alert("Ma'lumotlar muvaffaqiyatli yangilandi!");

              emailElement.contentEditable = "false";
              githubElement.contentEditable = "false";
              twitterElement.contentEditable = "false";
              editButton.textContent = "Edit";
              isEditable = false;
            })
            .catch((err) => {
              console.error("Xato:", err);
              alert("Server bilan ulanishda muammo yuz berdi.");
            });
        }
      });
    })
    .catch((err) => {
      console.error("Xato:", err);
      alert("Serverdan ma'lumot olishda muammo yuz berdi.");
    });
});
