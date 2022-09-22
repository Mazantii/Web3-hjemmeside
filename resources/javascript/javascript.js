
var loggedIn = false;
var picNum = 0;

function AddPicture(e){
    if(loggedIn === true){
    let newPicture = document.createElement("IMG");

    newPicture.setAttribute("class", "image-container");
    newPicture.setAttribute("id", "picture"+ picNum);
    newPicture.setAttribute("src", "/resources/images/middle container/vman stats.png");
    newPicture.setAttribute("onclick", "DeletePicture(picture" + picNum + ")");
    e.parentNode.appendChild(newPicture);
    e.parentNode.insertBefore(newPicture, e);

    picNum++;
    }
    else{
        alert("Not logged in!");
    }

}   
function AddNewPicture(e){
    if(loggedIn === true){
    let newPicture = document.createElement("IMG");

    newPicture.setAttribute("class", "image-container");
    newPicture.setAttribute("id", "picture"+ picNum);
    newPicture.setAttribute("src", "/resources/images/middle container/vman stats.png");
    newPicture.setAttribute("onclick", "DeletePicture(picture" + picNum + ")");
    e.parentNode.appendChild(newPicture);
    e.parentNode.insertBefore(newPicture, e);

    picNum++;
    }
    else{
        alert("Not logged in!");
    }

}  

function DeletePicture(e){
    var d = e;
    if(loggedIn === true){
        //alert("Do you really want to delete this?")
        e.parentNode.removeChild(d);
    }
    else{
        alert("You are not logged in!");
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
