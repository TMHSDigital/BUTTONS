// Main.js

document.addEventListener('DOMContentLoaded', () => {
  // 3D Flip Button
  const flipButton = document.querySelector('.3d-flip-button');
  if (flipButton) {
    flipButton.addEventListener('click', () => {
      flipButton.classList.toggle('flipped');
    });
  }

  // Animated Button
  const animatedButton = document.querySelector('.animated-button');
  if (animatedButton) {
    animatedButton.addEventListener('click', () => {
      animatedButton.classList.add('clicked');
      setTimeout(() => {
        animatedButton.classList.remove('clicked');
      }, 1000);
    });
  }

  // Enhanced Freeze Fire Button
  const enhancedFreezeFireButton = document.querySelector('.enhanced-freeze-fire-button');
  if (enhancedFreezeFireButton) {
    enhancedFreezeFireButton.addEventListener('mouseenter', () => {
      enhancedFreezeFireButton.classList.add('hover');
    });
    enhancedFreezeFireButton.addEventListener('mouseleave', () => {
      enhancedFreezeFireButton.classList.remove('hover');
    });
  }

  // Freeze Fire Button
  const freezeFireButton = document.querySelector('.freeze-fire-button');
  if (freezeFireButton) {
    freezeFireButton.addEventListener('mouseenter', () => {
      freezeFireButton.classList.add('hover');
    });
    freezeFireButton.addEventListener('mouseleave', () => {
      freezeFireButton.classList.remove('hover');
    });
  }

  // Glitch Button
  const glitchButton = document.querySelector('.glitch-button');
  if (glitchButton) {
    glitchButton.addEventListener('click', () => {
      glitchButton.classList.add('glitch-effect');
      setTimeout(() => {
        glitchButton.classList.remove('glitch-effect');
      }, 1000);
    });
  }

  // Glitch Button 2
  const glitchButton2 = document.querySelector('.glitch-button2');
  if (glitchButton2) {
    glitchButton2.addEventListener('click', () => {
      glitchButton2.classList.add('glitch-effect');
      setTimeout(() => {
        glitchButton2.classList.remove('glitch-effect');
      }, 1000);
    });
  }

  // Liquid Button
  const liquidButton = document.querySelector('.liquid-button');
  if (liquidButton) {
    liquidButton.addEventListener('click', () => {
      liquidButton.classList.add('clicked');
      setTimeout(() => {
        liquidButton.classList.remove('clicked');
      }, 2000);
    });
  }

  // Neon Button
  const neonButton = document.querySelector('.neon-button');
  if (neonButton) {
    neonButton.addEventListener('mouseenter', () => {
      neonButton.classList.add('hover');
    });
    neonButton.addEventListener('mouseleave', () => {
      neonButton.classList.remove('hover');
    });
  }

  // Neon Flicker Push Button
  const neonFlickerPushButton = document.querySelector('.neon-flicker-button-push');
  if (neonFlickerPushButton) {
    neonFlickerPushButton.addEventListener('click', () => {
      neonFlickerPushButton.classList.add('pushed');
      setTimeout(() => {
        neonFlickerPushButton.classList.remove('pushed');
      }, 300);
    });
  }

  // Particle Explosion Button
  const particleExplosionButton = document.querySelector('.particle-explosion-button');
  if (particleExplosionButton) {
    particleExplosionButton.addEventListener('click', () => {
      createParticles(particleExplosionButton);
    });
  }
});

function createParticles(button) {
  const particles = 20;
  const buttonRect = button.getBoundingClientRect();

  for (let i = 0; i < particles; i++) {
    const particle = document.createElement('div');
    particle.classList.add('particle');
    particle.style.left = `${buttonRect.left + buttonRect.width / 2}px`;
    particle.style.top = `${buttonRect.top + buttonRect.height / 2}px`;
    document.body.appendChild(particle);

    const angle = Math.random() * Math.PI * 2;
    const speed = Math.random() * 5 + 2;
    const size = Math.random() * 5 + 5;
    const color = `hsl(${Math.random() * 360}, 100%, 50%)`;

    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    particle.style.backgroundColor = color;

    gsap.to(particle, {
      duration: 1,
      x: Math.cos(angle) * 100 * speed,
      y: Math.sin(angle) * 100 * speed,
      opacity: 0,
      onComplete: () => {
        document.body.removeChild(particle);
      }
    });
  }
}
