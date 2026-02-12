import { DoctorIntro } from "@/components/DoctorIntro";
import { Footer } from "@/components/Footer";
import { Gallery } from "@/components/Gallery";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { StickyZalo } from "@/components/StickyZalo";
import { USP } from "@/components/USP";
import { WaveDivider } from "@/components/WaveDivider";

export default function Home() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,#fffdfb_5%,#fff9f7_45%,#f8efeb_100%)]">
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_15%_18%,rgba(184,216,192,0.2),transparent_36%),radial-gradient(circle_at_85%_12%,rgba(244,216,216,0.28),transparent_34%)]"
      />
      <main>
        <Hero />
        <WaveDivider />
        <DoctorIntro />
        <WaveDivider flip />
        <USP />
        <WaveDivider />
        <Services />
        <WaveDivider flip />
        <Gallery />
      </main>
      <Footer />
      <StickyZalo />
    </div>
  );
}
