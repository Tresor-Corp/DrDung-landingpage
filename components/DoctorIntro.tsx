"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function DoctorIntro() {
  return (
    <section className="section-shell py-14 sm:py-16" id="doctor">
      <div className="grid items-center gap-8 rounded-3xl bg-white p-5 shadow-[0_12px_35px_rgba(0,0,0,0.06)] sm:p-8 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-2xl bg-[linear-gradient(135deg,#fff8f5_0%,#f9f2ea_100%)] p-3"
        >
          <div className="relative aspect-[4/3] w-full sm:aspect-[16/11]">
            <Image
              src="/images/angel-care/356092670_114128035052774_1862105200538007009_n.jpg"
              alt="Chân dung ThS.BS Trương Quốc Dũng"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-contain"
            />
          </div>
        </motion.div>

        <motion.article
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">
            ThS.BS Trương Quốc Dũng - Người bạn đồng hành tin cậy
          </h2>
          <p className="mt-4 text-sm leading-relaxed sm:text-base">
            Là bác sĩ sản phụ khoa đang công tác trực tiếp tại Bệnh viện Từ Dũ,
            ThS.BS Trương Quốc Dũng thấu hiểu những lo lắng của phụ nữ trong hành
            trình mang thai và làm mẹ. Tại Angel&apos;s Care, mẹ bầu được theo dõi
            theo quy trình chuẩn y khoa tuyến đầu nhưng vẫn giữ sự riêng tư, nhẹ
            nhàng và tận tình như một phòng khám gia đình.
          </p>
          <ul className="mt-5 space-y-3 text-sm font-semibold text-[#4f4f4f] sm:text-base">
            <li className="rounded-xl bg-[var(--primary-pink)]/35 px-4 py-3">
              Công tác tại BV Phụ sản Từ Dũ
            </li>
            <li className="rounded-xl bg-[var(--mint-green)]/35 px-4 py-3">
              Kinh nghiệm hàng ngàn ca sinh và phẫu thuật
            </li>
          </ul>
        </motion.article>
      </div>
    </section>
  );
}
