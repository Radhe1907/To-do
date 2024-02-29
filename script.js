const search = document.getElementById("search");
const listcontainer = document.getElementById("list-container");
const addbutton = document.getElementsByClassName("but");

function addclass() {
  if (search.value === "") {
    alert("Please add your to-do's");
    document.querySelector(".clear").style.display = "none";
  } else {
    let li = document.createElement("li");
    li.innerHTML = search.value;
    listcontainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
    document.querySelector(".clear").style.display = "block";
  }
  search.value = "";
  saveData();
}
listcontainer.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveData();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveData();
      checkdata();
    }
  },
  false
);
function clearall() {
  listcontainer.innerHTML = "";
  document.querySelector(".clear").style.display = "none";
  saveData();
}
function saveData() {
  localStorage.setItem("data", listcontainer.innerHTML);
}
function showData() {
  listcontainer.innerHTML = localStorage.getItem("data");
  checkdata();
}
showData();
function checkdata() {
  listcontainer.innerHTML === ""
    ? (document.querySelector(".clear").style.display = "none")
    : (document.querySelector(".clear").style.display = "block");
}
