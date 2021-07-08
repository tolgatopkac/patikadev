/*Konsol ekranında postlarımızı sıralayalım, sonrasında yeni bir post oluşturalım ve yeni post ile birlikte postlarımızı tekrar sıralayalım.

Postları dizin içerisinde bulunan nesneler şeklinde oluşturalım.

Post nesnesi şablonu {title: 'Post Başlık 1', detail: 'Post Detay 1'} olarak düşünülebilir.

Promise ve Async - Await yöntemleri ile ayrı ayrı yapalım. */

const blog = [
  { title: "Post Başlık 1", detail: "Post Detay 1" },
  { title: "Post Başlık 2", detail: "Post Detay 2" },
  { title: "Post Başlık 3", detail: "Post Detay 3" },
];

const listBlogs = () => {
  blog.map((blog) => {
    console.log(blog.title, blog.detail);
  });
};

const newBlog = (newBlog) => {
  const promise1 = new Promise((resolve, reject) => {
    blog.push(newBlog);
    resolve(blog);
    // reject("Hata oluştu");
  });
  return promise1;
};

// ---------------------------------PROMISE -------------------------------

/* newBlog({ title: "Post Başlık 4", detail: "Post Detay 4" })
  .then(() => {
    console.log("Oluşturulan blog listesi");
    listBlogs();
  })
  .catch((error) => {
    console.log(error);
  }); */

//---------------------------------ASYNC AWAIT --------------------------------

async function showBlogList() {
  try {
    newBlog({ title: "Post Başlık 4", detail: "Post Detay 4" });
    console.log("Yeni blog oluşturuldu");
    console.log("Oluşturulan yeni blog listesi");
    listBlogs();
  } catch (error) {
    console.log(error);
  }
}
showBlogList();

// Output
// Yeni blog oluşturuldu
// Oluşturulan blog listesi
// Post Başlık 1 Post Detay 1
// Post Başlık 2 Post Detay 2
// Post Başlık 3 Post Detay 3
// Post Başlık 4 Post Detay 4
