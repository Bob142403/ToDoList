export function canceloff() {
  cancel.classList.remove("clear");
  cancel.classList.add("displayoffclr");
}
export function cancelon() {
  cancel.classList.add("clear");
  cancel.classList.remove("displayoffclr");
}
export function clearoff() {
  clearblock.classList.remove("clear");
  clearblock.classList.add("displayoffclr");
}
export function clearon() {
  clearblock.classList.add("clear");
  clearblock.classList.remove("displayoffclr");
}
export function changevalue() {
  inputtxt.value = prevtextvalue;
  inputtxt.focus();
}

export function sectiontime() {
  inputtxt.value = "";
  addbtn.innerHTML = "Add Item";
  addbtn.classList.add("addborder");
  addbtn.classList.remove("delborder");

  canceloff();

  addbtn.removeEventListener("click", saveItem);
  addbtn.addEventListener("click", addItem);
}

export function checkCountList() {
  let allList = list.querySelectorAll("div");
  if (allList.length / 3 > 15) {
    list.classList.add("listonscroll");
  } else {
    list.classList.remove("listonscroll");
  }
}
export function checkList() {
  if (!list.innerHTML) {
    clearoff();
  }
}
export function createEl(tag, clas) {
  let tg = document.createElement(tag);
  if (clas) tg.classList.add(clas);
  return tg;
}
