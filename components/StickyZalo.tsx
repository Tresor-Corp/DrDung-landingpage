import Image from "next/image";

export function StickyZalo() {
  return (
    <a
      href="https://zalo.me/0362654068"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Liên hệ Zalo 0362 654 068"
      className="fixed right-4 bottom-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-[0_10px_24px_rgba(0,132,255,0.28)] ring-1 ring-[#0084ff]/20 transition hover:brightness-95"
    >
      <Image
        src="https://page.widget.zalo.me/static/images/2.0/Logo.svg"
        alt="Zalo"
        width={32}
        height={32}
        className="h-8 w-8"
      />
    </a>
  );
}
