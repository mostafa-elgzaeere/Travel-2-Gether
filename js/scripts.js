let subscribe = document.getElementById("subscribe");
let menu = document.getElementById("menu");
let contact = document.getElementById("contact");
let story = document.getElementById("story");
let upp=document.getElementsByClassName("fa-angle-double-up")[0];


subscribe.onclick=function(){ 
        swal({
            title:"Thanks For subscribe",
            text: "From now on, you will receive all new about our page and offers",
            icon: "success",
            timer:5500,    
        })
}

AOS.init({
    offset: 120,
    duration: 500});


var type=new Typed("#elem",
    {
        strings:["Lorem ipsum dolor sit amet, consectetur  adipiscing elit, <br> sed do iusmod tempor <br> incididunt ut labore et dolore magna.","Lorem ipsum dolor sit amet, consectetur  adipiscing elit, <br> sed do iusmod tempor <br> incididunt ut labore et dolore magna."],
        typeSpeed:120
        }
    )    




menu.onclick=function(){
    window.scrollTo({
        top:900,
        left:0,
        behavior: 'smooth'
      })
}

story.onclick=function(){
    window.scrollTo({
        top:1550,
        left:0,
        behavior: 'smooth'
      })
}
contact.onclick=function(){
    window.scrollTo({
        top:4100,
        left:0,
        behavior: 'smooth'
      })
}
window.onscroll=function(){
    if(scrollY>1000){
        upp.style.display="block"

    }
    else{
        upp.style.display="none"
        }
    
}

upp.onclick=function(){
    window.scrollTo({
        top: 0,
        left:0,
        behavior: 'smooth'
      })

}
