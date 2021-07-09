// FS Modulü
// -- Sync uzantılı olan senkron olan method
// --Sync uzantısı olmayan asenkron method

const fs = require("fs");

// DOSYA OKUMAK

/* fs.readFile("password.txt", "utf8", (err, data) => {
  if (err) console.log(err);
  console.log(data);
  console.log("Dosya Okundu.");
});
 */

// DOSYA YAZMAK
/* fs.writeFile("example.json", '{"name":"Arin","age":6}', "utf8", (err, data) => {
  if (err) console.log(err);
  console.log("JSON dosya başarılı bir şekilde oluşturuldu.");
}); */

// Dosyaya veri ekleme
// dosyaya veri eklemek için appendFile kullanılır
/* fs.appendFile("example.txt", "\n Merhaba", "utf8", (err, data) => {
  if (err) console.log(err);
  console.log("Yeni veri eklendi");
});
 */

// Dosya silme .unlik metodu kullanılır
/* fs.unlink("example.json", (err) => {
  if (err) console.log(err);
  console.log("Dosya Silindi");
});
 */

// KLASORLER OLUSTURMA
/* fs.mkdir("uploads/img", { recursive: true }, (err) => {
  if (err) console.log(err);
  console.log("Klasörler oluşturuldu");
});
 */

// Klasörler silmek
fs.rmdir("uploads", { recursive: true }, (err) => {
  if (err) console.log(err);
  console.log("Klasörler silindi");
});
