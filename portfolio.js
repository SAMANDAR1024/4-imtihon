document.addEventListener("DOMContentLoaded", () => {
    const portfolioTitle = document.querySelector(".portfolio-user");
    const portfolioDescription = document.querySelector(".portfolio-commit");
    const portfolioTitle1 = document.querySelector(".portfolio-user1");
    const portfolioDescription1 = document.querySelector(".portfolio-commit1");
    const editBtn = document.querySelector(".source");
    const editBtn1 = document.querySelector(".source1");
    const deleteBtn1 = document.querySelector(".demo"); 
    const deleteBtn2 = document.querySelector(".demo1");
    let isEditable = false;
  
    fetch("http://localhost:3000/portfolio")
      .then((response) => {
        if (!response.ok) throw new Error("Ma'lumotlarni olishda xato yuz berdi!");
        return response.json();
      })
      .then((data) => {
        data.forEach((element) => {
          if (element.id == 1) {
            portfolioTitle.textContent = element.title;
            portfolioDescription.textContent = element.description;
          }
          if (element.id == 2) {
            portfolioTitle1.textContent = element.title;
            portfolioDescription1.textContent = element.description;
          }
        });
      })
      .catch((err) => {
        console.error("Xato:", err);
        alert("Server bilan ulanishda muammo yuz berdi.");
      });
  
    editBtn.addEventListener("click", () => {
      if (!isEditable) {
        portfolioTitle.contentEditable = "true";
        portfolioDescription.contentEditable = "true";
        portfolioTitle1.contentEditable = "true";
        portfolioDescription1.contentEditable = "true";
        editBtn.textContent = "Submit";
        isEditable = true;
      } else {
        const updateRequests = [
          fetch(`http://localhost:3000/portfolio/1`, {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              title: portfolioTitle.textContent.trim(),
              description: portfolioDescription.textContent.trim(),
            }),
          }),
          fetch(`http://localhost:3000/portfolio/2`, {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              title: portfolioTitle1.textContent.trim(),
              description: portfolioDescription1.textContent.trim(),
            }),
          }),
        ];
  
        Promise.all(updateRequests)
          .then((responses) => {
            if (responses.some((res) => !res.ok)) {
              throw new Error("Ba'zi ma'lumotlarni yangilashda xato yuz berdi.");
            }
            return Promise.all(responses.map((res) => res.json()));
          })
          .then(() => {
            alert("Ma'lumotlar muvaffaqiyatli yangilandi!");
            portfolioTitle.contentEditable = "false";
            portfolioDescription.contentEditable = "false";
            portfolioTitle1.contentEditable = "false";
            portfolioDescription1.contentEditable = "false";
            editBtn.textContent = "Edit";
            isEditable = false;
          })
          .catch((err) => {
            console.error("Xato:", err);
            alert("Ma'lumotlarni yangilashda xato yuz berdi.");
          });
      }
    });

    editBtn1.addEventListener("click", () => {
        if (!isEditable) {
          portfolioTitle.contentEditable = "true";
          portfolioDescription.contentEditable = "true";
          portfolioTitle1.contentEditable = "true";
          portfolioDescription1.contentEditable = "true";
          editBtn.textContent = "Submit";
          isEditable = true;
        } else {
          const updateRequests = [
            fetch(`http://localhost:3000/portfolio/1`, {
              method: "PATCH",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                title: portfolioTitle.textContent.trim(),
                description: portfolioDescription.textContent.trim(),
              }),
            }),
            fetch(`http://localhost:3000/portfolio/2`, {
              method: "PATCH",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                title: portfolioTitle1.textContent.trim(),
                description: portfolioDescription1.textContent.trim(),
              }),
            }),
          ];
    
          Promise.all(updateRequests)
            .then((responses) => {
              if (responses.some((res) => !res.ok)) {
                throw new Error("Ba'zi ma'lumotlarni yangilashda xato yuz berdi.");
              }
              return Promise.all(responses.map((res) => res.json()));
            })
            .then(() => {
              alert("Ma'lumotlar muvaffaqiyatli yangilandi!");
              portfolioTitle.contentEditable = "false";
              portfolioDescription.contentEditable = "false";
              portfolioTitle1.contentEditable = "false";
              portfolioDescription1.contentEditable = "false";
              editBtn.textContent = "Edit";
              isEditable = false;
            })
            .catch((err) => {
              console.error("Xato:", err);
              alert("Ma'lumotlarni yangilashda xato yuz berdi.");
            });
        }
      });
  
    deleteBtn1.addEventListener("click", () => {
      fetch("http://localhost:3000/portfolio/1", {
        method: "DELETE",
      })
        .then((response) => {
          if (!response.ok) throw new Error("Ma'lumotni o'chirishda xato yuz berdi!");
          alert("1-element muvaffaqiyatli o'chirildi!");
          portfolioTitle.textContent = "";
          portfolioDescription.textContent = "";
        })
        .catch((err) => {
          console.error("Xato:", err);
          alert("Server bilan ulanishda muammo yuz berdi.");
        });
    });
  
    deleteBtn2.addEventListener("click", () => {
      fetch("http://localhost:3000/portfolio/2", {
        method: "DELETE",
      })
        .then((response) => {
          if (!response.ok) throw new Error("Ma'lumotni o'chirishda xato yuz berdi!");
          alert("2 ta element muvaffaqiyatli o'chirildi!");
          portfolioTitle1.textContent = "";
          portfolioDescription1.textContent = "";
        })
        .catch((err) => {
          console.error("Xato:", err);
          alert("Server bilan ulanishda muammo yuz berdi.");
        });
    });
  });
  










































































