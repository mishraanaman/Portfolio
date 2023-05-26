import React from "react";
import Particles from "react-tsparticles";

function Particle() {
  return (
    <Particles
      id="tsparticles"
      params={{
        name: "NASA",
        particles: {
          number: {
            value: 160,
            density: {
              enable: true
            }
          },
          color: {
            value: "#ffffff"
          },
          shape: {
            type: "triangle"
          },
          opacity: {
            value: 0.75,
            random: true,
            animation: {
              enable: true,
              speed: 1,
              opacity_min: 0,
              sync: false
            }
          },
          size: {
            value: 3,
            random: true,
            animation: {
              enable: false,
              speed: 4,
              size_min: 0.3,
              sync: false
            }
          },
          links: {
            enable: false,
            distance: 150,
            color: "#ffffff",
            opacity: 0.4,
            width: 1
          },
          move: {
            enable: true,
            speed: 1,
            direction: "none",
            random: true,
            straight: false,
            bounce: false,
            attract: {
              enable: false,
              rotateX: 600,
              rotateY: 600
            }
          }
        },
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "bubble"
            },
            onClick: {
              enable: true,
              mode: "repulse"
            }
          },
          modes: {
            grab: {
              distance: 400,
              links: {
                opacity: 1
              }
            },
            bubble: {
              distance: 250,
              size: 0,
              duration: 2,
              opacity: 0
            },
            repulse: {
              distance: 400,
              duration: 0.4
            },
            push: {
              quantity: 4
            },
            remove: {
              quantity: 2
            }
          }
        },
        background: {
          color: "##080707",
          position: "50% 50%",
          repeat: "no-repeat",
          size: "20%"
        }
      }}
    />
  );
}

export default Particle;
