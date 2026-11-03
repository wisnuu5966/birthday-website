function bukaUcapan() {
    document.getElementById("ucapan").style.display = "block";

    for (let i = 0; i < 10; i++) {
        setTimeout(buatHati, i * 200);
    }
}

function buatHati() {
    const hati = document.createElement("div");

    hati.className = "hati";
    hati.innerHTML = "❤️";

    hati.style.left = Math.random() * 100 + "%";

    document.getElementById("hati-container").appendChild(hati);

    setTimeout(() => {
        hati.remove();
    }, 4000);
}

function bukaUcapan() {
    document.getElementById("ucapan").style.display = "block";
    document.getElementById("foto-container").style.display = "block";

    const musik = document.getElementById("musik");
    musik.play();

    for (let i = 0; i < 10; i++) {
        setTimeout(buatHati, i * 200);
    }

}

function bukaVideo() {
    document.getElementById("video-container").style.display = "block";
}

function potongKue() {
    document.getElementById("kue-ulangtahun").innerHTML = "🍰";

    document.getElementById("pesan-kue").innerHTML =
        "Yeayyy! Kuenya sudah dipotong! Selamat menikmati! ❤️";
}