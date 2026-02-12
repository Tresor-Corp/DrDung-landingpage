"use client";

import { motion } from "framer-motion";

const services = [
  "Khám & quản lý thai kỳ toàn diện",
  "Kế hoạch hóa gia đình",
  "Hiếm muộn",
  "Pap smear / HPV",
  "Xét nghiệm đầy đủ suốt thai kỳ",
  "Hỗ trợ sinh & mổ trọn gói tại BV lớn",
];

export function Services() {
  return (
    <section className="bg-[var(--primary-pink)]/18 py-14 sm:py-16" id="services">
      <div className="section-shell grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45 }}
        >
          <h2 className="section-title">Dịch Vụ & Bảng Giá</h2>
          <ul className="mt-5 space-y-3">
            {services.map((service) => (
              <li
                key={service}
                className="rounded-xl bg-white/90 px-4 py-3 text-sm font-semibold text-[#4f4f4f] shadow-[0_4px_14px_rgba(0,0,0,0.05)] sm:text-base"
              >
                {service}
              </li>
            ))}
          </ul>
          <p className="mt-5 text-sm leading-relaxed text-[var(--text-gray)] sm:text-base">
            Hỗ trợ sinh tại: Từ Dũ, Phương Nam, Vinmec, An Sinh, An Đông, AIH...
          </p>
        </motion.article>
        <motion.aside
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45, delay: 0.1 }}
          className="rounded-3xl bg-white p-6 shadow-[0_12px_35px_rgba(0,0,0,0.07)]"
        >
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#7c6a50]">
            Bảng giá tham khảo
          </p>
          <div className="mt-5 space-y-4">
            <div className="rounded-2xl bg-[var(--cream-background)] p-4">
              <p className="text-sm font-semibold text-[#4a4a4a]">
                Khám & tư vấn
              </p>
              <p className="mt-1 font-heading text-2xl text-[#3d3d3d]">
                150.000 VNĐ
              </p>
            </div>
            <div className="rounded-2xl bg-[var(--cream-background)] p-4">
              <p className="text-sm font-semibold text-[#4a4a4a]">
                Siêu âm 2D/3D/4D
              </p>
              <p className="mt-1 font-heading text-2xl text-[#3d3d3d]">
                Từ 150.000 VNĐ
              </p>
            </div>
          </div>
          <a href="#contact" className="cta-primary mt-6 w-full">
            Nhận tư vấn chi tiết
          </a>
        </motion.aside>
      </div>
    </section>
  );
}
