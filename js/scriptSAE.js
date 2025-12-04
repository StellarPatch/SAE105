const params = new URLSearchParams(window.location.search);
const msg = params.get("msg");
console.log(msg);

const loading = document.getElementById("loading");

const title = document.getElementById("titreSAE");
const subTitle = document.getElementById("sousTitreSAE");
title.innerText = msg ;
subTitle.innerText = SAE_Data[msg]["titre"];

const stats = document.getElementById("stats");
var statistique = "<div>Description : " + SAE_Data[msg]["description"] + "</div>";
stats.innerHTML = statistique;

const SAELayer = document.getElementById("SAELayer");
const footerSAE = document.querySelector("footer");
const erase = document.getElementById("ERASE");
const lightcone = document.getElementById("summon");
const transition = document.getElementById("Transition");
const knight = document.getElementById("container3D");

setTimeout(() => {loading.classList.add("complete");}, 2000);

const fontaines = ["1", "2", "3", "4", "5", "6", "7"];
fontaines.forEach(num => {
    document.querySelector("#fountain" + num).classList.add("inactive");
    document.querySelector("#fountain" + num).classList.add("out");
});

function summon() {
    let timer = 500;
    let blast = document.getElementById("blast");
    let intro = document.getElementById("introSFX");

    SAELayer.classList.add("animation");
    setTimeout(() => { SAELayer.classList.remove("animation") }, 1000);
    setTimeout(() => { footerSAE.classList.add("inactive") }, 1200);
    setTimeout(() => { erase.classList.add("inactive") }, 1200);
    setTimeout(() => { lightcone.classList.add("inactive") }, 1200);

    fontaines.forEach(num => {
        document.querySelector("#fountain" + num).classList.remove("out");
    });
    // Move à l'intérieur de la frame 

    fontaines.forEach(num => {
        setTimeout(() => {
            blast.play();
            blast.currentTime = 0;
            blast.loop = false;
            document.querySelector("#fountain" + num).classList.remove("inactive");
        }, (2250 + timer));
        timer += 500;
    })

    setTimeout(() => { intro.play(); intro.currentTime = 0, intro.loop = false }, 5500)
    setTimeout(() => { transition.classList.add("active"); }, 6000)

    fontaines.forEach(num => {
        setTimeout(() => {
            document.querySelector("#fountain" + num).classList.add("inactive");
        }, 6500);
        setTimeout(() => {
            document.querySelector("#fountain" + num).classList.add("out");
        }, 7500);
    })

    setTimeout(() => {knight.classList.add("inactive")}, 11000 )
    setTimeout(() => { transition.classList.remove("active") }, 11000);
    setTimeout(() => { SAELayer.classList.add("invisible") }, 7500)

    // Affiche avec latence les fontaines
}

function Return() {
    let intro = document.getElementById("introSFX");

    transition.classList.add("active")
    intro.play();
    intro.currentTime = 0;
    intro.loop = false;
    setTimeout(() => { transition.classList.remove("active") }, 5250)

    setTimeout(() => { footerSAE.classList.remove("inactive") }, 3000);
    setTimeout(() => { erase.classList.remove("inactive") }, 3000);
    setTimeout(() => { lightcone.classList.remove("inactive") }, 3000);

    setTimeout(() => { SAELayer.classList.remove("invisible") }, 3000)
    setTimeout(() => {knight.classList.remove("inactive")}, 3000 )
}

function ERASE() {
    window.close();
}

