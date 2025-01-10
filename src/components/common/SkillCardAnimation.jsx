import { useEffect, useRef } from "react";

const SkillCardAnimation = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    canvas.width = 500; // Match parent width
    canvas.height = 160; // Match parent height

    // Generate 250 bubbles with a "V-shaped" placement
    const bubbles = [];
    for (let i = 0; i < 250; i++) {
      let x, y;

      // Ensure most bubbles are at the top and center
      do {
        x = Math.random() * canvas.width;
        y = Math.random() * canvas.height;
      } while (
        (y > canvas.height / 2 && (x < canvas.width * 0.2 || x > canvas.width * 0.8)) || // Avoid bottom-left and bottom-right
        (y > canvas.height * 0.8) // Avoid deep bottom area
      );

      const radius = 1; // Bubble size is 1px

      // Randomize opacity for lighter colors
      const opacity = Math.random() * 0.3 + 0.1; // Opacity between 0.1 and 0.4

      // Use only lightest colors (e.g., light blue, light orange, and lighter tones)
      const colors = [
        `rgba(255, 255, 230, ${opacity})`, // Light Blue
        `rgba(255, 255, 240, ${opacity})`, // Light Orange
        `rgba(255, 255, 255, ${opacity})`, // Alice Blue
      ];
      const color = colors[Math.floor(Math.random() * colors.length)];

      bubbles.push({
        x,
        y,
        radius,
        dx: Math.random() * 0.5 - 0.25, // Random slow speed in x-direction
        dy: Math.random() * 0.5 - 0.25, // Random slow speed in y-direction
        color,
      });
    }

    // Animate bubbles
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      bubbles.forEach((bubble) => {
        bubble.x += bubble.dx;
        bubble.y += bubble.dy;

        // Bounce at edges
        if (bubble.x + bubble.radius > canvas.width || bubble.x - bubble.radius < 0) {
          bubble.dx *= -1;
        }
        if (bubble.y + bubble.radius > canvas.height || bubble.y - bubble.radius < 0) {
          bubble.dy *= -1;
        }

        // Draw Bubble
        ctx.beginPath();
        ctx.arc(bubble.x, bubble.y, bubble.radius, 0, Math.PI * 2);
        ctx.fillStyle = bubble.color;
        ctx.fill();
        ctx.closePath();
      });

      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  return (
    <div className="max-w-[40rem] h-40 relative overflow-hidden mx-auto">
      {/* Gradient Lines */}
      <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm"></div>
      <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4"></div>
      <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm"></div>
      <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4"></div>

      {/* Animation Canvas */}
      <canvas
        ref={canvasRef}
        style={{ width: "100%", height: "100%", pointerEvents: "none" }}
        aria-hidden="true"
      ></canvas>

      {/* Mask Effect */}
      <div className="absolute inset-0 w-full h-full bg-background [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
    </div>
  );
};

export default SkillCardAnimation;
