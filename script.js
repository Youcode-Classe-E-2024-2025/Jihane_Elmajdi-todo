const createBtn = document.querySelector(".button-creat");
const form = document.querySelector("form");
const cases = document.getElementById("cartes");
const cancelBtn = document.querySelector(".button-cancel");
const saveBtn = document.querySelector(".button-Save");
// const deleteBtn = document.querySelector(".delete");

createBtn.addEventListener("click", function () {
  form.style.display = "block";
  cases.classList.add("filtre");
});

cancelBtn.addEventListener("click", function () {
  form.style.display = "none";
  cases.classList.remove("filtre");
});

saveBtn.addEventListener("click", function () {
  form.style.display = "none";
  cases.classList.remove("filtre");
  getFormData();
});

// deleteBtn.addEventListener("click", function () {
//   form.style.display = "none";
//   cases.classList.remove("filtre");
//   getFormData();
// });

function getFormData() {
  const taskNameValue = document.querySelector("#Task-name").value;
  const descriptionTaskValue =
    document.querySelector("#Descroption-task").value;

  const durationTaskValue = document.querySelector("#Duration-Task").value;
  const priorityValue = document.querySelector("#priority").value;
  // console.log(priority);
}
getFormData();
