//menu


//namma user
let nameHome = prompt("siapa nama anda", "");
document.getElementById("name").innerHTML = nameHome



//slide gambar
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function showDivs(n) {
    var i;
    var imgList = document.getElementsByClassName("daftar");
    if (n > imgList.length) slideIndex = 1;
    else if (n < 1) slideIndex = imgList.length;
    for (i = 0; i < imgList.length; i++) {
        imgList[i].style.display = "none";  
    }
    imgList[slideIndex-1].style.display = "block";  
}

setInterval(() => {
    plusDivs(1);
}, 1500)

//form validasi

//tombol submit
document.getElementById('myForm').addEventListener('submit', function(event) {
    let isValid = true;

    // Nama validation
    const nama = document.getElementById('nama').value;
    if (nama.trim() === "") {
        isValid = false;
        document.getElementById('namaError').innerText = "Nama harus diisi.";
    } else {
        document.getElementById('namaError').innerText = "";
    }

    // Nomor HP validation
    const nomorhp = document.getElementById('nomorhp').value;
    if (nomorhp.trim() === "" || isNaN(nomorhp)) {
        isValid = false;
        document.getElementById('nomorhpError').innerText = "Nomor HP harus diisi dengan angka.";
    } else {
        document.getElementById('nomorhpError').innerText = "";
    }

    // Tanggal validation
    const tanggal = document.getElementById('tanggal').value;
    if (tanggal.trim() === "") {
        isValid = false;
        document.getElementById('tanggalError').innerText = "Tanggal harus diisi.";
    } else {
        document.getElementById('tanggalError').innerText = "";
    }

    // Jenis Kelamin validation
    const laki = document.getElementById('laki').checked;
    const perempuan = document.getElementById('perempuan').checked;
    if (!laki && !perempuan) {
        isValid = false;
        document.getElementById('jenisKelaminError').innerText = "Jenis Kelamin harus dipilih.";
    } else {
        document.getElementById('jenisKelaminError').innerText = "";
    }

    // Pesan validation
    const pesan = document.getElementById('pesan').value;
    if (pesan.trim() === "") {
        isValid = false;
        document.getElementById('pesanError').innerText = "Pesan harus diisi.";
    } else {
        document.getElementById('pesanError').innerText = "";
    }

    // Prevent form submission if validation fails
    if (!isValid) {
        event.preventDefault();
    }
});
//message
