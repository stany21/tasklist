var List = document.getElementsByTagName("li");
console.log(List);
for (var i = 0; i < List.length; i++) {
    var button = document.createElement("button");
    button.className = "btn btn-primary delete";
    var textnode = document.createTextNode("Delete");
    List[i].appendChild(button);
    button.appendChild(textnode);

}

var close = document.getElementsByClassName("delete");
for (var i = 0; i < close.length; i++) {
    close[i].addEventListener("click", function () {
        var div = this.parentElement;
        div.style.display = "none";
    })
}


function AddNew() {
    var newADD = document.getElementById("myinput").value;
    var myul = document.getElementById("myul");

    var li = document.createElement("li");
    li.className = "list-group-item"
    li.style.display = "flex";
    li.style.justifyContent = "space-between";
    li.style.alignItems = "center";
    var textnode = document.createTextNode(newADD);
    myul.appendChild(li);
    li.appendChild(textnode);
    var button = document.createElement("button");
    button.className = "btn btn-primary delete";
    var textnode = document.createTextNode("Delete");
    li.appendChild(button);
    button.appendChild(textnode);




    var close = document.getElementsByClassName("delete");
    for (var i = 0; i < close.length; i++) {
        close[i].addEventListener("click", function () {
            var div = this.parentElement;
            div.style.display = "none";
        })
    }



}


