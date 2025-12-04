const principal = document.getElementById("principal")

const GeoStar = document.getElementById('GeoStar');

const SAE = document.getElementById('flexSAE');

const dog = document.getElementById("annoying-dog-undertale");
const transition = document.getElementById("Transition");

var S1 = ["SAE1.01", "SAE1.02", "SAE1.03", "SAE1.04", "SAE1.05", "SAE1.06"];
var S2 = ["SAE2.01", "SAE2.02", "SAE2.03", "SAE2.04"];
var S3 = ["SAE3.01", "SAE3.02", "SAE3.03", "STAGE CREA. NUM.", "Portefolio"];
var S4 = ["SAE4.Crea.01", "SAE4.Crea.02", "Portefolio"];
var S5 = ["SAE5.Crea.01", "Portefolio", "PROJET"];
var S6 = ["STAGE", "SOUTENANCE"];


///////////////////// SCRIPT LECTEUR MUSIQUE ///////////////////
var NomMusics = ["Its Raining Somewhere Else - Toby Fox", "Empty Town - Toby Fox"]
// Liste de nom de musique + auteur dans le dossier Music à modifier manuellement pour nveau

let Liste_Audio = '<option value="false">None Music</option>'
// Variable pour liste sélecteur de musique

let Liste_Audio_Asset = ""
// Variable pour ajouter physiquement sur la page HTML les audios pour les jouer (invisbile)

NomMusics.forEach(function (Nom, i) {
    Liste_Audio += '<option value="audio' + (i) + '">' + NomMusics[i] + "</option>";
});
document.querySelector("#Audio").innerHTML = Liste_Audio;
// Ajout dynamique depuis NomMusics (Json pas encore) dans le selecteur de musique à jouer

NomMusics.forEach(function (Nom, i) {
    Liste_Audio_Asset += '<audio id="audio' + i + '" src="sfx/Music/' + NomMusics[i] + '.mp3"></audio>'
});
document.querySelector("#ListeAudio").innerHTML = Liste_Audio_Asset;
// Ajout dynamique des balises audio avec NomMusics

var currentAudio = document.querySelector("#Audio").value;
var SaveCurrent = null;
// Variable pour acquérir musique pour audio()

//////////////////////// ZONE SITE SCRIPT ////////////////////////////

// MAIN LAYER //

// Init. Animation
GeoStar.classList.add('animation');
SAE.classList.add('animation');

/////////////////////// ZONE FONCTIONS ////////////////////////////

function audio() {
    currentAudio = document.querySelector("#Audio").value;

    if (SaveCurrent && SaveCurrent !== currentAudio) {
        let prev = document.getElementById(SaveCurrent);
        prev.pause();
        prev.currentTime = 0;
        prev.loop = false;
    }

    // Jouer la nouvelle musique
    if (currentAudio !== "false") {
        let a = document.getElementById(currentAudio);
        a.volume = 1;
        a.loop = true;
        a.play();
        SaveCurrent = currentAudio; // sauvegarder la musique actuelle
    }

}

var Semestre = document.querySelector("#Semestre").value;

function switchSemester() {
    Semestre = document.querySelector("#Semestre").value;
    if (getSemesterData(Semestre).length <= 3) {

        let Liste_SAE = getSemesterData(Semestre)
        let Text = '<div class="RowSAE">'

        TransitionAnimation();

        setTimeout(() => {

            Liste_SAE.forEach(function (num, i) {
                Text += '<div class="SAE" onclick="SAEClick(' + "'" + Liste_SAE[i] + "'" + ')">' + Liste_SAE[i] + "</div>";
            });

            Text += "</div>";

            document.querySelector("#flexSAE").innerHTML = Text;
        }, 1000);
    }
    else {
        let Liste_SAE = getSemesterData(Semestre)
        let Text = '<div class="RowSAE">'

        TransitionAnimation();

        setTimeout(() => {
            for (let i = 0; i <= 2; i++) {
                Text += '<div class="SAE" onclick="SAEClick(' + "'" + Liste_SAE[i] + "'" + ')">' + Liste_SAE[i] + "</div>";
            };
            Text += '</div><div class="RowSAE">';
            for (let i = 3; i < Liste_SAE.length; i++) {
                Text += '<div class="SAE" onclick="SAEClick(' + "'" + Liste_SAE[i] + "'" + ')">' + Liste_SAE[i] + "</div>";
            };
            Text += "</div></div>";

            document.querySelector("#flexSAE").innerHTML = Text;
        }, 1000);
    }

}

function getSemesterData(Name) {
    switch (Name) {
        case "S1": return S1;
        case "S2": return S2;
        case "S3": return S3;
        case "S4": return S4;
        case "S5": return S5;
        case "S6": return S6;
    }
}

function SAEClick(X) {
    currentSAE_page = X ;
    window.open("SAE.html?msg="+encodeURIComponent(currentSAE_page), "_blank")
}

function TransitionAnimation() {
    let dogSFX = document.getElementById("dogSFX");

    principal.classList.add("inactive");
    dog.classList.add("active");
    dogSFX.play();
    dogSFX.currentTime = 0;
    dogSFX.loop = false;
    setTimeout(TransitionAnimationOff, 2500);

}

function TransitionAnimationOff() {
    principal.classList.remove("inactive");
    dog.classList.remove("active");
}

///////////////////////////////////////////////////////////////////