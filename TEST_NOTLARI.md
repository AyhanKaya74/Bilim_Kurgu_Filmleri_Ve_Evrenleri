# Test ve Doğrulama Notları

Toplam Kart Sayısı: **9**

| Test No | Test Adımı | Kullanılan Girdi | Beklenen Sonuç | Gerçekleşen Sonuç | Karar |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **1** | Bir başlığın ayırt edici bölümünü yazma | `Matrix` | Yalnızca "The Matrix" kartı görünür; sonuç sayacı **1** olur. | Yalnızca "The Matrix" kartı listelendi ve sayaç **1** olarak güncellendi. | **Geçti** |
| **2** | Harf büyüklüğünü değiştirip kenarlara boşluk ekleme | `   iNcEpTiOn   ` | Büyük/küçük harf ve boşluklar yok sayılır; "Inception" kartı eşleşir, sayaç **1** olur. | "Inception" kartı sorunsuz eşleşti ve sayaç **1** gösterdi. | **Geçti** |
| **3** | Hiçbir başlıkta olmayan bir ifade yazma | `Star Wars` | Tüm kartlar gizlenir, sayaç **0** olur ve boş sonuç mesajı görünür. | Hiçbir kart listelenmedi, sayaç **0** oldu ve "Aramanızla eşleşen film bulunamadı." mesajı göründü. | **Geçti** |
| **4** | Temizle düğmesine basma ve ardından yalnızca boşluk yazma | Önce *Temizle* butonu, sonra `     ` (5 boşluk) | Her iki durumda da tüm **9** kart görünür ve sayaç **9** olur. | Temizle butonunda ve yalnızca boşluk girildiğinde **9** kartın tamamı ekrana geldi, sayaç **9** oldu. | **Geçti** |
| **5** | Her sayfadaki ortak menü bağlantılarını test etme | Menüdeki *Ana Sayfa*, *İçerikler*, *Hakkında* linklerine tıklama | Tüm sayfalardan diğer sayfalara kırık link olmadan geçiş yapılır. | Üç sayfa arasındaki tüm menü bağlantıları doğru sayfalara yönlendirdi. | **Geçti** |
| **6** | Mobil görünüm (390 px) ve klavye erişilebilirliği | Tarayıcı genişliği **390 px** + `Tab` tuşu ile gezinme | Yatay kaydırma (taşma) oluşmaz; menü, arama kutusu ve Temizle butonuna klavye ile odaklanılır. | 390 px genişlikte yatay taşma olmadı; `Tab` ile tüm etkileşimli öğelere odaklanıldı. | **Geçti** |

---

## Ekran Görüntüleri
*(ZIP arşivine eklenen 3 ekran görüntüsü)*
1. **Normal Arama Görünümü:** `ekran_goruntusu_1_normal_arama.png` (Filtreleme yapılmış hali ve güncel sonuç sayacı)
2. **Boş Sonuç Görünümü:** `ekran_goruntusu_2_bos_sonuc.png` (Eşleşme olmadığında 0 sayaç ve uyarı mesajı)
3. **Mobil Görünüm (390 px):** `ekran_goruntusu_3_mobil.png` (390 px genişlikte yatay taşmasız dikey kart düzeni)