// src/components/particles-background/particles.tsx
import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadLinksPreset } from "@tsparticles/preset-links";
import type { ISourceOptions } from "@tsparticles/engine";

export default function ParticlesBackground() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    // carica il preset "links" una volta
    initParticlesEngine(async (engine) => {
      await loadLinksPreset(engine);
    }).then(() => setReady(true));
  }, []);

  const options = useMemo<ISourceOptions>(() => ({
    preset: "links",
    fullScreen: { enable: true, zIndex: -1 },
    background: { color: { value: "#000000" } },
    particles: {
      opacity: { value: 0.2 },
      color: { value: "#1fc19b2b" },
      links: {
        color: "#1fc19b2b",
        distance: 200,
        enable: true,
        opacity: 0.1,
        width: 1
      },
      move: { enable: true, speed: 0.6 }
    },
    // ⚠️ interactivity va a livello ROOT, non dentro "particles"
    interactivity: {
      events: {
        onHover: { enable: true, mode: "repulse" }
      },
      modes: {
        repulse: { distance: 100, duration: 0.4 }
      }
    }
  }), []);

  if (!ready) return null;
  return <Particles id="tsparticles" options={options} />;
}
