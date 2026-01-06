// Initialisation de l'arrivé sur le site

function login() {
    let intro = document.getElementById("intro");
    setTimeout(() => { intro.classList.add("inactive"); StartupAudio() }, 2000);
    setTimeout(() => { intro.classList.add("out") }, 4000);
}

// Audio de démarrage

function StartupAudio() {
    let a = document.getElementById("sfxStartup");
    a.currentTime = 0;
    a.volume = 1;
    a.loop = false;
    a.play()
}

// Liste effet d'animation corruption

function XEvent() {
    CorruptionAudio();
    setTimeout(() => {
        document.querySelector("#error").classList.add("active")
        Corruption();

        setTimeout(() => {
            document.querySelector("body").style.background = "black";
            document.querySelector(".logoWindows>img").src = "img/LogoWindowsWhite.png";
        }, 1000)

        setTimeout(() => {
            document.querySelector("body").style.background = "black";
            document.querySelector(".logoWindows>img").src = "img/LogoWindows2012.webp";
        }, 1100)

        setTimeout(() => {
            document.querySelector("#error").classList.remove("active")
            document.querySelector("body").style.background = "black";
            document.querySelector(".logoWindows>img").src = "img/LogoWindowsWhite.png";
        }, 1200)

    }, 500)
}

function Corruption() {
    let bureau = document.querySelector(".bureau");
    let text = "<div>";
    let footer = document.querySelector("footer");

    for (let i = 0; i < 3; i++) {
        setTimeout(() => {
            text += "<div class='application'>" + '<img class="application" src="img/LogoApplication/RedFolder.png" alt="404">'
            text += "<div>404</div></div>"
            bureau.innerHTML = text;
        }, 200 + 200 * i)
    }
    setTimeout(() => { text += "</div><div>" }, 800)

    for (let i = 0; i < 2; i++) {
        setTimeout(() => {
            text += "<div class='application'>" + '<img class="application" src="img/LogoApplication/RedFolder.png" alt="404">'
            text += "<div>404</div></div>"
            bureau.innerHTML = text;
        }, 1000 + i * 200)

    }
    setTimeout(() => { text += "</div><div>" }, 1500)

    setTimeout(() => { text = '<img src="img/LogoApplication/RedFolder.png" alt="404">'; footer.innerHTML = text }, 1600);
    setTimeout(() => { text += '<input type="search" name="search" id="" placeholder="  Search">'; footer.innerHTML = text }, 1600);

    setTimeout(() => {
        for (let i = 0; i < 4; i++) {
            setTimeout(() => {
                text += '<img src="img/LogoApplication/RedFolder.png" alt="404">';
                footer.innerHTML = text;
            }, 200 + i * 200)

        }
    }, 1800)

    setTimeout(() => {
        document.querySelector("#error").classList.add("active")
        let subWindow = document.getElementById("error");
        subWindow.innerHTML = '<header><div>System</div><div>X</div></header><div class="insideBox"><div>Redirecting</div></div>';
        setTimeout(() => {
            window.location.href = "Main.html";
        }, 2000)
    }, 2000)
}

function CorruptionAudio() {
    let a = document.getElementById("sfxError");
    a.currentTime = 0;
    a.volume = 1;
    a.loop = false;
    a.play()
}

