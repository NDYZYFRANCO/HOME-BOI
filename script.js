function openButton(){
    document.getElementById("myForm").style.display = "block";
}
function closeButton(){
    document.getElementById("myForm").style.display = "none";
}
const toggleBtn = document.getElementById("toggle_btn");
toggleBtn.addEventListener("click",function(){
    document.body.classList.toggle("body.dark_mode");
});
function openProduct(){
    document.getElementById("myProduct").style.display = "block";
}
function closeForm(){
    document.getElementById("myProduct").style.display = "none";
}
function openAbout(){
    document.getElementById("myAbout").style.display = "block";
}