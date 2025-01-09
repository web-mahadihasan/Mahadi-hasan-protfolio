import { useEffect, useRef } from "react";

const SkillAnimation = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");
    
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    
      const bubblesArray = [];
    
      // Bubble object
      class Bubble {
        constructor() {
          this.x = Math.random() * canvas.width;
          this.y = Math.random() * canvas.height;
          this.radius = Math.random() * 5 + 2; // Bubble size
          this.speedX = Math.random() * 1 - 0.5; // Horizontal movement
          this.speedY = Math.random() * 1 - 0.5; // Vertical movement
          this.color = `rgba(0, 0, 0, ${Math.random()})`; // Transparent black
        }
    
        update() {
          this.x += this.speedX;
          this.y += this.speedY;
    
          // Bounce the bubbles off the canvas edges
          if (this.x + this.radius > canvas.width || this.x - this.radius < 0) {
            this.speedX = -this.speedX;
          }
          if (this.y + this.radius > canvas.height || this.y - this.radius < 0) {
            this.speedY = -this.speedY;
          }
        }
    
        draw() {
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
          ctx.fillStyle = this.color;
          ctx.fill();
          ctx.closePath();
        }
      }
    
      function init() {
        for (let i = 0; i < 100; i++) {
          bubblesArray.push(new Bubble());
        }
      }
    
      function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear canvas
        bubblesArray.forEach((bubble) => {
          bubble.update();
          bubble.draw();
        });
        requestAnimationFrame(animate);
      }
    
      init();
      animate();
    
      // Adjust canvas size on resize
      const handleResize = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      };
      window.addEventListener("resize", handleResize);
    
      return () => window.removeEventListener("resize", handleResize);
    }, []);
    
    return (
      <div className="relative">
        <canvas
        ref={canvasRef}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: -1,
          background: "radial-gradient(circle, #ffffff, #f0f0f0)", // Optional background
        }}
      />
      </div>
    );
};

export default SkillAnimation;