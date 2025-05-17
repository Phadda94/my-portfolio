// src/components/ParticlesBackground.jsx
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadLinksPreset } from "tsparticles-preset-links";

export default function ParticlesBackground() {
  const particlesInit = useCallback(async (engine) => {
    await loadLinksPreset(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        preset: "links",
        fullScreen: { enable: true, zIndex: -1 },
        background: {
          color: {
            value: "#000000",
          },
        },
        particles: {
          interactivity:{
            events:{
              onHover:{
                enable:true,
                mode: "repulse"
              }
            }
          },
          opacity: {value: 0.2},
          color: { value: "#1fc19b2b" },
          links: {
            color: "#1fc19b2b",
            distance: 200,
            enable: true,
            opacity: 0.1,
            width: 1,
          },
          move: {
            enable: true,
            speed: .6,
          },
        },
      }}
    />
  );
}