// document.addEventListener("DOMContentLoaded", () => {
//   fetch("http://localhost:3000/portfolio")
//     .then((e) => e.json())
//     .then((e) => {
//         const portfolioTitle = document.querySelector(".portfolio-user")
//         const portfolioDescription = document.querySelector(".portfolio-commit")
//         const portfolioTitle1 = document.querySelector(".portfolio-user1")
//         const portfolioDescription1 = document.querySelector(".portfolio-commit1")
//         const editBtn = document.querySelector(".source")
//         const deleteBtn = document.querySelector(".demo")
//         e.forEach(element => {
//             if(element.id == 1){
//                 portfolioTitle.textContent = element.title
//                 portfolioDescription.textContent = element.description
//             }
//             if(element.id == 2){
//                 portfolioTitle1.textContent = element.title
//                 portfolioDescription1.textContent = element.description
//             }
//         });

//         editBtn.addEventListener("click",()=>{
//             portfolioTitle.contentEditable = true
//             portfolioDescription.contentEditable = true
//             portfolioTitle1.contentEditable = true
//             portfolioDescription1.contentEditable = true
//             editBtn.textContent= "Submit"
//             editBtn.addEventListener("click",()=>{
//                 fetch("http://localhost:3000/portfolio", {
//                     method: "PATCH",
//                     headers: {
//                         'Content-Type': 'application/json'
//                     },
//                     body: JSON.stringify({
//                         id: 1,
//                         title: portfolioTitle.textContent,
//                         description: portfolioDescription.textContent
//                     })
//                 })  
//                 .then((response)=>{
//                     if(!response.ok){
//                         throw new Error(`HTTP error! status: ${response.status}`)
//                     }
//                     return response.json()
//                 })
//                 .then((data)=>{
//                     editBtn.textContent= "Edit"
//                     portfolioTitle.contentEditable = false
//                     portfolioDescription.contentEditable = false
//                     portfolioTitle1.contentEditable = false
//                     portfolioDescription1.contentEditable = false
//                     portfolioTitle.textContent = data.title
//                     portfolioDescription.textContent = data.description
//                     portfolioTitle1.textContent = data.title
//                     portfolioDescription1.textContent = data.description
//                 })
//             })
//         })

   

//     });
// });

  