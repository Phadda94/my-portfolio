import { useEffect, useMemo, useRef, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadLinksPreset } from "@tsparticles/preset-links";
import { loadExternalRepulseInteraction } from "@tsparticles/interaction-external-repulse";
import type { ISourceOptions } from "@tsparticles/engine";

export default function ParticlesBackground() {
  const [ready, setReady] = useState(false);
  const [count, setCount] = useState(120);
  const rafId = useRef<number | null>(null);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadLinksPreset(engine);
      await loadExternalRepulseInteraction(engine);
    }).then(() => setReady(true));
  }, []);

  // densità costante con limiti + throttle
  useEffect(() => {
    const D = 1000;          // più basso = più denso (prima 17280)
    const MIN = 40;
    const MAX = 180;          // cap forte per evitare freeze

    const computeNow = () => {
      const area = window.innerWidth * window.innerHeight;
      const value = Math.min(MAX, Math.max(MIN, Math.round(area / D)));
      setCount(value);
    };

    const onResize = () => {
      if (rafId.current != null) return;
      rafId.current = requestAnimationFrame(() => {
        rafId.current = null;
        computeNow();
      });
    };

    computeNow();
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, []);

  const options = useMemo<ISourceOptions>(() => ({
    fpsLimit: 45,              // limita consumo CPU
    detectRetina: false,       // evita raddoppio su retina
    preset: "links",
    fullScreen: { enable: true, zIndex: -1 },
    background: { color: { value: "#000000" } },
    interactivity: {
      detectsOn: "window",
      events: { onHover: { enable: true, mode: "repulse" } },
      modes: { repulse: { distance: 120, duration: 0.4 } }
    },
    particles: {
      number: { value: count },      // calcolato e “clamped”
      opacity: { value: 0.4 },
      color: { value: "#1fc19b2b" },
      links: { color: "#1fc19b2b", distance: 300, enable: true, opacity: 0.1, width: 0.2 },
      move: { enable: true, speed: 0.7 }
    },
    pauseOnOutsideViewport: true     // risparmia risorse quando la tab è in background
  }), [count]);

  if (!ready) return null;
  return <Particles id="tsparticles" options={options} />;
}
