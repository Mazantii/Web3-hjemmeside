
var loggedIn = false;

function AddPicture(e){
    if(loggedIn === true){
    let newPicture = document.createElement("IMG");

    newPicture.setAttribute("class", "image-container");
    newPicture.setAttribute("src", "/resources/images/middle container/vman stats.png");
    e.parentNode.appendChild(newPicture);
    e.parentNode.insertBefore(newPicture, e);
    }
    else{
        alert("Not logged in!");
    }

}   

function LoggedIn(){
    loggedIn = true;
}

/* Was an idea for turning the button on/off, but didnt seem intuitive
function appear(){
    var addPictureButton = document.getElementById("add-photo");
    if(addPictureButton.style.display === "none"){
        addPictureButton.style.display = "block";
    }
    else{
        addPictureButton.style.display = "none";

    }
}
*/
