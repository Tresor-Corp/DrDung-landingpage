"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const galleryItems = [
  {
    image:
      "/images/angel-care/z6833731275651_97f9d2be4255972ee2988ce04a52b4e1.jpg",
    alt: "Bác sĩ và gia đình sản phụ",
    caption: "Bác sĩ và gia đình sản phụ lúc xuất viện",
  },
  {
    image:
      "/images/angel-care/z6833731270864_f9af3729590674ddb5e821b8b7e3e711.jpg",
    alt: "Khoảnh khắc da kề da sau sinh",
    caption: "Khoảnh khắc da kề da đầy cảm xúc",
  },
  {
    image:
      "/images/angel-care/z6833731262853_63a57df735b95fe805a3e36d28c9e014.jpg",
    alt: "Em bé vừa chào đời trong phòng sinh",
    caption: "Em bé vừa chào đời trong niềm hân hoan",
  },
  {
    image:
      "/images/angel-care/z7102359944296_15268e4634b4cdee6a2e3c6508330d8e.jpg",
    alt: "Khoảnh khắc mẹ bé hạnh phúc tại Angel Care",
    caption: "Hành trình mẹ tròn con vuông tại Angel's Care",
  },
];

export function Gallery() {
  const [current, setCurrent] = useState(0);
  const total = galleryItems.length;

  const prev = () => setCurrent((old) => (old - 1 + total) % total);
  const next = () => setCurrent((old) => (old + 1) % total);

  return (
    <section className="section-shell py-14 sm:py-16" id="gallery">
      <h2 className="section-title text-center">Gallery & Testimonials</h2>
      <p className="mt-3 text-center text-sm text-[var(--text-gray)] sm:text-base">
        &quot;Hạnh phúc của mẹ, niềm vui của Bác sĩ Dũng.&quot;
      </p>

      <div className="mt-8 overflow-hidden rounded-3xl bg-white p-3 shadow-[0_14px_35px_rgba(0,0,0,0.08)] sm:p-5">
        <motion.div
          animate={{ x: `-${current * 100}%` }}
          transition={{ type: "spring", stiffness: 220, damping: 30 }}
          className="flex"
        >
          {galleryItems.map((item) => (
            <figure key={item.image} className="min-w-full">
              <div className="relative flex h-[300px] items-center justify-center overflow-hidden rounded-2xl bg-[linear-gradient(135deg,#fff8f5_0%,#f9f2ea_100%)] p-3 sm:h-[420px] sm:p-6">
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 1200px"
                  className="object-contain"
                />
              </div>
              <figcaption className="mt-3 px-2 text-center text-sm font-medium text-[#5b5b5b] sm:text-base">
                {item.caption}
              </figcaption>
            </figure>
          ))}
        </motion.div>

        <div className="mt-5 flex items-center justify-center gap-3">
          <button
            type="button"
            onClick={prev}
            aria-label="Ảnh trước"
            className="rounded-full border border-[#d8c4a3] px-4 py-2 text-sm font-semibold text-[#6c5a3f] transition hover:bg-[#f7efe1]"
          >
            ←
          </button>
          {galleryItems.map((item, idx) => (
            <button
              key={item.image}
              type="button"
              onClick={() => setCurrent(idx)}
              aria-label={`Đến ảnh ${idx + 1}`}
              className={`h-2.5 w-2.5 rounded-full transition ${
                idx === current ? "bg-[#d9b26d]" : "bg-[#e9dcca]"
              }`}
            />
          ))}
          <button
            type="button"
            onClick={next}
            aria-label="Ảnh sau"
            className="rounded-full border border-[#d8c4a3] px-4 py-2 text-sm font-semibold text-[#6c5a3f] transition hover:bg-[#f7efe1]"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
}
