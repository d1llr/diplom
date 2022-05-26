function takingHotel(){
    let selectHeader = document.querySelector(".select-header");
    let selectItem =  document.querySelectorAll('.select_item');
    let selectCurrent = document.querySelector('.select_current');
    let selectBody =  document.querySelector('.select_body');
    selectHeader.addEventListener('click', function(){
        selectBody.classList.toggle("hidden");
        })
    selectItem.forEach(item=>{
        item.addEventListener('click', function(){
            let text = this.innerHTML;
            selectCurrent.innerHTML = text;
            selectBody.classList.toggle("hidden");
        })
    }) 
}
function takingRourists(){
    let selectHeader = document.querySelector(".select-right-header");
    let selectItem =  document.querySelectorAll('.select-right-item');
    let selectCurrent = document.querySelector('.select-right-current');
    let selectBody =  document.querySelector('.select-right-body');
    selectHeader.addEventListener('click', function(){
        selectBody.classList.toggle("hidden");
        })
    selectItem.forEach(item=>{
        item.addEventListener('click', function(){
            let text = this.innerHTML;
            selectCurrent.innerHTML = text;
            selectBody.classList.toggle("hidden");
        })
    }) 
}
function slider(){
    slider = document.querySelector(".slider");
    slider.addEventListener("click", function(){
        
    })
}
function autorization(){
    console.log(1);
    let auth = document.querySelector('.authorize');
    console.log(auth);
}
takingHotel();
takingRourists();
autorization();