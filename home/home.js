let empty = document.querySelector(".pleaes")
let btn = document.querySelector(".btn")
let p = document.querySelector(".p")
let please1 = document.querySelector(".please1")
let modalbody = document.querySelector(".modal-body")
let modal = new bootstrap.Modal(document.querySelector("#exampleModal"))
let comps = JSON.parse(localStorage.getItem("comps")) || []
let users = JSON.parse(localStorage.getItem("users")) || []
let axdar = document.querySelector(".axdaris")

btn.addEventListener("click", () => {
    location.href = "../index/index.html"
})

displaycomps(comps)

function displaycomps(newcomps) {

    empty.innerHTML = ""
    if (comps.length == 0) {
        empty.innerHTML = "<h1>saytda komputer paymasilmayib</h1>"
    }
    newcomps.forEach((comp) => {
        let element = `
            <div class="card" style="width: 18rem;margin-left: 30px;padding: 5px;margin-top: 30px;">
                <img src="${comp.sekil}" class="card-img-top" alt="Bu sekilin acilmasi ugurlu olmadi">
                <div class="card-body">
                    <p style="background-color: aqua;display: flex;width: 20px;" class="card-text">Ad:${comp.ad}</p>
                    <p style="background-color: aqua;display: flex;width: 40px;" class="card-text">Tesvir:${comp.tesvir}</p>
                    <p style="background-color: aqua;display: flex;width: 28px;" class="card-text">Yeni:${comp.yeni}</p>
                    <p style="background-color: aqua;display: flex;width: 50px;" class="card-text">Qiymet:${comp.qiymet}</p>
                    <p style="background-color: aqua;display: flex;width: 51px;" class="card-text">Telefon:${comp.telofon}</p>
                    <button style="margin: auto;display: block;" onclick="openmodal()" class="btn btn-primary">Etrafli</button>
                </div>
            </div>
        `
        empty.innerHTML += element
    });
}

function openmodal() {
    comps.forEach((comp) => {
        let element = `
        <h1 style="text-align: center; margin: auto;" class="modal-title fs-5" id="exampleModalLabel">Komputer haqinda etrafli melumat</h1>
        <img style="margin: auto;display: block; height: 200px;width: 200px;object-fit: cover;" src="${comp.sekil}">
        <p>Ad:${comp.ad}</p>
        <p>Tesvir:${comp.tesvir}</p>
        <p>Qiymet:${comp.qiymet} AZN</p>
        <p>Telefon:${comp.telefon}</p>
        <p>Yeni:${comp.yeni}</p>
        <p>Emeli yaddas:${comp.emeliY} GB</p>
        <p>Dayimi yassds:${comp.dayimiY} GB</p>
        <p>Dayimi yassds tipi:${comp.dayimiYt}</p>
        <p>Emeli yassds sistemi:${comp.emeliYs}</p>
        <p>Video card:${comp.videoC} GB</p>
        
    `
        modalbody.innerHTML = element
        modal.show()
    })

}

let items = document.querySelectorAll(".list-group-item")

items.forEach(function (item) {
    item.addEventListener("click", (e) => {
        items.forEach((k) => {
            k.classList.remove("active")
        })
        e.target.classList.add("active")

        if (comps.length == 0) {
            empty.innerHTML = "<h1>saytda komputer paymasilmayib</h1>"
        }
        else {
            if (e.target.innerHTML == "Butun komputerler") {
                displaycomps(comps)
            }
            else {
                let filteredcomps = comps.filter(function (comp) {
                    return comp.Kateqoriyalar.toLowerCase() == e.target.innerHTML.toLowerCase()
                })
                if (filteredcomps.length == 0) {
                    empty.innerHTML = `<h1 style="text-align: center;">${e.target.innerHTML} koteqoriyasinda komputer yoxdur</h1>`
                }
                else {
                    displaycomps(filteredcomps)
                }
            }
        }

    })
})

axdar.addEventListener("input", (e) => {
    let filteredcomps = comps.filter((comp) => {
        return comp.ad.toLowerCase().includes(e.target.value.toLowerCase()) || comp.Kateqoriyalar.toLowerCase().includes(e.target.value.toLowerCase())
    })
    console.log(filteredcomps);
    displaycomps(filteredcomps)


})