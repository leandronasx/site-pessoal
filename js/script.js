const nav =  document.getElementById("navegacao");
const menu = document.getElementById("botao-menu");


menu.addEventListener("click", function(){
    nav.classList.add("nav-mobile");
});

window.addEventListener("resize", ()=> {
    let tamW = window.innerWidth;
    console.log(tamW);
    if(tamW > 640){
        nav.classList.remove("nav-mobile");
    }
})