let curr_img = document.querySelectorAll(".img_sec");
let left_swipe = document.querySelector(".btn_left");
let right_swipe = document.querySelector(".btn_right");
curr_img[0].classList.add("active");
let curr_index=0;


curr_img.forEach((img,index)=>{
    img.addEventListener("click",()=>{
        removeactivefromremaining();
        img.classList.add("active");
        curr_index= index;
        
    });
 
   
});
function removeactivefromremaining(){
    curr_img.forEach((img)=>{
        img.classList.remove("active");
    })
}
left_swipe.addEventListener('click',()=>{
    if(curr_index>0){
        
        removeactivefromremaining();
        curr_img[curr_index-1].classList.add("active");
        curr_index-=1;
    }
})
right_swipe.addEventListener('click',()=>{
    
    if(curr_index<curr_img.length-1){
        removeactivefromremaining();  
        curr_img[curr_index+1].classList.add("active");
        curr_index+=1;
}
    
});



