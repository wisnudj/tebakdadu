# Tebak Dadu

## Penjelasan:
Tebak Dadu adalah sebuah permainan dimana pemain akan mendapat uang 1000 k diawal permainan. Setiap putaran pemain diminta untuk menebak total angka yang muncul dari 2 dadu yang dikocok apakah lebih besar atau lebih kecil daripada jumlah angka 2 buah dadu yang dikocok sebelumnya. Jika tebakan benar maka pemain mendapat uang sebesar taruhan, jika salah maka uang akan diambil sebesar yang dipertaruhkan.

## Pseudocode:

TULISKAN 'ini adalah permainan Tebak Dadu, setiap giliran pemain akan menebak jumlah dadu apakah jumlahnya lebih besar atau lebih kecil dari sebelumnya. Pemain akan diberikan uang 1000 sebagai permulaan'

SIMPAN uang senilai 1000
SIMPAN nilai dadu1Akhir dengan nilai random
SIMPAN nilai dadu2Akhir dengan nilai random
SIMPAN gameOn bernilai true

ULANGI gameOn bernilai true
  HITUNG dadu1Akhir tambah dadu1Akhir
  SIMPAN tebakan dengan fungsi periksaTebakan
  SIMPAN taruhan dengan fungsi periksaTaruhan
  SIMPAN nilai dadu1Awal dengan nilai random
  SIMPAN nilai dadu2Awal dengan nilai random
  HITUNG totalAwal dengan dadu1Awal tambah dadu2Awal
  IF totalAwal lebih besar totalAkhir dan tebakan sama dengan besar THEN
    HITUNG uang ditambah dengan taruhan
    TULISKAN 'dadi1: dadu1Awal, dadu2: dadu2Awal, total nilai dadu: totalAwal'
    TULISKAN 'Selamat anda benar, anda mendapat taruhan, total uang anda: uang'
  ELSE IF totalAwal lebih besar totalAkhir dan tebakan sama dengan kecil THEN
    HITUNG uang dikurang dengan taruhan
    TULISKAN 'dadi1: dadu1Awal, dadu2: dadu2Awal, total nilai dadu: totalAwal'
    TULISKAN 'Sayang sekali anda salah, taruhan diambil, total uang anda: uang'
  ELSE IF totalAwal lebih kecil totalAkhir dan tebakan sama dengan besar THEN
    HITUNG uang dikurang dengan taruhan
    TULISKAN 'dadi1: dadu1Awal, dadu2: dadu2Awal, total nilai dadu: totalAwal'
    TULISKAN 'Sayang sekali anda salah, taruhan diambil, total uang anda: uang'    
  ELSE IF totalAwal lebih kecil totalAkhir dan tebakan sama dengan kecil THEN  
    HITUNG uang dikurang dengan taruhan
    TULISKAN 'dadi1: dadu1Awal, dadu2: dadu2Awal, total nilai dadu: totalAwal'
    TULISKAN 'Sayang sekali anda salah, taruhan diambil, total uang anda: uang'
  ELSE
    TULISKAN 'dadi1: dadu1Awal, dadu2: dadu2Awal, total nilai dadu: totalAwal'
    TULISKAN draw

  IF uang sama dengan nol THEN
    TULISKAN uang anda habis. Anda game over
    SIMPAN gameOn false
    berhent

  SIMPAN dadu1Akhir sama dengan dadu1Awal
  SIMPAN dadu2Akhir sama dengan dadu2Awal
  SIMPAN gameOn dengan fungsi periksaLanjut

  END WHILE

  
