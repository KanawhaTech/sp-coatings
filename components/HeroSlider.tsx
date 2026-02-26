"use client";

import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import { slides } from "@/lib/data/slides";

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const total = slides.length;

  const prev = useCallback(() => {
    setCurrent((c) => (c - 1 + total) % total);
  }, [total]);

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % total);
  }, [total]);

  const goTo = useCallback((index: number) => {
    setCurrent(index);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  const slide = slides[current];

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "560px",
        background: "#1a1a1a",
        overflow: "hidden",
      }}
    >
      {/* Solo se renderiza la diapositiva activa — el key fuerza remount y reinicia la animación */}
      <div key={current} style={{ position: "absolute", inset: 0, animation: "heroFadeIn 0.8s ease forwards" }}>
        {/* Imagen de fondo */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={slide.image}
          alt={slide.title}
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
          }}
        />

        {/* Gradient overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to right, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.3) 40%, rgba(0,0,0,0.68) 100%)",
          }}
        />

        {/* Texto — derecha */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-end",
            paddingRight: "80px",
            paddingLeft: "40px",
            textAlign: "right",
            zIndex: 2,
          }}
        >
          <h2
            style={{
              color: "#fff",
              fontWeight: "800",
              fontSize: "clamp(1.6em, 3.5vw, 2.8em)",
              lineHeight: "1.2",
              marginBottom: "20px",
              textShadow: "0 2px 12px rgba(0,0,0,0.7)",
              maxWidth: "500px",
            }}
          >
            {slide.title}
          </h2>
          <Link
            href={slide.href}
            style={{
              background: "#f99d22",
              color: "#fff",
              padding: "10px 24px",
              textDecoration: "none",
              fontWeight: "700",
              fontSize: "12px",
              display: "inline-block",
              borderRadius: "3px",
              textTransform: "uppercase",
              letterSpacing: "1.5px",
            }}
          >
            {slide.label}
          </Link>
        </div>
      </div>

      {/* Flecha izquierda */}
      <button
        onClick={prev}
        aria-label="Previous slide"
        style={{
          position: "absolute",
          left: 0,
          top: "50%",
          transform: "translateY(-50%)",
          background: "rgba(0,0,0,0.28)",
          border: "none",
          color: "#fff",
          width: "38px",
          height: "60px",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 10,
        }}
      >
        <Icon icon="mdi:chevron-left" width={26} />
      </button>

      {/* Flecha derecha */}
      <button
        onClick={next}
        aria-label="Next slide"
        style={{
          position: "absolute",
          right: 0,
          top: "50%",
          transform: "translateY(-50%)",
          background: "rgba(0,0,0,0.28)",
          border: "none",
          borderLeft: "3px solid #CC2026",
          color: "#fff",
          width: "38px",
          height: "60px",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 10,
        }}
      >
        <Icon icon="mdi:chevron-right" width={26} />
      </button>

      {/* Dots */}
      <div
        style={{
          position: "absolute",
          bottom: "22px",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          gap: "10px",
          zIndex: 10,
        }}
      >
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Slide ${i + 1}`}
            style={{
              width: "10px",
              height: "10px",
              borderRadius: "50%",
              border: "2px solid rgba(255,255,255,0.8)",
              background: i === current ? "#CC2026" : "transparent",
              cursor: "pointer",
              padding: 0,
              transition: "background 0.3s, transform 0.3s",
              transform: i === current ? "scale(1.3)" : "scale(1)",
            }}
          />
        ))}
      </div>
    </div>
  );
}
