import Image from "next/image";
import HeroContent from "@/components/HeroContent";

export default function HomePage() {
  return (
    <div className="min-h-screen relative">
      <div className="absolute inset-0">
        <Image
          src="/images/demut.jpg"
          alt="Demut Hintergrund"
          fill
          priority
          className="object-cover"
          quality={85}
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>
      <HeroContent />
    </div>
  );
}
