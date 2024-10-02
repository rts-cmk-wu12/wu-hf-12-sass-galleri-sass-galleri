const imgs = document.querySelectorAll(".imageGal__img")
const lightShow = document.querySelector(".imageFocus__image")
const ligthShowBox = document.querySelector(".imageFocus")
const xClick = document.querySelector(".imageFocus__x")
imgs.forEach( element =>{
    element.addEventListener("click", ligthBox)
})
xClick.addEventListener("click",ligthBoxClose)

function ligthBox(){
    let imgSrc = this.getAttribute("src")
    console.log(imgSrc)
    lightShow.setAttribute("src", imgSrc)
    ligthShowBox.style.display = "grid"

}
function ligthBoxClose(){
    ligthShowBox.style.display = "none"
}