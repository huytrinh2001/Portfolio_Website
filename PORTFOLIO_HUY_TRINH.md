# Portfolio — Huy Trinh

Tài liệu định hướng dự án website portfolio cá nhân. Tham chiếu phong cách: studio digital tối giản — nền sáng/tối rõ ràng, chữ sans-serif đậm, nhiều khoảng trắng, lưới ảnh dự án lớn, danh sách nhiều cột, CTA cuối trang mạnh.

---

## 1. Tổng quan dự án

| Mục | Mô tả |
|-----|--------|
| **Tên thương hiệu** | Huy Trinh |
| **Mục đích** | Giới thiệu bản thân, kỹ năng, dự án, kinh nghiệm làm việc, chứng chỉ; dễ scan trong 30–60 giây |
| **Ngôn ngữ UI** | Tiếng Việt hoặc song ngữ Việt–Anh (chọn một và nhất quán) |
| **Định dạng** | One-page (một trang dài) + anchor menu; có thể mở rộng trang chi tiết dự án sau |

---

## 2. Ngôn ngữ thiết kế (theo ảnh tham chiếu)

- **Typography**: Sans-serif gọn (ví dụ: Inter, Geist, hoặc neo-grotesk). Tiêu đề section **IN HOA** hoặc chữ lớn; body nhỏ, line-height thoáng.
- **Màu**: Chủ đạo đen–trắng; **một màu accent** (cam/vàng cam hoặc màu bạn chọn) dùng có chủ đích — thẻ nổi bật, hover, CTA.
- **Layout**: Khối rõ ràng; padding/margin lớn giữa các section; không lấp đầy mọi pixel.
- **Ảnh**: Ảnh dự án lớn, tỷ lệ đồng nhất; ảnh minh họa hoạt động/culture nếu có (tùy).
- **Bo góc ảnh**: Mọi ảnh nội dung chính (dự án, thumbnail tin, ảnh hoạt động, v.v.) cần **bo cong nhẹ** (ví dụ `border-radius` 8–12px hoặc tương đương) để mềm hơn so với khối vuông thô, vẫn giữ phong cách tối giản.
- **Hover ảnh**: Khi hover (desktop) hoặc focus (keyboard), khung ảnh có **đổ bóng** rõ hơn trạng thái nghỉ — bóng mềm, không quá đậm; có thể kèm **nâng nhẹ** (`translateY` vài pixel) hoặc phóng to ảnh rất nhẹ bên trong khung để tạo chiều sâu.
- **Hiệu ứng bắt mắt (vừa đủ)**: Thêm các tương tác tinh tế — ví dụ transition `box-shadow` / `transform` 200–350ms, underline hoặc đổi màu chữ caption khi hover card; **tránh** lật 3D, nhấp nháy, hoặc animation dài lặp lại. Tuân thủ `prefers-reduced-motion` nếu có thể.
- **Chuyển động tổng thể**: Tối thiểu — fade nhẹ hoặc reveal khi scroll; không xung đột với hover ảnh ở trên.

---

## 3. Cấu trúc trang (thứ tự đề xuất)

1. **Header / Hero** — Tên + chức danh/tagline ngắn (1 headline lớn kiểu manifesto).
2. **Projects** — Lưới ảnh (2 cột desktop, 1 cột mobile); mỗi ô: ảnh + tên dự án + loại (ví dụ: Web App, UI/UX).
3. **About** — Đoạn giới thiệu 3–5 câu; có thể kèm “highlight card” (một khối màu accent với quote hoặc focus kỹ năng chính).
4. **Skills** — Nhóm tag hoặc danh sách nhiều cột; tránh thanh % giả; ưu tiên công nghệ liên quan mục tiêu nghề nghiệp.
5. **Work experience** — Title trái + danh sách phải (công ty, vai trò, khoảng thời gian); bullet ngắn theo hành động + kết quả.
6. **Certifications** — Cùng pattern list: tên chứng chỉ | tổ chức | năm | link xác minh (nếu có).
7. **Footer / Contact** — Headline CTA lớn (ví dụ: “LÀM VIỆC CÙNG NHAU” / “LET’S WORK”); email, LinkedIn, GitHub; copyright một dòng.

