

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

let btn =  document.querySelector('input[name=check]');
let div = document.querySelector('.ongle');
let bg = document.querySelector('.check');
let label = document.querySelector('.label')
let body = document.querySelector('body')

let Oncheked = ()=>{
 if(btn.checked){
     div.classList.add('defile')
     bg.classList.add('bgc')
     label.innerHTML="Mode dark"
     body.classList.add('mode-dark')
 }else{
     div.classList.remove('defile')
     bg.classList.remove('bgc')
     label.innerHTML="Mode claire"
     body.classList.remove('mode-dark')

 }
 
 
 
}
btn.addEventListener('change',Oncheked);


})()

