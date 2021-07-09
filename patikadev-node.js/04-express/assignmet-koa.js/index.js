/* Koa.js ile web sunucumuzu yazalım.
Öncelikle şunu belirteyim. Koa.js hakkında konuşmadığımızı biliyorum ve bu ödev ilk aşamada bizi zorlayacak. Buradaki amacım yeni bir teknolojiye
başlama cesareti oluşturmak ve hata yapma özgürlüğümüz olduğunu göstermek.

koa paketini indirelim.
index, hakkimda ve iletisim sayfaları oluşturalım.
Sayfalara içerik olarak xxx sayfasına hoşgeldiniz şeklinde h1 başlıkları yazdıralım.
port numarası olarak 3000'i kullanalım. */

const Koa = require("koa");
const KoaRouter = require("koa-router");

const port = 3000;
const app = new Koa();
const router = new KoaRouter();

// app.use(async (ctx) => (ctx.body = { Text: "Welcome to koa" }));

router.get(
  "/index",
  (ctx) => (ctx.body = "<h1>INDEX SAYFASINA HOSGELDINIZ</h1>")
);

router.get(
  "/hakkimda",
  (ctx) => (ctx.body = "<h1>HAKKIMDA SAYFASINA HOSGELDINIZ</h1>")
);

router.get(
  "/iletisim",
  (ctx) => (ctx.body = "<h1>ILETISIM SAYFASINA HOSGELDINIZ</h1>")
);

app.use(router.routes()).use(router.allowedMethods());

app.listen(port, () => {
  console.log(`Sunucu port ${port} da çalışmaya başladı.`);
});
