
document.addEventListener("DOMContentLoaded", () => {
  fetch("http://localhost:3000/aboutme")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Ma'lumotlarni olishda xato yuz berdi!");
      }
      return response.json();
    })
    .then((data) => {
      const editButton = document.querySelector(".edit");
      const nameElement = document.querySelector(".sec4Text");
      const companyElement = document.querySelector(".sec4Text1");
      const bioElement = document.querySelector(".sec4Text2");

      nameElement.textContent = data.name;
      companyElement.textContent = data.company;
      bioElement.textContent = data.bio;

      let isEditable = false; 

      editButton.addEventListener("click", () => {
        if (!isEditable) {
          nameElement.contentEditable = "true";
          companyElement.contentEditable = "true";
          bioElement.contentEditable = "true";
          editButton.textContent = "Submit";
          isEditable = true;
        } else {
          const updatedData = {
            name: nameElement.textContent.trim(),
            company: companyElement.textContent.trim(),
            bio: bioElement.textContent.trim(),
          };

          fetch("http://localhost:3000/aboutme", {
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

              nameElement.contentEditable = "false";
              companyElement.contentEditable = "false";
              bioElement.contentEditable = "false";
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
