function createnode(x){
    var creationul = document.createElement("ul");
    x.parentNode.appendChild(creationul); creationul.innerHTML= '<li contenteditable="true" id="newchild"  >NAME - VALUE<button  onclick="createnode(this)" contenteditable="false">+</button></li>';  
}




