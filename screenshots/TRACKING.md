# So sánh portfolio hiện tại với ảnh tham chiếu (Dash Digital)

Ảnh gốc: studio tối giản — nền trắng, chữ đen, headline manifesto IN HOA rất lớn, lưới dự án 2×2 sát hero, khoảng trắng rộng, list có gạch ngang `#eee`, footer đen + CTA lớn, dải thẻ màu (cam / đen + chữ đỏ / xám).

## Danh sách khác biệt (trước khi chỉnh)

| # | Khía cạnh | Ảnh tham chiếu | Trang trước đây |
|---|------------|----------------|-----------------|
| 1 | **Hero** | Một dòng manifesto tiếng Anh IN HOA, cỡ rất lớn, gần full chiều ngang | Tiếng Việt sentence case, `max-width: 18ch` — hẹp, không đúng tone |
| 2 | **Luồng hero → dự án** | Hero xong đi thẳng vào lưới ảnh, không tiêu đề phụ | Có `<hr>` + heading "Selected work" |
| 3 | **Độ rộng layout** | Cảm giác full-bleed hơn (~1280–1440px) | `--max: 1240px` |
| 4 | **Lưới dự án** | Gutter chặt, khối ảnh “đặc” | Gap lớn hơn, tỷ lệ 4:3 |
| 5 | **Tiêu đề section** | IN HOA, letter-spacing dương nhẹ, scale lớn | Chữ hơi nhỏ, letter-spacing âm |
| 6 | **Dải thẻ About** | Thẻ nằm ngang, có cảm giác chồng / khối studio | Lưới 3 cột đều, không overlap |
| 7 | **Đường kẻ** | `#eeeeee` rất nhạt | `#e8e8e8` |
| 8 | **Header** | Tối giản, đường phân cách rất nhẹ | `border-bottom` + blur rõ hơn |
| 9 | **Footer CTA** | Headline rất lớn, không gian rộng | Đã tốt nhưng có thể tăng scale / padding |

## Screenshot theo bước

Script tự mở server cục bộ (cổng 8765), tải trang, chụp bằng **Microsoft Edge headless**. Dùng Node có sẵn (ví dụ Node đi kèm Cursor):

```powershell
Set-Location "d:\Personal Projects\Portfolio_web"
& "d:\CursorAI\cursor\resources\app\resources\helpers\node.exe" tools/capture.mjs screenshots/TEN_FILE.png
```

Hoặc nếu `node` đã có trong PATH:

```powershell
cd "d:\Personal Projects\Portfolio_web"
node tools/capture.mjs screenshots/TEN_FILE.png
```

### File đã tạo trong phiên làm việc này

| File | Ý nghĩa |
|------|---------|
| `04-after-all-refinements.png` | Ảnh full-page **sau** khi áp dụng toàn bộ chỉnh ở bảng dưới (một lần chụp sau khi code xong các bước 1–4). |
| `05-role-typography.png` | Sau chỉnh nhỏ: dòng meta hero `Huy Trinh / Software Engineer` (dấu `/` giống tone studio). |

Để track **từng bước riêng** (01, 02, 03…) sau này: sau mỗi lần sửa nhỏ, chạy lại lệnh `capture.mjs` với tên file mới (`05-hero-spacing.png`, …).

> Chiều cao cửa sổ headless mặc định `9200` trong [`tools/capture.mjs`](../tools/capture.mjs). Nếu footer bị cắt, tăng số này.

## CHANGELOG — mapping từng điểm khác biệt → thay đổi code

| Bước | Khác biệt so ảnh gốc | Thay đổi |
|------|----------------------|----------|
| **1** | Hero manifesto IN HOA, lớn, gần full width; không có gạch ngang + tiêu đề phụ trước grid | [`index.html`](../index.html): headline EN + `text-transform` qua CSS; bỏ `<hr>` sau hero; `h2` projects → `visually-hidden`; CTA hero → link chữ nhỏ (tone studio). |
| **2** | Layout rộng hơn; lưới dự án sát nhau hơn | [`styles.css`](../styles.css): `--max: 1400px`; `.project-grid` gap nhỏ; `aspect-ratio: 5/4`; `.projects--tight`. |
| **3** | Section IN HOA lớn hơn; line `#eee`; header tối giản | [`styles.css`](../styles.css): `.section__head` clamp + `letter-spacing: 0.02em`; `--line: #eeeeee`; `.site-top` nền solid + border `#f2f2f2`. |
| **4** | Dải thẻ overlap; footer CTA lớn | [`styles.css`](../styles.css): `.card-strip` flex + margin âm + z-index; mobile reset overlap; `.footer__cta-title` clamp lớn hơn. |

Utility mới: `.visually-hidden` trong [`styles.css`](../styles.css) (giữ heading cho screen reader).
