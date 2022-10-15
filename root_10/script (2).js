let element_photo = document.querySelector(".photo").style;

function size() {
    let horizontally = document.querySelector(".input_horizontally").value;
    let vertically = document.querySelector(".input_vertically").value;
    element_photo.width = horizontally+"px";
    element_photo.height = vertically+"px";
}

setInterval(size,1);