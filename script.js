const createBtn = document.querySelector(".button-creat");
const form = document.querySelector("form");
const cases = document.getElementById("cartes");
const cancelBtn = document.querySelector(".button-cancel");
const saveBtn = document.querySelector(".button-Save");

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

function getFormData() {
  const taskNameValue = document.querySelector("#Task-name").value;
  const descriptionTaskValue =
    document.querySelector("#Descroption-task").value;

  const durationTaskValue = document.querySelector("#Duration-Task").value;
  const statusValue = document.querySelector("#status").value;

  const todoColumn = document.querySelector(".tasks1");
  const doingColumn = document.querySelector(".tasks2");
  const doneColumn = document.querySelector(".tasks3");

  const task = `<div class="tasks1">
          <div class="exemple1">
            <div>
              <h4>${taskNameValue}</h4>
              <p>${durationTaskValue}</p>
              <p>${statusValue}</p>
              <p>${descriptionTaskValue}</p>
            </div>
            <div class="icons">
              <button type="button" class="delete">
                <i class="fa-solid fa-trash"></i>
              </button>
            </div>
          </div>`;

  if (statusValue === "to-do") {
    todoColumn.insertAdjacentHTML("beforeend", task);
  }

  if (statusValue === "doing") {
    doingColumn.insertAdjacentHTML("beforeend", task);
  }
  if (statusValue === "done") {
    doneColumn.insertAdjacentHTML("beforeend", task);
  }
}
// le boutton de supression//
