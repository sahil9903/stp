const body = document.querySelector("body")

const loginbutton = document.querySelector(".loginbtn")
const loginclose = document.querySelector(".loginclose")
const logincontainer = document.querySelector(".logincontainer")
const togglelogin = ()=>{
    logincontainer.classList.toggle("active")
}
loginbutton.addEventListener("click",()=>{
    togglelogin()
    body.style.overflowY = 'hidden'
})
loginclose.addEventListener("click",()=>{
    togglelogin()
    body.style.overflowY = 'scroll'
})

const signbutton = document.querySelector(".signbtn")
const signclose = document.querySelector(".signclose")
const signcontainer = document.querySelector(".signcontainer")
const togglesign = ()=>{
    signcontainer.classList.toggle("active2")
}
signbutton.addEventListener("click",()=>{
    togglesign()
    body.style.overflowY = 'hidden'
})
signclose.addEventListener("click",()=>{
    togglesign()
    body.style.overflowY = 'scroll'
    
})
