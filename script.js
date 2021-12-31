let button = document.querySelector(".share-btn")
let show = document.getElementById("soc")


button.addEventListener("focusin", function(){
show.style.visibility = "visible";
})

button.addEventListener("focusout", function(){
show.style.visibility = "hidden";

})
