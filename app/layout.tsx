import type { Metadata } from "next";
import { Nunito_Sans, Quicksand } from "next/font/google";
import "./globals.css";
import "../styles/theme.css";

const quicksand = Quicksand({
  variable: "--font-heading",
  subsets: ["latin", "latin-ext"],
  weight: ["600", "700"],
});

const nunitoSans = Nunito_Sans({
  variable: "--font-body",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Angel's Care | Chăm Sóc Thai Kỳ Chuẩn Bệnh Viện Từ Dũ",
  description:
    "Đồng hành cùng ThS.BS Trương Quốc Dũng tại Angel's Care: quản lý thai kỳ 4.0, tư vấn tận tâm, hỗ trợ sinh tại các bệnh viện hàng đầu TP.HCM.",
  keywords: ["phụ sản", "thai kỳ", "bác sĩ Từ Dũ", "khám thai TPHCM", "Angel's Care"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body
        suppressHydrationWarning
        className={`${quicksand.variable} ${nunitoSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
