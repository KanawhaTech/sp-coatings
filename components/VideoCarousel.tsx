"use client";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { Icon } from "@iconify/react";

interface VideoItem {
  title: string;
  thumbnail?: string;
  href: string;
}

export default function VideoCarousel({ items }: { items: VideoItem[] }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start", slidesToScroll: 2 }, [
    Autoplay({ delay: 6000, stopOnInteraction: true }),
  ]);

  return (
    <div style={{ position: "relative", maxWidth: "860px", margin: "0 auto" }}>
      <div ref={emblaRef} style={{ overflow: "hidden" }}>
        <div style={{ display: "flex", gap: "12px" }}>
          {items.map((video) => (
            <a
              key={video.title}
              href={video.href}
              target="_blank"
              rel="noopener noreferrer"
              className="video-card"
              style={{
                flex: "0 0 calc(50% - 6px)",
                minWidth: 0,
                position: "relative",
                aspectRatio: "16/9",
                display: "block",
                overflow: "hidden",
                textDecoration: "none",
                borderRadius: "10px",
                boxShadow: "0 4px 18px rgba(0,0,0,0.18)",
              }}
            >
              <Image src={video.thumbnail ?? "/images/sddefault.jpg"} alt={video.title} fill style={{ objectFit: "cover", transition: "transform 0.45s ease" }} />
              <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.38)", transition: "background 0.3s" }} />
              <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <div className="video-card-play">
                  <Icon icon="mdi:play" width={28} color="#fff" style={{ marginLeft: "3px" }} />
                </div>
              </div>
              <div style={{
                position: "absolute", bottom: 0, left: 0, right: 0,
                padding: "12px 16px",
                background: "linear-gradient(transparent, rgba(0,0,0,0.8))",
              }}>
                <p style={{ color: "#fff", fontSize: "12px", fontWeight: "600", lineHeight: "1.4", margin: 0 }}>
                  {video.title}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Arrows */}
      <button
        className="carousel-btn carousel-btn-prev"
        onClick={() => emblaApi?.scrollPrev()}
        aria-label="Previous"
      >
        <Icon icon="mdi:chevron-left" width={22} />
      </button>
      <button
        className="carousel-btn carousel-btn-next"
        onClick={() => emblaApi?.scrollNext()}
        aria-label="Next"
      >
        <Icon icon="mdi:chevron-right" width={22} />
      </button>

      <style>{`
        @media (max-width: 640px) {
          .video-card { flex: 0 0 88% !important; }
        }
      `}</style>
    </div>
  );
}
