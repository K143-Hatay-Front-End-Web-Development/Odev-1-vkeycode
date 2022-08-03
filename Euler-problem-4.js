
// A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
//Find the largest palindrome made from the product of two 3-digit numbers.

for (let i = 900; i <= 999; i++) {
    for (let k = 900; k <= 999; k++) {   // ===> iki döngü kuruyoruz ve diğer döngü değişkeniyle çarpıyoruz 
        let result = i * k + "";        // ===> "" ekleyerek stringe çeviriyoruz ki reverse edebilelim 
        let reverse = result.split("").reverse().join("");    // daha sonra sonucumuzu split ile ayırıyoruz reverse ediyor ve daha sonra join ile birleştiriyoruz
            if(result == reverse){      // ===>  işlemden çıkan sonucu  reverse ettiğimiz sonucu if ile palindrom koşullunu sağlayıp sağlamadığını kontrol ediyoruz                
            var palindromeNumber = result // ===> Eğer sayımız palindrom ise palindromeNumber değişkenimize atıyoruz
            var multiplierOne = i;      // ===> son çarpanları ise multiplier değişkenlerimize atıyoruz
            var multiplierTwo = k;
        }
    }
}
console.log(`Largest palindrome made from the product of two 3-digit numbers is ${palindromeNumber} = ${multiplierOne} x ${multiplierTwo}`) // tamplate literals kullanarak logluyoruz


