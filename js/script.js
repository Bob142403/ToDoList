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
}

function addItem() {
  if (inputtxt.value) {
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
    
    console.log(text.textContent);
    text.textContent = inputtxt.value;
    clearblock.style.display = "";

    btndel.onclick = (event) => {
      sectiontime();
      event.target.parentNode.parentNode.remove();
      checkList();
      section = 1;
    };
    btnedit.onclick = (event) => {
      section = 0;
      doid = event.target.parentNode.parentNode.id;
      inputtxt.value = text.textContent;
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
  clearblock.style.display = "none";
  sectiontime();
  list.innerHTML = "";
  section = 1;
  iditem = 0;
}

function changevalue() {
  inputtxt.value = prevtextvalue;
}

function sectiontime() {
  if (section == 0) {
    inputtxt.value = "";
    addbtn.innerHTML = "Add Item";
    addbtn.style.borderRadius = "0 5px 5px 0";
    cancel.style.display = "none";

    addbtn.removeEventListener("click", saveItem);
    addbtn.addEventListener("click", addItem);
  }
}

let iditem = 0,
  doid = 0;
let prevtextvalue = "";
let section = 1;
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
