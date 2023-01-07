function saveItem() {
  let div = document.getElementById(doid);
  let txt = div.querySelector(".textitem");

  txt.textContent = inputtxt.value;
  if (!inputtxt.value) div.remove();
  checkList();
  inputtxt.value = "";
  addbtn.innerHTML = "Add Item";
  addbtn.style.borderRadius = "0 5px 5px 0";
  cancel.style.display = "none";
  section = 1;

  addbtn.removeEventListener("click", saveItem);
  addbtn.addEventListener("click", addItem);
  inputtxt.focus();
  doid = -1;
}

function addItem() {
  inputtxt.focus();
  if (inputtxt.value) {
    checkCountList();
    let div = document.createElement("div");
    let childdiv = `<div class="textitem"></div>
    <div class="hlp"><img class="edit" src="./images/edit.png" />
    <img class="dele" src="./images/aaaaaaa.png" /></div>`;

    div.classList.add("item");
    div.id = iditem;
    div.innerHTML = childdiv;

    let text = div.querySelector("div");
    let btndel = div.querySelector(".dele");
    let btnedit = div.querySelector(".edit");

    text.textContent = inputtxt.value;
    clearblock.style.display = "";

    btndel.onclick = (event) => {
      if (doid == div.id) sectiontime();
      doid = -1;
      event.target.parentNode.parentNode.remove();
      checkList();
      checkCountList();
    };
    btnedit.onclick = (event) => {
      doid = event.target.parentNode.parentNode.id;
      inputtxt.value = text.textContent;
      prevtextvalue = inputtxt.value;
      addbtn.innerHTML = "Save Item";
      cancel.style.display = "";
      addbtn.style.borderRadius = "0";
      inputtxt.focus();

      addbtn.removeEventListener("click", addItem);
      addbtn.addEventListener("click", saveItem);
    };

    iditem++;
    inputtxt.value = "";
    list.append(div);
    checkCountList();
  }
}

function checkList() {
  if (!list.innerHTML) clearblock.style.display = "none";
}

function clearlist() {
  clearblock.style.display = "none";
  sectiontime();
  list.innerHTML = "";
  iditem = 0;
  doid = -1;
  checkCountList();
}

function changevalue() {
  inputtxt.value = prevtextvalue;
  inputtxt.focus();
}

function sectiontime() {
  inputtxt.value = "";
  addbtn.innerHTML = "Add Item";
  addbtn.style.borderRadius = "0 5px 5px 0";
  cancel.style.display = "none";

  addbtn.removeEventListener("click", saveItem);
  addbtn.addEventListener("click", addItem);
}

function checkCountList() {
  let allList = list.querySelectorAll("div");
  if (allList.length / 3 > 15) {
    list.style.overflowY = "scroll";
    list.style.height = "735px";
  } else {
    list.style.height = "";
    list.style.overflowY = "hidden";
  }
}

let iditem = 0,
  doid = -1;
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