*Tùy chọn sau*: blog / tin ngắn; không bắt buộc cho bản đầu.

---

## 4. Nội dung mẫu — điền thật khi triển khai

### 4.1 Hero

```text
HUY TRINH
[Chức danh — ví dụ: Software Engineer / Full-stack Developer / Designer + Developer]

[Một câu giá trị — ví dụ: Xây sản phẩm web rõ ràng, hiệu năng và dễ bảo trì.]
```

- CTA: `Email` · `CV (PDF)` · `GitHub` · `LinkedIn`

### 4.2 About (giới thiệu ngắn)

*(3–5 câu: bạn là ai, trọng tâm chuyên môn, loại bài toán bạn giải tốt.)*

```text
[Viết tại đây…]
```

**Highlight card (accent)** — một dòng “focus”:

```text
[Ví dụ: TypeScript · React · Node — ưu tiên code sạch và trải nghiệm người dùng.]
```

### 4.3 Skills

Nhóm gợi ý (chỉnh theo thực tế):

| Nhóm | Gợi ý nội dung |
|------|----------------|
| Ngôn ngữ | |
| Framework / thư viện | |
| Công cụ & hạ tầng | Git, Docker, CI/CD, … |
| Khác | Tiếng Anh, làm việc nhóm, … |

### 4.4 Projects

Mỗi dự án: **Tên** · **Mô tả 1–2 câu** · **Stack** · **Vai trò** · Link demo · Link repo.

| # | Tên | Loại / tag | Mô tả ngắn | Links |
|---|-----|------------|------------|--------|
| 1 | | | | |
| 2 | | | | |
| 3 | | | | |

### 4.5 Work experience

| Thời gian | Công ty | Vị trí | Địa điểm / Remote | Ghi chú (bullet) |
|-----------|---------|--------|-------------------|-----------------|
| | | | | |
| | | | | |

### 4.6 Certifications

| Chứng chỉ | Tổ chức | Ngày cấp | Credential URL |
|-----------|---------|----------|------------------|
| | | | |

---

## 5. Yêu cầu kỹ thuật (khi code)

- **Responsive**: Mobile-first; lưới dự án co giãn hợp lý.
- **Hiệu năng**: ảnh WebP/AVIF, kích thước phù hợp; lazy load below the fold.
- **SEO cơ bản**: `title`, `meta description`, OG image (nếu framework hỗ trợ).
- **Accessibility**: heading hierarchy hợp lý; contrast đủ; focus ring cho keyboard.
- **Liên kết ngoài**: `target="_blank"` + `rel="noopener noreferrer"` khi cần.
- **Ảnh (CSS)**: Áp dụng `border-radius` đồng nhất cho wrapper ảnh; `box-shadow` trạng thái mặc định nhẹ (hoặc không) và **đậm hơn khi `:hover` / `:focus-within`**; `transition` gọn cho `box-shadow`, `transform`. Dùng `@media (prefers-reduced-motion: reduce)` để giảm hoặc tắt `transform`/animation khi người dùng yêu cầu.

---

## 6. Stack gợi ý (có thể đổi)

- **Vite + React** hoặc **Next.js** (static export) + **Tailwind CSS**
- Nội dung tách file `data` (JSON/TS) để chỉnh không đụng layout

---

## 7. Checklist trước khi publish

- [ ] Copy Hero + About đã chỉnh sửa, không lỗi chính tả
- [ ] Ít nhất 3 dự án có ảnh + link hoạt động
- [ ] Experience và Certifications đồng bộ với CV
- [ ] Kiểm tra mobile và một trình duyệt khác (Chrome/Safari/Edge)
- [ ] CV PDF trong `public/` (nếu có nút tải)
- [ ] Ảnh đã bo góc nhẹ + hover đổ bóng / nâng nhẹ; đã kiểm tra với `prefers-reduced-motion` (nếu hỗ trợ)

---

*Tài liệu này vừa là brief thiết kế vừa là khung nội dung; khi điền xong mục 4, có thể copy sang component hoặc file data trong repo.*
