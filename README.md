# Mini Market

Next.js ile geliştirilmiş küçük bir e-ticaret (mini market) sitesi. Ödeme altyapısı olarak iyzico kullanır.

## Özellikler

- Ürün listeleme ve sepet
- iyzico ile ödeme entegrasyonu
- SQLite ile yerel veri depolama
- Tailwind CSS ile responsive arayüz

## Kullanılan Teknolojiler

- [Next.js](https://nextjs.org) 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS 4
- iyzico (`iyzipay`)
- SQLite (`better-sqlite3`)
- Lucide React (ikonlar)

## Kurulum

1. Repoyu klonla:

```bash
git clone https://github.com/KULLANICI_ADIN/mini-market.git
cd mini-market
```

2. Bağımlılıkları yükle:

```bash
npm install
```

3. Proje kök dizininde `.env.local` dosyası oluştur ve kendi anahtarlarını ekle:

```env
IYZICO_API_KEY=your_api_key
IYZICO_SECRET_KEY=your_secret_key
IYZICO_BASE_URL=https://sandbox-api.iyzipay.com
```

4. Geliştirme sunucusunu başlat:

```bash
npm run dev
```

Tarayıcıda [http://localhost:3000](http://localhost:3000) adresini aç.

## Komutlar

| Komut           | Açıklama                    |
| --------------- | --------------------------- |
| `npm run dev`   | Geliştirme sunucusu         |
| `npm run build` | Production build            |
| `npm start`     | Production sunucusu         |
| `npm run lint`  | ESLint kontrolü             |

## Notlar

- `.env.local` dosyası güvenlik nedeniyle repoda yer almaz, kendi anahtarlarınla oluşturmalısın.
- Ödeme testleri için iyzico sandbox hesabı kullanılmalıdır.