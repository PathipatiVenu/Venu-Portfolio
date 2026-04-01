// src/components/ParticlesBg.jsx
import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim"; // Slim version for better performance

const ParticlesBg = () => {
  const [init, setInit] = useState(false);

  // 1. Initialize the engine once
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  // 2. Configuration options to match the screenshot
  const options = {
    background: {
      color: {
        value: "transparent", // Lets your section backgrounds show through
      },
    },
    fpsLimit: 120,
    interactivity: {
      events: {
        onClick: { enable: true, mode: "push" },
        onHover: {
          enable: true,
          mode: "grab", // Creates links on hover as seen in the screenshot
        },
      },
      modes: {
        grab: {
          distance: 140, // Distance for connections to appear
          links: { opacity: 0.5 },
        },
        push: { quantity: 4 },
      },
    },
    particles: {
      color: { value: "#818cf8" }, // Indigo-400 to match your theme
      links: {
        color: "#a5b4fc", // Indigo-300 for connections
        distance: 150,
        enable: true,
        opacity: 0.3,
        width: 1,
      },
      move: {
        enable: true,
        speed: 1.2, // Subtle, slow movement
        direction: "none",
        random: false,
        straight: false,
        outModes: { default: "out" },
      },
      number: {
        density: { enable: true, area: 800 },
        value: 100, // Number of nodes
      },
      opacity: { value: 0.6 },
      shape: { type: "circle" },
      size: { value: { min: 1, max: 3 } },
    },
    detectRetina: true,
  };

  if (init) {
    return (
      <Particles
        id="tsparticles"
        className="absolute inset-0 z-0" // Stretches to fit container, behind content
        options={options}
      />
    );
  }

  return null;
};

export default ParticlesBg;