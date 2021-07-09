/* employees.json dosyası oluşturalım ve içerisine {"name": "Employee 1 Name", "salary": 2000} verisini ekleyelim. (CREATE)
Bu veriyi okuyalım. (READ)
Bu veriyi güncelleyelim.
Dosyayı silelim. */

const fs = require("fs");

// Create
fs.writeFile(
  "employees.json",
  '{"name": "Employee 1 Name", "salary":200}',
  "utf8",
  (err, data) => {
    if (err) console.log(err);
    console.log("JSON dosyası başarılı bir şekilde oluşturuldu.");
  }
);

// READ
fs.readFile("employees.json", "utf8", (err, data) => {
  if (err) console.log(err);
  console.log(data);
  console.log("Dosya başarlı şekilde okundu");
});

// Veri Ekleme
fs.appendFile(
  "employees.json",
  '\n{"name": " Employee 2 Name", "salary":300}',
  "utf8",
  (err, data) => {
    if (err) console.log(err);
    console.log("Yeni veri eklendi");
  }
);

// Dosya silme
fs.unlink("employees.json", (err) => {
  if (err) console.log(err);
  console.log("Dosya Silindi");
});
