import { clearoff, clearon, canceloff, cancelon, createEl } from "./utils.js";

function checkList() {
  if (!list.innerHTML) {
    clearoff();
  }
}

function clearlist() {
  clearoff();
  sectiontime();
  list.innerHTML = "";
  iditem = 0;
  doid = -1;
  localStorage.clear();
  checkCountList();
}

function sectiontime() {
  inputtxt.value = "";
  txtarea.value = "";
  addbtn.innerHTML = "Add Item";
  addbtn.classList.add("addborder");
  addbtn.classList.remove("delborder");

  canceloff();

  addbtn.removeEventListener("click", saveItem);
  addbtn.addEventListener("click", addItem);
}

function changevalue() {
  inputtxt.value = prevtextvalue;
  txtarea.value = prevareavalue;
  inputtxt.focus();
}

function checkCountList() {
  if (parseInt(list.scrollHeight) > 600) {
    list.classList.add("listonscroll");
  } else {
    list.classList.remove("listonscroll");
  }
}

function saveItem() {
  let div = document.getElementById(doid);
  let txt = div.querySelector(".textitem");
  let ttarea = div.querySelector(".tasktxt");

  txt.textContent = inputtxt.value;
  ttarea.textContent = txtarea.value;
  if (!inputtxt.value) div.remove();
  checkList();
  inputtxt.value = "";
  txtarea.value = "";
  addbtn.innerHTML = "Add Item";
  addbtn.classList.add("addborder");
  addbtn.classList.remove("delborder");
  canceloff();

  localStorage.setItem(doid, txt.textContent);
  addbtn.removeEventListener("click", saveItem);
  addbtn.addEventListener("click", addItem);
  inputtxt.focus();
  checkLocal();
  doid = -1;
}

function addItem() {
  inputtxt.focus();
  if (inputtxt.value) {
    let div = createEl("div", "item");
    let elem = createEl("div");
    let txtitem = createEl("div", "textitem");
    let areatxt = createEl("div", "tasktxt");
    let hlpdiv = createEl("div", "hlp");
    let imgedit = createEl("img", "edit");
    imgedit.src = "./images/edit.svg";
    let imgdele = createEl("img", "dele");
    imgdele.src = "./images/del.svg";

    elem.append(txtitem, areatxt);
    hlpdiv.append(imgedit, imgdele);
    div.append(elem, hlpdiv);
    div.id = iditem;

    areatxt.textContent = txtarea.value;
    txtitem.textContent = inputtxt.value;

    clearon();

    imgdele.onclick = () => {
      if (doid == div.id) sectiontime();
      localStorage.removeItem(div.id);
      div.remove();
      checkList();
      checkCountList();
      checkLocal();
    };
    imgedit.onclick = () => {
      doid = div.id;
      inputtxt.value = txtitem.textContent;
      txtarea.value = areatxt.textContent;
      prevtextvalue = inputtxt.value;
      prevareavalue = txtarea.value;
      cancelon();
      addbtn.innerHTML = "Save Item";
      addbtn.classList.remove("addborder");
      addbtn.classList.add("delborder");
      inputtxt.focus();

      addbtn.removeEventListener("click", addItem);
      addbtn.addEventListener("click", saveItem);
    };

    localStorage.setItem(iditem, txtitem.textContent);
    iditem++;
    inputtxt.value = "";
    txtarea.value = "";
    list.append(div);
    checkLocal();
    checkCountList();
  }
  else {
    alert("Empty Title......");
  }
}

function checkLocal() {
  for (let i = 0; i < localStorage.length; i++) {
    let key = localStorage.key(i);
    let div = document.getElementById(key);
    div.classList.add("item");
    div.classList.remove("displayoffclr");
  }
  for (let i = 0; i < localStorage.length; i++) {
    let key = localStorage.key(i);
    let str = localStorage.getItem(key);
    if (!str.includes(find.value.trim())) {
      let qwert = document.getElementById(key);
      qwert.classList.remove("item");
      qwert.classList.add("displayoffclr");
    }
  }
}

let iditem = 0,
  doid = -1;
let prevtextvalue = "",
  prevareavalue = "";
let mainlist = document.getElementById("mainList");
let txtarea = document.getElementById("textarea");
let addbtn = document.getElementById("add");
let inputtxt = document.getElementById("txt");
let list = document.getElementById("List");
let clearbtn = document.getElementById("clear");
let clearblock = document.getElementById("clearblock");
let cancel = document.getElementById("cancel");
let find = document.getElementById("find");

clearoff();
canceloff();

find.oninput = () => {
  checkLocal();
};
addbtn.addEventListener("click", addItem);
clearbtn.addEventListener("click", clearlist);
cancel.addEventListener("click", changevalue);
