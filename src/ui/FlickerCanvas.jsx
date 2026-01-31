import { useEffect, useRef } from 'react';

export default function FlickerCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    function resizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }

    resizeCanvas();
    window.addEventListener(
      'resize',
      resizeCanvas
    );

    let time = 0;
    let glitchTime = 0;
    let glitchActive = false;
    let nextIdleGlitch =
      Date.now() + getRandomIdleDelay();

    function getRandomIdleDelay() {
      return 8000 + Math.random() * 7000; // 8-15s delay
    }

    function drawFlicker() {
      ctx.clearRect(
        0,
        0,
        canvas.width,
        canvas.height
      );

      for (let y = 0; y < canvas.height; y += 3) {
        let offsetX =
          Math.sin((y + time) * 0.02) * 2;

        if (glitchActive) {
          offsetX += (Math.random() - 0.5) * 6;
        }

        let brightness = glitchActive
          ? Math.random() * 0.08 + 0.05
          : Math.random() * 0.05;

        // Neon red main
        ctx.fillStyle = `rgba(255, 0, 0, ${brightness})`;
        ctx.fillRect(offsetX, y, canvas.width, 1);

        // Subtle green
        ctx.fillStyle = `rgba(0, 255, 0, ${brightness * 0.4})`;
        ctx.fillRect(
          offsetX + 1,
          y,
          canvas.width,
          1
        );

        // Subtle blue
        ctx.fillStyle = `rgba(0, 128, 255, ${brightness * 0.4})`;
        ctx.fillRect(
          offsetX - 1,
          y,
          canvas.width,
          1
        );
      }

      time += 1;
    }

    function triggerGlitch() {
      glitchActive = true;
      glitchTime = 0;
    }

    function animate() {
      const now = Date.now();

      if (!glitchActive && now > nextIdleGlitch) {
        triggerGlitch();
        nextIdleGlitch =
          now + getRandomIdleDelay();
      }

      if (glitchActive) {
        glitchTime++;
        if (glitchTime > 12) glitchActive = false; // ~0.2s glitch
      }

      drawFlicker();

      requestAnimationFrame(animate);
    }

    // Trigger glitch on mouse enter
    const handleMouseEnter = () =>
      triggerGlitch();
    document.body.addEventListener(
      'mouseenter',
      handleMouseEnter
    );

    animate();

    return () => {
      window.removeEventListener(
        'resize',
        resizeCanvas
      );
      document.body.removeEventListener(
        'mouseenter',
        handleMouseEnter
      );
    };
  }, []);

  return (
    <canvas
      id="flickerCanvas"
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 2,
        pointerEvents: 'none',
        width: '100%',
        height: '100%',
      }}
    />
  );
}
