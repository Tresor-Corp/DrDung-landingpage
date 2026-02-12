export function Footer() {
  return (
    <footer className="bg-[#fff1ee] py-14" id="contact">
      <div className="section-shell grid gap-8 lg:grid-cols-[1fr_1.2fr]">
        <section>
          <h2 className="section-title">Liên Hệ Angel&apos;s Care</h2>
          <div className="mt-5 space-y-3 text-sm leading-relaxed sm:text-base">
            <p>
              <strong>Hotline/Zalo:</strong>{" "}
              <a href="tel:0362654068" className="font-bold">
                0362 654 068
              </a>
            </p>
            <p>
              <strong>Phòng khám:</strong> Angel&apos;s Care
            </p>
            <p>
              <strong>Địa chỉ:</strong> 12 Đường số 2, Khu Phạm Hùng, P5, Quận 8, TP.HCM
            </p>
            <p>
              <strong>Giờ làm việc:</strong> 07:30 - 20:00 (Thứ 2 - Chủ Nhật)
            </p>
          </div>
          <a
            href="https://zalo.me/0362654068"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-primary mt-6"
          >
            Chat Zalo Ngay
          </a>
        </section>
        <section className="overflow-hidden rounded-2xl border border-white/80 bg-white p-2 shadow-[0_10px_28px_rgba(0,0,0,0.08)]">
          <iframe
            title="Google Maps Angel's Care"
            src="https://www.google.com/maps?q=12+Duong+so+2+Khu+Pham+Hung+Phuong+5+Quan+8+TPHCM&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-[300px] w-full rounded-xl border-0 sm:h-[360px]"
          />
        </section>
      </div>
    </footer>
  );
}
