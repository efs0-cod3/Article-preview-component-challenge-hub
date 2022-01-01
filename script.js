let button = document.querySelector(".share-btn")
let show = document.getElementById("soc")
let share_btn = document.getElementById('s-btn')


button.addEventListener("focusin", function(){
show.style.visibility = "visible";
share_btn.style.color = "hsl(210, 46%, 95%)";
share_btn.style.background = "hsl(212, 23%, 69%)";
})

button.addEventListener("focusout", function(){
show.style.visibility = "hidden";
share_btn.style.color = "";
share_btn.style.background = "";
})

    