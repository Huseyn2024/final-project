let table = new DataTable('.table');
let comps = JSON.parse(localStorage.getItem("comps")) || []
let users = JSON.parse(localStorage.getItem("users")) || []
let user = JSON.parse(localStorage.getItem("user")) || []
let toast = new bootstrap.Toast(document.querySelector(".toast"))
let Modal = new bootstrap.Modal(document.querySelector(".modal"))
let Kateqoriyalar = document.querySelector("#validationCustom01")
let ad = document.querySelector("#validationCustom02")
let qiymet = document.querySelector("#validationCustom03")
let tesvir = document.querySelector("#validationCustom04")
let yeni = document.querySelector("#validationCustom05")
let sekil = document.querySelector("#validationCustom06")
let emeliY = document.querySelector("#validationCustom07")
let merkeziY = document.querySelector("#validationCustom08")
let dayimiY = document.querySelector("#validationCustom09")
let dayimiYt = document.querySelector("#validationCustom10")
let emeliS = document.querySelector("#validationCustom11")
let videoC = document.querySelector("#validationCustom12")
let imgparent = document.querySelector(".imgparent")
let btn = document.querySelector("#btn")
let btn1 = document.querySelector("#btn1")
let form = document.querySelector("form")


function genid() {
    return comps[comps.length - 1]?.id + 1 || 1
}

btn.addEventListener("click", () => {
    location.href = "../index/index.html"
})

function displaycomps() {
    comps.forEach(function (comp) {
        if (comp.value && id.value && ad.value && sekil.value && qiymet.value) {
            table.row.add([
                comp.id, comp.ad, `<img onclick="openmodal" src="${comp.sekil}">`, comp.qiymet,
                `<button onclick="removeComp(${comp.id})" class="btn btn-danger">sil</button>`
                `<button onclick="changComp(${comp.id})" class="btn btn-primary">Redakte</button>`
            ]).draw()
        }
    })
}

function removeComp(id){
    complar = comps.filter((e)=>{
        return e.id !==id
        removeComp()
    })
}

function openmodal() {
    comps.forEach((comp) => {
        let element = `
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-body">
                        <img src="${comp.sekil}" alt="...">
                    </div>
                </div>
            </div>
        </div>
        `
    })

}

form.addEventListener("submit", (e) => {
    e.preventDefault()
    if (form.checkValidity()) {
        let comp = {
            id: genid(),
            ad: ad.value,
            Kateqoriyalar:Kateqoriyalar.value,
            tesvir:tesvir.value,
            yeni:yeni.value,
            emeliY:emeliY.value,
            videoC:videoC.value,
            dayimiYt:dayimiYt.value,
            dayimiY:dayimiY.value,
            sekil: sekil.value,
            qiymet: `${qiymet.value} AZN`
        }
        console.log(comp);
        comps.push(comp)
        console.log("isledi");
        
        localStorage.setItem("comps", JSON.stringify(comps))
    }
    else {
        alert("zehmet olmasa butun inputlari doldurun")
        toast.show()
    }

})

sekil.addEventListener("input",(a)=>{
    console.log(a.target.value);
    if(a.target.value == ""){
        imgparent.innerHTML = ""
    }
    else{
        imgparent.innerHTML = `<img src="${a.target.value}" alt="sekil linki sehefdir">`
    }

})