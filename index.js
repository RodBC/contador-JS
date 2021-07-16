window.addEventListener("load", () => {
// tempo em segundos que queremos
let sec = 20;

const countDiv = document.getElementById("timer");

const secPass = () => {

    let min = Math.floor(sec/60);
    let segundosRestantes = sec % 60;

    if (segundosRestantes < 10) {
        segundosRestantes = "0" + segundosRestantes;
    }
    if (min <10) {
        min = "0" + min;
    }

// formato desejado 02:59
    countDiv.innerHTML = min + ":" + segundosRestantes;

//condição de finalização
    if (sec > 0) {
        sec = sec -1;
    }

    else{
        countDiv.innerHTML = "Acabou!";
    }
};

const countDown = setInterval(() => secPass(),1000); 

})
