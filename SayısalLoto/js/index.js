 // Rastgele sayı üretme fonksiyonu
 function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Sayfa tamamen yüklendiğinde sayıları rastgele doldurma
window.onload = function() {

    const startButton = document.getElementById('startbutton');

    let intervalId; // Aralık kimliği

    // Başla butonuna tıklanınca
    startButton.addEventListener('click', function() 
    {
        //  rastgele sayı göster
        intervalId = setInterval(function() {
            no1.textContent = getRandomNumber(1, 49);
                     // 2 saniye sonra rastgele bir değer ata
                      setTimeout(function() {
                     clearInterval(intervalId); // Aralığı temizle
                     no1.textContent = getRandomNumber(1, 49);
                     }, 2000);
            no2.textContent = getRandomNumber(1, 49);
                     // 3 saniye sonra rastgele bir değer ata
                     setTimeout(function() {
                     clearInterval(intervalId); // Aralığı temizle
                     no2.textContent = getRandomNumber(1, 49);
                     }, 3000);
            no3.textContent = getRandomNumber(1, 49);
                     // 4 saniye sonra rastgele bir değer ata
                     setTimeout(function() {
                     clearInterval(intervalId); // Aralığı temizle
                     no3.textContent = getRandomNumber(1, 49);
                     }, 4000);
            no4.textContent = getRandomNumber(1, 49);
                     // 5 saniye sonra rastgele bir değer ata
                     setTimeout(function() {
                     clearInterval(intervalId); // Aralığı temizle
                     no4.textContent = getRandomNumber(1, 49);
                     }, 5000);
            no5.textContent = getRandomNumber(1, 49);
                     // 6 saniye sonra rastgele bir değer ata
                     setTimeout(function() {
                     clearInterval(intervalId); // Aralığı temizle
                     no5.textContent = getRandomNumber(1, 49);
                     }, 6000);
            no6.textContent = getRandomNumber(1, 49);
                      // 7 saniye sonra rastgele bir değer ata
                     setTimeout(function() {
                     clearInterval(intervalId); // Aralığı temizle
                     no6.textContent = getRandomNumber(1, 49);
                     } , 7000);
        }, 200);
    });
};