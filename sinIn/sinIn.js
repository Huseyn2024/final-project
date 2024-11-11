let btn1 = document.querySelector("#btn2")
let btn2 = document.querySelector("#btn3")
let istifadeciadi = document.querySelector("#validationCustom01")
let sifer = document.querySelector("#validationCustom02")
let errormodal = new bootstrap.Modal(document.querySelector(".errormodal"))
let successmodal = new bootstrap.Modal(document.querySelector(".successmodal"))
let form = document.querySelector("form")

btn2.addEventListener("click",()=>{
    location.href = "../sinup/sinup.html"
})

let users = JSON.parse(localStorage.getItem("users")) || []

form.addEventListener("submit", (e) => {
    e.preventDefault()
    let user = users.find((item)=>{
        return item.istifadeciadi === istifadeciadi.value && item.sifre === sifer.value
    })

    console.log(user);
    
    if (!user) {
        errormodal.show()
    }
    else {
        successmodal.show()
        localStorage.setItem("user",JSON.stringify(user))
        location.href = "../index/index.html"
    }
})