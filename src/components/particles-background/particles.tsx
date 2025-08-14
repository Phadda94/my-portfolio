import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadLinksPreset } from "@tsparticles/preset-links";
import { loadExternalRepulseInteraction } from "@tsparticles/interaction-external-repulse";
import type { ISourceOptions } from "@tsparticles/engine";

export default function ParticlesBackground() {
  const [ready, setReady] = useState(false);
  const [count, setCount] = useState(120);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadLinksPreset(engine);
      await loadExternalRepulseInteraction(engine);
    }).then(() => setReady(true));
  }, []);


  useEffect(() => {
    const compute = () => {
      const area = window.innerWidth * window.innerHeight;

      // target: ~120 particelle su uno schermo 1920x1080
      // 1920*1080 ≈ 2_073_600 => 2_073_600 / 120 ≈ 17_280
      const D = 10; // più piccolo = più dense
      const value = Math.max(20, Math.round(area / D)); // minimo di sicurezza
      setCount(value);
    };

    compute();
    window.addEventListener("resize", compute);
    return () => window.removeEventListener("resize", compute);
  }, []);

  const options = useMemo<ISourceOptions>(() => ({
    preset: "links",
    fullScreen: { enable: true, zIndex: -1 },
    background: { color: { value: "#000000" } },
    interactivity: {
      detectsOn: "window",
      events: { onHover: { enable: true, mode: "repulse" } },
      modes: { repulse: { distance: 75, duration: 0.1 } }
    },
    particles: {
      number: { value: count }, // <- densità costante calcolata
      opacity: { value: 0.2 },
      color: { value: "#1fc19b2b" },
      links: {
        color: "#1fc19b2b",
        distance: 200,
        enable: true,
        opacity: 0.1,
        width: 0.7
      },
      move: { enable: true, speed: 0.7 }
    }
  }), [count]);

  if (!ready) return null;
  return <Particles id="tsparticles" options={options} />;
}
