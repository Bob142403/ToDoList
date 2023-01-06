function saveItem() {
  let div = document.getElementById(doid);
  let txt = div.querySelector(".textitem");

  txt.innerHTML = inputtxt.value;
  if(!inputtxt.value) div.remove();
  checkList();
  inputtxt.value = "";
  addbtn.innerHTML = "Add Item";
  addbtn.style.borderRadius = "0 5px 5px 0";
  cancel.style.display = "none";


  addbtn.removeEventListener("click", saveItem);
  addbtn.addEventListener("click", addItem);
}

function addItem() {
  if (inputtxt.value) {
    let div = document.createElement("div");
    let childdiv = `<div class="textitem"></div>
    <div class="hlp"><img class="edit" src="./images/edit.png" /></div>
    <img class="dele" src="./images/aaaaaaa.png" />`;

    div.classList.add("item");
    div.id = iditem;
    div.innerHTML = childdiv;

    let text = div.querySelector("div");
    let btndel = div.querySelector(".dele");
    let btnedit = div.querySelector(".edit");

    text.innerHTML = inputtxt.value;
    clearblock.style.display = "";

    btndel.onclick = (event) => {
      event.target.parentNode.remove();

      checkList();
    };
    btnedit.onclick = (event) => {
      doid = event.target.parentNode.parentNode.id;
      inputtxt.value = text.innerHTML;
      prevtextvalue = inputtxt.value;
      addbtn.innerHTML = "Save Item";
      cancel.style.display = "";
      addbtn.style.borderRadius = "0";
      addbtn.removeEventListener("click", addItem);
      addbtn.addEventListener("click", saveItem);
    };

    iditem++;
    inputtxt.value = "";
    list.append(div);
  }
}

function checkList() {
  if (!list.innerHTML) clearblock.style.display = "none";
}

function clearlist() {
  list.innerHTML = "";
  iditem = 0;
}

function changevalue() {
  inputtxt.value = prevtextvalue;
}

let iditem = 0,
  doid = 0;
let prevtextvalue = "";
let mainlist = document.getElementById("mainList");
let addbtn = document.getElementById("add");
let inputtxt = document.getElementById("txt");
let list = document.getElementById("List");
let clearbtn = document.getElementById("clear");
let clearblock = document.getElementById("clearblock");
let cancel = document.getElementById("cancel");

clearblock.style.display = "none";
cancel.style.display = "none";

addbtn.addEventListener("click", addItem);
clearbtn.addEventListener("click", clearlist);
cancel.addEventListener("click", changevalue);
