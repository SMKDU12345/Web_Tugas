function ubah_nilai(){
    let inputNilai = document.getElementById("input_nilai").value;
    let valas = document.getElementById("valas").value;
    let hasilNilai;
    if (valas == "USD"){
        document.getElementById("hasil_nilai").value = "Rp. " + parseFloat(inputNilai) * 9915;
        hasilNilai = document.getElementById("hasil_nilai").value;
        console.log(hasilNilai);
    } 
    else if (valas == "SGD"){
        document.getElementById("hasil_nilai").value = "Rp. " + parseFloat(inputNilai) * 13472;
        hasilNilai = document.getElementById("hasil_nilai").value;
        console.log(hasilNilai);
    }
    else if (valas == "RM"){
        document.getElementById("hasil_nilai").value = "Rp. " + parseFloat(inputNilai) * 874;
        hasilNilai = document.getElementById("hasil_nilai").value;
        console.log(hasilNilai);
    }
    else if (valas == "YEN"){
        document.getElementById("hasil_nilai").value = "Rp. " + parseFloat(inputNilai) * 120;
        hasilNilai = document.getElementById("hasil_nilai").value;
        console.log(hasilNilai);
    }
    else if (valas == "EUR"){
        document.getElementById("hasil_nilai").value = "Rp. " + parseFloat(inputNilai) * 15888;
        hasilNilai = document.getElementById("hasil_nilai").value;
        console.log(hasilNilai);
}
    else if (valas == "RAS"){
    document.getElementById("hasil_nilai").value = "Rp. " + parseFloat(inputNilai) * 3592;
    hasilNilai = document.getElementById("hasil_nilai").value;
    console.log(hasilNilai);
}
}