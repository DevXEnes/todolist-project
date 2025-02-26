let input = document.querySelector("#input-box");
let button = document.querySelector("button");
let listcontainer = document.querySelector("#list-container");
function addtast() {
    if (input.value == '') {
        alert("Lütfen Alanı Doldurunuz");
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = input.value;
        listcontainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
        let change = document.createElement("span");
        li.appendChild(change);
        change.innerHTML = "D";
        change.id = "change";
    }
    input.value = "";
    savedata();
}
listcontainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked"); // "toogle" yerine "toggle" olarak düzeltildi
        savedata();
    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        savedata();
    }
}, false);

function savedata() {
    localStorage.setItem("data", listcontainer.innerHTML);
}
function showdata() {
    listcontainer.innerHTML = localStorage.getItem("data");
}

showdata();