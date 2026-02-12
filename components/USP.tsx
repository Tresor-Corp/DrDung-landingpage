"use client";

import { motion } from "framer-motion";

const uspItems = [
  {
    title: "Quy Trình Chuẩn Từ Dũ",
    desc: "Theo dõi thai kỳ sát sao, ưu tiên phác đồ an toàn cho mẹ và bé.",
  },
  {
    title: "Công Nghệ 4.0 - App AMAZ CARE",
    desc: "Nhắc lịch khám, lưu hồ sơ và cập nhật thông tin nhanh trên điện thoại.",
  },
  {
    title: "Tư Vấn 1:1 - Zalo 24/7",
    desc: "Bác sĩ tư vấn 1:1 không giới hạn thời gian, hỗ trợ giải đáp miễn phí qua Zalo 24/7.",
  },
  {
    title: "Dịch Vụ Tận Tâm - Không gian thân thiện",
    desc: "Không gian sạch, ấm áp, có trà và cà phê miễn phí cho người nhà đi cùng.",
  },
];

export function USP() {
  return (
    <section className="section-shell py-14 sm:py-16" id="usp">
      <h2 className="section-title text-center">Vì Sao Chọn Angel&apos;s Care</h2>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {uspItems.map((item, idx) => (
          <motion.article
            key={item.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: idx * 0.08, duration: 0.4 }}
            className="rounded-2xl border border-white/80 bg-white p-5 shadow-[0_8px_24px_rgba(0,0,0,0.05)] transition hover:-translate-y-1 hover:shadow-[0_12px_28px_rgba(0,0,0,0.09)]"
          >
            <div className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-full bg-[var(--mint-green)]/45 text-lg font-black text-[#355546]">
              {idx + 1}
            </div>
            <h3 className="font-heading text-lg text-[#424242]">{item.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-[var(--text-gray)]">
              {item.desc}
            </p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
