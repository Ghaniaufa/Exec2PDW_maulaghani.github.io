function kirimData() {
    var nama = document.getElementById("nama").value;
    var kucing = document.getElementById("kucing").value;
    var tipe = document.querySelector("input[name=tipe]:checked").value;
    var karakter = document.getElementById("Karakter").value;
    var tanggal = document.getElementById("tanggal").value;
    var alamat = document.getElementById("alamat").value;

    alert(
        "Nama           : " + nama +
        "\nKucing       : " + kucing +
        "\nTipe         : " + tipe +
        "\nAlamat       : " + alamat +
        "\nKarakter     : " + karakter +
        "\nTanggal      : " + tanggal
    );
}