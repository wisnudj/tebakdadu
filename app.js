
alert('ini adalah permainan DADU GILA, setiap giliran pemain akan menebak jumlah dadu apakah jumlahnya lebih besar atau lebih kecil dari sebelumnya. Pemain akan diberikan uang 1000 sebagai permulaan');

// inisisasi
var uang = 1000;
var dadu1Akhir = Math.floor((Math.random() * 6) + 1);
var dadu2Akhir = Math.floor((Math.random() * 6) + 1);
var gameOn = true;


while(gameOn) {
  var totalAkhir = dadu1Akhir + dadu2Akhir;

  var tebakan = periksaTebakan(dadu1Akhir, dadu2Akhir, totalAkhir);

  var taruhan = periksaTaruhan(uang);

  var dadu1Awal = Math.floor((Math.random() * 6) + 1);
  var dadu2Awal = Math.floor((Math.random() * 6) + 1);
  var totalAwal = dadu1Awal + dadu2Awal;

  if(totalAwal > totalAkhir && tebakan == 'besar') {
    uang = uang + taruhan;
    alert('dadu1: ' + dadu1Awal + ' dadu2: ' + dadu2Awal + 'total: ' + totalAwal);
    alert('selamat anda benar. Anda mendapat ' + taruhan + ' total uang anda: ' + uang);
  }
  else if(totalAwal > totalAkhir && tebakan == 'kecil') {
    uang = uang - taruhan;
    alert('dadu1: ' + dadu1Awal + ' dadu2: ' + dadu2Awal + 'total: ' + totalAwal);
    alert('Sayang sekali anda salah, taruhan diambil: ' + taruhan + ' total uang anda: ' + uang);
  }
  else if(totalAwal < totalAkhir && tebakan == 'besar') {
    uang = uang - taruhan;
    alert('dadu1: ' + dadu1Awal + ' dadu2: ' + dadu2Awal + 'total: ' + totalAwal);
    alert('Sayang sekali anda salah, taruhan diambil: ' + taruhan + ' total uang anda: ' + uang);
  }
  else if(totalAwal < totalAkhir && tebakan == 'kecil') {
    uang = uang + taruhan;
    alert('dadu1: ' + dadu1Awal + ' dadu2: ' + dadu2Awal + 'total: ' + totalAwal);
    alert('selamat anda benar. Anda mendapat ' + taruhan + ' total uang anda: ' + uang);
  }
  else {
    alert('dadu1: ' + dadu1Awal + ' dadu2: ' + dadu2Awal + 'total: ' + totalAwal);
    alert('draw');
  }

  if(uang == 0) {
    alert('Uang anda habis. Anda game over');
    gameOn = false;
    break;
  }

  dadu1Akhir = dadu1Awal;
  dadu2Akhir = dadu2Awal;
  gameOn = periksaLanjut();
}

//Fungsi memeriksa taruhan
function periksaTaruhan(batas) {
  var periksa = true;
  while(periksa) {
    var nilai = parseInt(prompt('masukkan nilai taruhan anda'));
    if(nilai <= batas) {
      return nilai;
    }
    else {
      alert('Taruhan lebih besar dibanding sisa uang anda');
      periksa = true;
    }
  }
}

//Fungsi memeriksa tebakan
function periksaTebakan(dadu1, dadu2, total) {
  var periksa = true;
  while(periksa) {
    var tebakan = prompt('dadu 1 = ' + dadu1 + ' dadu 2 = ' + dadu2 + ' total: ' + total +' Anda ingin bertaruh besar (ketik besar) atau kecil (ketik kecil)');
    if(tebakan.toLowerCase() == 'besar' || tebakan.toLowerCase() == 'kecil') {
      return tebakan;
      periksa = false;
    }
    else {
      alert('Masukkan hanya antara besar atau kecil');
      periksa = true;
    }
  }
}

//Funsgi memeriksa kelanjutan permainan
function periksaLanjut() {
  var periksa = true;
  while(periksa) {
    var lanjut = prompt('Anda ingin melanjutkan ? (jika ya ketik: ya atau jika tidak ketik: tidak)');
    if(lanjut.toLowerCase() == 'ya') {
      return true;
      periksa = false;
    }
    else if(lanjut.toLowerCase() == 'tidak') {
      return false;
      periksa = false;
    }
    else {
      alert('jawaban antara ya atau tidak')
      periksa = true;
    }
  }
}
