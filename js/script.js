function canceloff() {
  cancel.classList.remove("clear");
  cancel.classList.add("displayoffclr");
}
function cancelon() {
  cancel.classList.add("clear");
  cancel.classList.remove("displayoffclr");
}
function clearoff() {
  clearblock.classList.remove("clear");
  clearblock.classList.add("displayoffclr");
}
function clearon() {
  clearblock.classList.add("clear");
  clearblock.classList.remove("displayoffclr");
}

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
    let div = document.createElement("div");
    let txtitem = document.createElement("div");
    txtitem.classList.add("textitem");
    let hlpdiv = document.createElement("div");
    hlpdiv.classList.add("hlp");
    let imgedit = document.createElement("img");
    imgedit.classList.add("edit");
    imgedit.src = "./images/edit.png";
    let imgdele = document.createElement("img");
    imgdele.classList.add("dele");
    imgdele.src = "./images/aaaaaaa.png";
    hlpdiv.append(imgedit);
    hlpdiv.append(imgdele);
    div.classList.add("item");
    div.id = iditem;
    div.append(txtitem);
    div.append(hlpdiv);

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
  checkCountList();
}

function changevalue() {
  inputtxt.value = prevtextvalue;
  inputtxt.focus();
}

function sectiontime() {
  inputtxt.value = "";
  addbtn.innerHTML = "Add Item";
  addbtn.classList.add("addborder");
  addbtn.classList.remove("delborder");

  canceloff();

  addbtn.removeEventListener("click", saveItem);
  addbtn.addEventListener("click", addItem);
}

function checkCountList() {
  let allList = list.querySelectorAll("div");
  if (allList.length / 3 > 15) {
    list.classList.add("listonscroll");
  } else {
    list.classList.remove("listonscroll");
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

clearoff();
canceloff();

addbtn.addEventListener("click", addItem);
clearbtn.addEventListener("click", clearlist);
cancel.addEventListener("click", changevalue);
