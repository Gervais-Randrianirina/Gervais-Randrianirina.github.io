

(function(){
    /*
evenement l'hors du clisk du menu
*/
let menu = ()=>{
    const menu = document.querySelector(".menu")
    const onglet = document.querySelector(".onglet")
    menu.addEventListener('click',()=>{
        onglet.classList.toggle('slide')
        menu.classList.toggle('menus')
        
    })
}
menu()
// Pour que le menu soit en position fixed l'horseque l'on scroll
const navigation = document.querySelector('.navigation')
let rect = navigation.getBoundingClientRect()
let top = rect.top + scrollY
let width = rect.width
console.log(width)

let onScroll =()=>{
let deja = navigation.classList.contains('fixed')
    if(scrollY>top && !deja ){
        navigation.classList.add('fixed')
        navigation.style.width = width
    }else if(scrollY<top && deja){
        navigation.classList.remove('fixed')
    }

}




window.addEventListener('scroll',onScroll)

})()

