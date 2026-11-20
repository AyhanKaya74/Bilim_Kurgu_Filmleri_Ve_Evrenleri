# Yapay Zekâ (GitHub Copilot) Kullanım Kaydı

## Kullanılan Prompt'lar ve Amaçları

### 1. Prompt (Planlama ve Mimari)
* **Prompt:** "Kült Bilim Kurgu Filmleri ve Evrenleri hakkında sinema tutkunları ve bilim kurgu izleyicileri için üç sayfalık bir site tasarlıyorum. Dokuz içerik başlığım şunlar: Blade Runner 2049, Interstellar, Arrival, Ex Machina, Dune: Çöl Gezegeni, The Matrix, Inception, 2001: A Space Odyssey, Children of Men. HTML, CSS ve JavaScript kullanacağım. Ortak menüyü ve başlığa göre aramayı nasıl kurabilirim? Önce dosyaları ve kabul ölçütlerini öner; henüz kod yazma."
* **Amaç:** Kod yazmaya başlamadan önce doğru dosya yapısını (`index.html`, `icerikler.html`, `hakkinda.html`, `style.css`, `script.js`) ve ödev isteklerine uygun kabul ölçütlerini planlamak.

### 2. Prompt (HTML Yapısı ve Kartlar)
* **Prompt:** "Önerdiğin dosya yapısına göre üç HTML sayfasını oluştur: `index.html` (Ana Sayfa: site adı BilimKurguArşivi, hedef kitle açıklaması ve içeriklere yönlendiren bağlantı), `icerikler.html` (İçerikler: seçtiğim 9 bilim kurgu filmi için başlık, açıklama ve yönetmen/yıl bilgisini içeren özgün kartlar) ve `hakkinda.html` (Hakkında: bu konuyu seçme gerekçem ve sitenin ziyaretçiye faydası). Tüm sayfalarda aynı çalışan ortak bir navigasyon menüsü olsun. Şimdilik sadece HTML dosyalarını yaz."
* **Amaç:** Üç sayfalık iskeleti, sayfalar arası ortak navigasyon menüsünü ve 9 filmlik içerik kartlarını HTML etiketleriyle oluşturmak.

### 3. Prompt (Ortak Stil ve Mobil Uyumluluk)
* **Prompt:** "Tüm sayfaların ortak kullanacağı `style.css` dosyasını yaz. Modern, koyu veya bilim kurgu temasına uygun sade bir tasarım olsun. 9 kart ekranda düzenli (örneğin 3'lü grid yapısında) görünsün, menü bağlantıları ve klavye ile gezinme (Tab odağı) belirgin olsun. Ayrıca ekran genişliği 390 px olduğunda (mobil görünümde) yatay taşma olmayacak şekilde tek sütunlu responsive olsun."
* **Amaç:** Tüm sayfalarda tutarlı bir görünüm sağlamak, klavye erişilebilirliğini (`:focus-visible`) düzenlemek ve 390 px mobil genişlikte taşma sorunlarını önlemek.

### 4. Prompt (Canlı Arama ve Filtreleme)
* **Prompt:** "`icerikler.html` sayfasına erişilebilirlik için `<label>` ile etiketlenmiş bir arama kutusu, anlık sonuç sayacı (başlangıçta 9 sonuç gösterecek şekilde), eşleşme olmadığında görünecek boş sonuç mesajı ve 'Temizle' düğmesi ekle. Ardından `script.js` dosyasını yaz: Kullanıcı yazdıkça yalnızca kart başlıklarına göre filtreleme yapsın. Arama büyük/küçük harf duyarsız olmalı ve baştaki/sondaki gereksiz boşlukları (`trim()`) yok saymalı. Temizle düğmesine basıldığında veya sadece boşluk girildiğinde tüm 9 kart tekrar görünmeli ve sayaç güncellenmelidir."
* **Amaç:** Kullanıcı deneyimini artıran canlı arama, sayaç güncelleme ve boş durum yönetimini JavaScript ile gerçekleştirmek.

---

## Öneri Değerlendirmesi (Kabul / Değişiklik Kararı)
Copilot ilk aşamada arama filtresini kartın tamamındaki metne (hem başlık hem açıklamaya) göre yapacak şekilde önerdi. Ancak ödev gereksinimi gereği aramanın **yalnızca film başlıklarına** göre çalışması gerektiği için bu öneriyi değiştirdim ve filtreleme sorgusunu sadece kartların başlık (`h2` / `h3`) etiketlerini hedefleyecek şekilde güncelledim. Ayrıca mobil görünümde kartların kenar boşluklarının taşma yapmaması için CSS tarafında `box-sizing: border-box` kuralını koruyarak kabul ettim.

## Kod Açıklamaları

### 1. Event Listener (Olay Dinleyicisi) Ne Yapar?
Arama kutusuna bağlanan `input` olay dinleyicisi (`searchInput.addEventListener('input', ...)`), kullanıcı arama kutusuna her bir harf yazdığında, sildiğinde veya metin yapıştırdığında anlık olarak tetiklenir. Sayfa yenilenmesine veya "Ara" butonuna basılmasına gerek kalmadan filtreleme fonksiyonunu her tuş vuruşunda otomatik çalıştırır. Temizle butonundaki `click` dinleyicisi ise tıklandığında arama kutusunun değerini sıfırlayıp tüm 9 kartı yeniden görünür kılar.

### 2. Filtreleme Koşulu Ne Yapar?
Filtreleme koşulu (`cardTitle.toLowerCase().includes(query)`), kullanıcının girdiği metnin başındaki ve sonundaki boşlukları `.trim()` ile temizleyip `.toLowerCase()` ile küçük harfe çevirdikten sonra, her bir film kartının başlığının aynı şekilde küçük harfe çevrilmiş halinin bu ifadeyi içerip içermediğini kontrol eder. Koşul `true` dönerse kart ekranda gösterilir ve görünür kart sayacı 1 artırılır; `false` dönerse kart gizlenir (`display: none`).