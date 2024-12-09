let counting =document.querySelectorAll(".counting");
let arrayBox =Array.from(counting);


arrayBox.map((item)=>{
    console.log(item)
    let count =0;
    function typeJs(){
        count++;
        item.innerHTML =count;
        
    
        if(count === 10){
            item.style.color ="brown"
            clearInterval(timeInterval);

        }else if(count === 1){
            item.style.color ="red";
        }else if(count === 2){
            item.style.color ="blue"
        }else if(count ===3){
          item.style.color ="green"
        }else if(count ===4){
            item.style.color ="purple"
        }else if(count===5){
            item.style.color ="lime"
        }else if(count ===6){
            item.style.color ="yellow"
        }else if(count ===7){
            item.style.color ="teal"
        }else if(count===8){
            item.style.color ="navy"
        }else{
            item.style.color ="orange"
        }
    }

    let timeInterval =setInterval(()=>{
        typeJs()
    },300)
})



