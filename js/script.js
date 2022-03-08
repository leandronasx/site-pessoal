const cabecalhoMobile =  document.getElementById("cabecalho-menu");
const navMobile = document.getElementById("cabecalho-navegacao");
const close = document.getElementById("close-menu");
const menu = document.getElementById("botao-menu");


menu.addEventListener("click", function(){
    cabecalhoMobile.classList.add("cabecalho-mobile");
    navMobile.classList.add("nav-mobile");
    close.classList.remove("oculto");
});

window.addEventListener("resize", ()=> {
    let tamW = window.innerWidth;
    if(tamW > 601){
        cabecalhoMobile.classList.remove("cabecalho-mobile");
        navMobile.classList.remove("nav-mobile");
        close.classList.add("oculto");
    }
})

function fecharMenu(){
    cabecalhoMobile.classList.remove("cabecalho-mobile");
    navMobile.classList.remove("nav-mobile");
    close.classList.add("oculto");
}