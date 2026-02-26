"use client";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";
import type { NewsItem } from "@/lib/data/home";

export default function NewsCarousel({ items }: { items: NewsItem[] }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start", slidesToScroll: 2 }, [
    Autoplay({ delay: 5000, stopOnInteraction: true }),
  ]);

  return (
    <div style={{ position: "relative" }}>
      <div ref={emblaRef} style={{ overflow: "hidden" }}>
        <div style={{ display: "flex", gap: "20px" }}>
          {items.map((news) => (
            <Link
              key={news.title}
              href={news.href}
              className="news-card"
              style={{ flex: "0 0 calc(50% - 10px)", minWidth: 0 }}
            >
              <div style={{ position: "relative", width: "160px", flexShrink: 0, minHeight: "130px" }}>
                <Image src={news.image ?? "/images/news-bg.jpg"} alt={news.title} fill style={{ objectFit: "cover" }} />
              </div>
              <div style={{ padding: "18px 20px", display: "flex", flexDirection: "column", justifyContent: "center", gap: "10px" }}>
                <span style={{
                  background: "#f0f0f0", color: "#CC2026", fontSize: "10px", fontWeight: "700",
                  padding: "3px 8px", borderRadius: "3px", alignSelf: "flex-start",
                  letterSpacing: "0.5px", textTransform: "uppercase" as const,
                }}>
                  {news.category ?? "News"}
                </span>
                <h3 style={{ color: "#222", fontSize: "13px", fontWeight: "700", lineHeight: "1.55", margin: 0 }}>
                  {news.title}
                </h3>
                <span className="news-card-btn btn-cta btn-cta-orange"
                  style={{ padding: "5px 16px", fontSize: "11px", alignSelf: "flex-start", borderRadius: "3px" }}>
                  Go to →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Arrows */}
      <button
        className="carousel-btn carousel-btn-prev"
        onClick={() => emblaApi?.scrollPrev()}
        aria-label="Previous"
        style={{ top: "50%", transform: "translateY(-50%)" }}
      >
        <Icon icon="mdi:chevron-left" width={22} />
      </button>
      <button
        className="carousel-btn carousel-btn-next"
        onClick={() => emblaApi?.scrollNext()}
        aria-label="Next"
        style={{ top: "50%", transform: "translateY(-50%)" }}
      >
        <Icon icon="mdi:chevron-right" width={22} />
      </button>

      <style>{`
        @media (max-width: 640px) {
          .news-card { flex: 0 0 90% !important; }
        }
      `}</style>
    </div>
  );
}
