const tombolsapa = document.querySelector("#btn-sapa");
const teksSapaan = document.querySelector("#teks-sapaan");
const formKontak = document.querySelector("#form-kontak");
const inputNama = document.querySelector("#name");
const notifikasi = document.querySelector("#notifikasi-form");
const daftarProyek = document.querySelector("#daftar-proyek");
const proyekMasaDepan = ["Web Portofolio", "Aplikasi Kasir", "Landing Page UMKM"];

tombolsapa.addEventListener("click", function() {
    teksSapaan.textContent = "Halo, selamat belajar JavaScript!";

    teksSapaan.style.color = "#3498db";
});

formKontak.addEventListener("submit", function(e) {
    e.preventDefault();

    const namapengguna = inputNama.value;

    notifikasi.textContent = `Terima kasih, ${namapengguna}, telah mengisi formulir!`;
    notifikasi.style.color = "#8fc92c";

    formKontak.reset();
});

proyekMasaDepan.forEach(function(proyek) {
    const li = document.createElement("li");
    li.textContent = proyek;
    daftarProyek.appendChild(li);
});