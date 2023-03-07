const heading = document.getElementById("heading");
const btn1 = document.getElementById("btn1")  ;
const btn2 = document.getElementById("btn2")  ;
const btn3 = document.getElementById("btn3") ;

btn1.addEventListener("click",()=>{
    heading.style.color="Red"
})
btn2.addEventListener("click",()=>{
    heading.style.color="Green"
})
btn3.addEventListener("click",()=>{
    heading.style.color="Blue"
})