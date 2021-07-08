// Dairenin Alanı = π x r2 şeklinde hesaplanır. Node.JS Javascript çalışma ortamında yarıçap değerini konsoldan parametre olarak girerek alanı bulmaya çalışacağız.
// Konsol çıktısı: Yarıçapı (Yarıçap) olan dairenin alanı: (Alan) şeklinde olmalıdır.

const argument = process.argv.slice(2);

const daireAlani = function (yaricap) {
  return console.log(
    `Yarıçapı ${yaricap} olan dairenin alanı: ${Math.PI * yaricap ** 2}`
  );
};

// daireAlani(2);
daireAlani(argument[0] * 1);

// Output : Yarıçapı 2 olan dairenin alanı: 12.566370614359172
