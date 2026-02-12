"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <Image
        src="/images/angel-care/bsdung.jpg"
        alt="ThS.BS Trương Quốc Dũng tại phòng khám"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#fff9f7]/95 via-[#fff9f7]/82 to-[#f4d8d8]/65" />
      <div className="relative section-shell py-18 sm:py-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl"
        >
          <p className="mb-4 inline-block rounded-full bg-white/80 px-4 py-1 text-xs font-bold uppercase tracking-[0.24em] text-[#6c5f5f]">
            Angel&apos;s Care
          </p>
          <h1 className="font-heading text-3xl leading-tight text-[#4a4141] sm:text-4xl lg:text-5xl">
            Chăm Sóc Thai Kỳ Chuẩn Bệnh Viện Từ Dũ - Tận Tâm Như Người Nhà
          </h1>
          <p className="mt-5 max-w-2xl text-sm leading-relaxed text-[var(--text-gray)] sm:text-base">
            Đồng hành cùng ThS.BS Trương Quốc Dũng - Bác sĩ BV Từ Dũ. Quản lý
            thai kỳ 4.0, chi phí hợp lý, hỗ trợ sinh tại các bệnh viện hàng đầu
            TP.HCM.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <a href="#contact" className="cta-primary">
              Đặt Lịch Khám Ngay
            </a>
            <a
              href="https://zalo.me/0362654068"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-secondary"
            >
              Tư Vấn Zalo Miễn Phí
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
