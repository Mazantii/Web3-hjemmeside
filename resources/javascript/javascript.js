


function AddPicture(e){
    console.log("Yeet");
    let newPicture = document.createElement("IMG");

    newPicture.setAttribute("class", "image-container");
    newPicture.setAttribute("src", "/resources/images/middle container/vman stats.png");
    e.parentNode.appendChild(newPicture);
    e.parentNode.insertBefore(newPicture, e);
}   