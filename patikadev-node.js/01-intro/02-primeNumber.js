// Node.js : javaScript çalışma ortamı sağlar, bir tarayıcya ihtiyaç duyumaz. Kendi bilgisayar kendi tarayıcımızda kodun çıktısı görülür.
// 1 e ve kendisine bölünecek, 1den büyük pozitif tam sayı olacak.

const arguments = process.argv.slice(2)
function showPrimeNumbers(lowNumber, highNumber) {
  for (let i = lowNumber; i <= highNumber; i++) {
    let isPrime = true;
    for (let j = 2; j <= i; j++) {
      if (i % j === 0 && j !== i) {
        isPrime = false;
      }
    }
    if (isPrime) {
      console.log(i);
    }
  }
}

// showPrimeNumbers(7, 22);
// Output
// 7;
// 11;
// 13;
// 17;
// 19;

// Process Nesnesi : Node.js 'in o anki işlemleri ile ilgili bilgi verir.
// console.log(process);

// console.log(process.argv);
// Programın çalışırken kullanılan (arrray)argümentleri döndürür.

console.log(process.argv.slice(1));
// node .\primeNumber.js test
// Output : [ 'test' ]

// console.log(process.argv.slice(2));
// node .\primeNumber.js 2 11
// output ['2','11']


showPrimeNumbers(arguments[0] * 1,arguments[1] *1)