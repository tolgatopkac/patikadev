/* console.log("1. görev");
console.log("2. görev");
console.log("3. görev");

// Output :
1. görev
2. görev
3. görev */

//----------------------------------------------------------------

/* const func1 = () => {
  console.log("Func 1 tamamlandı...");
};

const func2 = () => {
  console.log("Func 2 tamamlandı...");
};

func1();
func2();*/

// ----------------------------------------------------------------

/* const func1 = () => {
  console.log("Func 1 tamamlandı...");
  func2();
};

const func2 = () => {
  console.log("Func 2 tamamlandı...");
  func3();
};

const func3 = () => {
  console.log("Func 3 tamamlandı.");
};

func1(); */

// Output :
// Func 1 tamamlandı...
// Func 2 tamamlandı...
// Func 3 tamamlandı.

// -------------------------------------------------------------------

/* const func1 = () => {
  console.log("Func 1 tamamlandı...");
  func3();
};

const func2 = () => {
  console.log("Func 2 tamamlandı...");
};

const func3 = () => {
  console.log("Func 3 tamamlandı.");
  func2();
};

func1(); */

// output :
// Func 1 tamamlandı...
// Func 3 tamamlandı.
// Func 2 tamamlandı...

// !!! - JavaScript'in her zaman senkron ve single thread olarak çalışır fakat node.js'in asenkron özelliği vardır.
// !!! - Zaman alıcı işlemleri beklemek yerine calback - promise - await - event kullanarak javaScript kodu manipüle edilir. ve asenkron davranışlar elde edilir.
// bir fonksiyonu başka bir fonksiyonun içine argument olarak koymak  callback denir, aşağıdaki setTimeout'un içindeki console.log buna örnektir.

/* let x = 5;
console.log("1. gelen veri ", x);

setTimeout(() => {
  x += 5;
  console.log("2. gelen veri ", x);
}, 5000);

x += 5;
console.log("3. gelen veri ", x);
 */

// --------------------------------------------------------------------------
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

const addBook = (newBook, callback) => {
  book.push(newBook);
  callback();
};

// listBooks();
// Aynı anda başka bir işlemin yapılması demek callback
// her kitap eklendiğinde callback fonksiyonu olarak kitap listeleme fonksiyonunu da çalıştır.

addBook({ name: "Book 4", author: "Yazar 4" }, listBooks);

// -Callback fonksiyonu başka bir fonksiyon içerisinde argüman olarak kullanılabilen fonksiyon anlamına gelmektedir
// Başka bir fonksiyonu argüman olarak alan fonksiyona higher order function olarak isimlendirilir.
