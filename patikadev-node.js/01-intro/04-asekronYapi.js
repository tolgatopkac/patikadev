/* Senkron Programlama (Synchronous Programming):  
Tek bir olaya odaklanır onun dışında işlem yapmaz.(Blocking) Senkron programlama en basit tanımıyla işlemlerin sırasıyla yapılmasıdır. Önce bir dosya okuyalım, sonra bir veritabanı işlemi yapalım ve sonrasında da
bir http isteği gönderelim şeklinde basit bir şekilde çalışır. Beklemekten sıkılmaz, başka işlerin aciliyetiyle ilgilenmez. Bir işlem yapılırken diğer işlemler bloklanır. */

// Asenkron Programlama (Asynchronous Programming):
/* Asenkron programlama ise uzun süren bir işlemi beklemeden diğer işlemlere devam edebilmektir, işlemlerin sırasıyla devam etme zorunluluğu yoktur. Önce bir
dosya okuyalım, aaa ama bu dosya okumak uzun sürüyor, eee ne yapalım o zaman? Bu işlemin bitmesini beklemeden diğer işleme geçebiliriz. Bir işlem yapılırken diğer işlemler bloklanmaz. */

//  Eğer beklediğimiz uzun süreli işleme bağımlı diğer işlemler varsa bunların da beklenen işe ekleyebilmeliyiz. Asenkron programlamanın diğer işlevi de budur.

// İşlemlerin sıralaması nasıl yapılır ?
// Olay Döngüsü (Event-Loop):
// Event-Loop, callback, single thread...
//  Restoranımız çalışma ortamı ve yalnızca tek bir garson çalışıyor (Single Thread) bu garsonumuz önce 1. masaya ait siparişleri aldı ve siparişi mutfağa bildirdi (Thread Pool). O siparişlerin hazır olmasını beklemeden (Non-Blocking) 2. masaya ait siparişleri aldı ve yine mutfağa bildirdi. Bu sırada kendisine 1. masanın yemeğinin hazır olduğu bildirildi (callback).
