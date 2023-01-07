import {
  clearoff,
  clearon,
  canceloff,
  cancelon,
  changevalue,
  checkCountList,
  checkList,
  createEl,
} from "./utils.js";

function saveItem() {
  let div = document.getElementById(doid);
  let txt = div.querySelector(".textitem");

  txt.textContent = inputtxt.value;
  if (!inputtxt.value) div.remove();
  checkList();
  inputtxt.value = "";
  addbtn.innerHTML = "Add Item";
  addbtn.classList.add("addborder");
  addbtn.classList.remove("delborder");
  canceloff();
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

    let div = createEl("div", "item");
    let txtitem = createEl("div", "textitem");
    let hlpdiv = createEl("div", "hlp");
    let imgedit = createEl("img", "edit");
    imgedit.src = "./images/edit.svg";
    let imgdele = createEl("img", "dele");
    imgdele.src = "./images/del.svg";

    hlpdiv.append(imgedit, imgdele);
    div.append(txtitem, hlpdiv);
    div.id = iditem;

    txtitem.textContent = inputtxt.value;

    clearon();

    imgdele.onclick = () => {
      if (doid == div.id) sectiontime();
      doid = -1;
      div.remove();
      checkList();
      checkCountList();
    };
    imgedit.onclick = () => {
      doid = div.id;
      inputtxt.value = txtitem.textContent;
      prevtextvalue = inputtxt.value;
      cancelon();
      addbtn.innerHTML = "Save Item";
      addbtn.classList.remove("addborder");
      addbtn.classList.add("delborder");
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

function clearlist() {
  clearoff();
  sectiontime();
  list.innerHTML = "";
  iditem = 0;
  doid = -1;
  checkCountList();
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

clearoff();
canceloff();

addbtn.addEventListener("click", addItem);
clearbtn.addEventListener("click", clearlist);
cancel.addEventListener("click", changevalue);