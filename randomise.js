let list = document.querySelector("tbody");
let children = list.children;
let newList = [];
while (children.length) {
  let child = children[Math.floor(Math.random()*children.length)];
  list.removeChild(child);
  newList.push(child);
  children = list.children;
}
for (child of newList) {
  list.appendChild(child);
}
