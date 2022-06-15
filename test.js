
   let btn =  document.querySelector('input[name=check]');
   let div = document.querySelector('.ongle');
   let bg = document.querySelector('.check');
   let Oncheked = ()=>{
    if(btn.checked){
        div.classList.add('defile')
        bg.classList.add('bgc')

    }else{
        div.classList.remove('defile')
        bg.classList.remove('bgc')
    }
    
    
    
   }
   btn.addEventListener('change',Oncheked);
