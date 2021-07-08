// Promise : JS'de bir işlemin sonucunu temsil eden javaScript nesnesidir.
// resolve ve reject nesnesini taşır
// resolve : olumlu
// reject : olumsuz

/* const promise1 = new Promise((resolve, reject) => {
  //   resolve("VERILER ALINDI");
  reject("BAGLANTI HATASI");
}); */

// console.log(promise1);
// UnhandledPromiseRejectionWarning : NODE.js ile çalışırken bu hata kesinlikle alınır.
// Hata alınmadığı resolve olduğ durumlarda neler yapılabilir ?
// Resolve
/* promise1.then((value) => {
  console.log(value);
}); */
// Output :
// VERILER ALINDI
// sorunsuz bir şekilde çalıştı ve çözülerek gönderilen hatayı then ile yakalamış olduk.

// Reject :
/* promise1.catch((error) => {
  console.log(error);
}); */

//then ve cath metotlardını zincirleme kullanma
/* promise1
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.log(error);
  });
 */
//   --------------------------------------------------------------------------------------------------------------------

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
    // resolve(book);
    reject("HATA OLUSTU");
  });
  return promise1;
};

addBook({ name: "Book 4", author: "Yazar 4" })
  .then(() => {
    console.log("Yeni Liste");
    listBooks();
  })
  .catch((err) => {
    console.log(err);
  });
