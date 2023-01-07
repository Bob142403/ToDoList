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

export function createEl(tag, clas) {
  let tg = document.createElement(tag);
  if (clas) tg.classList.add(clas);
  return tg;
}
