const loginbutton = document.querySelector(".loginbtn")
const loginclose = document.querySelector(".loginclose")
const logincontainer = document.querySelector(".logincontainer")
const togglelogin = ()=>{
    logincontainer.classList.toggle("active")
}
loginbutton.addEventListener("click",()=>{
    togglelogin()
})
loginclose.addEventListener("click",()=>{
    togglelogin()
})
