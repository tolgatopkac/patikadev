// Async Await Yapısı
// ---Async - Await yapısı ES8 ile birlikte gelmiştir ve Promise yapısının daha anlaşılır bir söz dizimi ile yazılmasıdır.
// --Bir fonksiyon async anahtar kelimesi ile birlikte tanımlanırsa, fonksiyonun olumlu sonuçlanması sonucunda bir Promise döner. Bir async fonksiyon await anahtar kelimesi ile birlikte kullanılırsa ilgili Promise olumlu bir şekilde dönene kadar async fonksiyonunun çalışması bekletilir.

// 1. fonksiyonda veriler alınıyor.
// 2. fonksiyonda veriler düzenleniyor.
function getData(data) {
  return new Promise((resolve, reject) => {
    console.log("Veriler alınmaya çalışıyor...");

    if (data) {
      resolve("Veriler alındı.");
    } else {
      reject("Veriler alınamadı");
    }
  });
}

function cleanData(receievedData) {
  return new Promise((resolve, reject) => {
    console.log("Veriler düzenleniyor...");

    if (receievedData) {
      resolve("Veriler düzenlendi");
    } else {
      reject("Veriler düzenlenemedi.");
    }
  });
}

/* getData(true)
  .then((result) => {
    console.log(result);
    return cleanData(false);
  })
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
 */

//Async - Await
// Öncelikle tüm yapı bir fonksiyonla oluşturulmalı, oluşturulan fonksiyonun içine await yapısı yani beklemesi gereken işlem yazdırılır.

// Olumlu durumda
/* async function processData() {
  try {
    const receivedData = await getData(true);
    //   aşağıdaki işleme geçilmesi için getData işlemi bitmeli, aksi durumda aşağıya geçmez.
    console.log(receivedData);
    const cleanedData = await cleanData(false);
    console.log(cleanedData);
  } catch (error) {
    console.log(error);
  }
}
 */
// processData();
// output :
// Veriler alınmaya çalışıyor...
// Veriler alındı.
// Veriler düzenleniyor...
// Veriler düzenlendi

// Async await vs promise
// -- async await 'in promise göre yazımı daha kolay
// -- sıralı olarak yapılması gereken işlemler yazılır, senkron olarak takip ediyormuşcasına bir yazım türüne sahip
// genel olarak async await yapısı kullanılır

// hatayı karşılamak için async fonksiyonunun içinde try catch blogu kullan !

// paralel olan işlemlerde promise kullanılır.
// Bir işlemden sonra başka bir işlem kesin bir sıranın olduğu durumda await kullanılır.

// --------------------------------------------------------------------------------------------------------

const book = [
  { name: "Book 1", author: "Yazar 1" },
  { name: "Book 2", author: "Yazar 2" },
  { name: "Book 3", author: "Yazar 3" },
];

const listBooks = () => {
  book.map((book) => {
    console.log(book.name);
  });
};

const addBook = (newBook) => {
  const promise1 = new Promise((resolve, reject) => {
    book.push(newBook);
    resolve(book);
    // reject("HATA OLUSTU");
  });
  return promise1;
};

//---------------------------------------------------------------- PROMISE ----------------------------------------------------------------
/* addBook({ name: "Book 4", author: "Yazar 4" })
  .then(() => {
    console.log("Yeni Liste");
    listBooks();
  })
  .catch((err) => {
    console.log(err);
  }); */

//---------------------------------------------------------------ASYNC AWAIT ----------------------------------------------------------------
async function showBook() {
  try {
    await addBook({ name: "Book 4", author: "Yazar 4" });
    console.log("Yeni kitap eklendi...");
    console.log("Yeni liste");

    listBooks();
  } catch (error) {
    console.log(error);
  }
}

showBook();
