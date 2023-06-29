let circles = document.querySelectorAll(".circle");
let progressline = document.querySelector(".progress_line");

let current_circle_index = 0;
let max_len = (circles.length)-1;
let progress_line_width = 0;

let prev_button = document.querySelector(".prev");
let next_button = document.querySelector(".next");


prev_button.addEventListener("click",()=>{

    if(current_circle_index<1){
      
        current_circle_index = 0;
        prev_button.disabled = true;
    }
    else{
    circles[current_circle_index].classList.remove("active");  
    next_button.disabled = false;
    current_circle_index-=1;
    progress_line_width -=33;
    progressline.style.width = progress_line_width+'%' ;
    }

});
next_button.addEventListener("click",()=>{


    if(current_circle_index>=max_len){
        
        current_circle_index=max_len;
        next_button.disabled = true;
    }

    else{
        
    prev_button.disabled = false;
    circles[current_circle_index+1].classList.add("active");
    current_circle_index+=1;
    progress_line_width +=33;
    progressline.style.width = progress_line_width+'%';
    }
});
