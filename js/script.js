function saveItem() {
  let div = document.getElementById(doid);
  let txt = div.querySelector(".textitem");

  txt.innerHTML = inputtxt.value;
  inputtxt.value = "";
  addbtn.innerHTML = "Add Item";

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
      
      if(!list.innerHTML) clearblock.style.display = "none";
    };
    btnedit.onclick = (event) => {
      doid = event.target.parentNode.parentNode.id;
      inputtxt.value = text.innerHTML;
      addbtn.innerHTML = "Save Item";
      addbtn.removeEventListener("click", addItem);
      addbtn.addEventListener("click", saveItem);
    };

    iditem++;
    inputtxt.value = "";
    list.append(div);
  }
}

function clearlist() {
  list.innerHTML = "";
  iditem = 0;
}

let iditem = 0, doid = 0;
let mainlist = document.getElementById("mainList");
let addbtn = document.getElementById("add");
let inputtxt = document.getElementById("txt");
let list = document.getElementById("List");
let clearbtn = document.getElementById("clear");
let clearblock = document.getElementById("clearblock");

clearblock.style.display = "none";

addbtn.addEventListener("click", addItem);
clearbtn.addEventListener("click", clearlist);
