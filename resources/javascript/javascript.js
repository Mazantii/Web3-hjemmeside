
var loggedIn = false;

function AddPicture(e){
    if(loggedIn === true){
    let newPicture = document.createElement("IMG");

    newPicture.setAttribute("class", "image-container");
    newPicture.setAttribute("src", "/resources/images/middle container/vman stats.png");
    newPicture.setAttribute("onclick", "DeletePicture()");
    e.parentNode.appendChild(newPicture);
    e.parentNode.insertBefore(newPicture, e);
    }
    else{
        alert("Not logged in!");
    }

}   

function DeletePicture(e){
    if(loggedIn === true){
        //alert("Do you really want to delete this?")
        
    }
}

function Logout(){
    loggedIn = false;
    alert("You have been logged out!");
}

function LogIn(){
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
