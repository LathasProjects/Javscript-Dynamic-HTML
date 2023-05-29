let list_of_items = ["Butter", "Milk", "Bread", "Jam", "Sauce"];


let divelement = document.createElement("div");
divelement.classList.add("bg-container");
document.body.appendChild(divelement);

let heading = document.createElement("h1");
heading.classList.add("main-heading");
heading.textContent = "Grocery List";
divelement.appendChild(heading);


let ulcontainer = document.createElement("ul");
ulcontainer.classList.add("list-container");
divelement.appendChild(ulcontainer);

for (let i of list_of_items) {
    let liElement = document.createElement("li");
    liElement.textContent = i;
    ulcontainer.appendChild(liElement);
}

let inputelement = document.createElement("input");
inputelement.classList.add("input-box");
inputelement.type = "checkbox";
inputelement.id = "mycheckbox";
divelement.appendChild(inputelement);

let labelelement = document.createElement("label");
labelelement.classList.add("label-style");
labelelement.setAttribute("for", "mycheckbox");
labelelement.textContent = "Need Home Delivery";
divelement.appendChild(labelelement);

let bre = document.createElement("br");
divelement.appendChild(bre);

let buttonElement = document.createElement("button");
buttonElement.classList.add("btn", "btn-primary");
buttonElement.textContent = "Proceed To Pay";
divelement.appendChild(buttonElement);