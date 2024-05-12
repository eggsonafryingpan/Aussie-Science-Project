function myFunction(id) {
    console.log(id);
    var image = document.getElementById("image")
    image.removeAttribute("class");
    if (id == "solidRed") {
        var image = document.getElementById("image")
        image.classList.add('solidRedPhoto');
    }
    if (id == "redMerle") {
        var image = document.getElementById("image")
        image.classList.add('redMerlePhoto');
    }
    if (id == "blueMerle") {
        var image = document.getElementById("image")
        image.classList.add('blueMerlePhoto');
    }
    if (id == "solidBlack") {
        var image = document.getElementById("image")
        image.classList.add('solidBlackPhoto');
    }
}