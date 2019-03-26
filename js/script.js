function createnode(x) {
    console.log(x.parentElement.lastElementChild);
    var creationul = x.parentElement.lastElementChild;
    var creationli = document.createElement("li");
    x.parentNode.appendChild(creationul);
    creationul.appendChild(creationli);
    creationli.innerHTML = 'NAME - VALUE<button  onclick="createnode(this)" contenteditable="false">+</button><ul></ul>';
}
