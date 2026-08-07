import { useEffect, useRef } from "react";

/** Lightweight animated node-network canvas. Deterministic, no external deps. */
export function NetworkCanvas({ className = "" }: { className?: string }) {
  const ref = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    const NODE_COUNT = reduceMotion ? 24 : isMobile ? 36 : 72;
    const MAX_DIST = isMobile ? 120 : 160;

    let width = 0;
    let height = 0;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    let visible = true;

    const nodes = Array.from({ length: NODE_COUNT }, () => ({
      x: Math.random(),
      y: Math.random(),
      vx: (Math.random() - 0.5) * 0.00022,
      vy: (Math.random() - 0.5) * 0.00022,
      r: Math.random() * 1.6 + 0.6,
    }));

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize, { passive: true });

    let raf = 0;
    let mouseX = -9999;
    let mouseY = -9999;
    const onMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    };
    const onLeave = () => {
      mouseX = -9999;
      mouseY = -9999;
    };
    // Parent may set pointer-events-none; listen on window only when interactive
    const interactive = getComputedStyle(canvas).pointerEvents !== "none";
    if (interactive && !reduceMotion) {
      canvas.addEventListener("mousemove", onMove, { passive: true });
      canvas.addEventListener("mouseleave", onLeave);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting;
      },
      { threshold: 0.05 },
    );
    observer.observe(canvas);

    const drawFrame = () => {
      ctx.clearRect(0, 0, width, height);
      const pts = nodes.map((n) => {
        if (!reduceMotion) {
          n.x += n.vx;
          n.y += n.vy;
          if (n.x < 0 || n.x > 1) n.vx *= -1;
          if (n.y < 0 || n.y > 1) n.vy *= -1;
        }
        return { x: n.x * width, y: n.y * height, r: n.r };
      });

      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const dx = pts[i].x - pts[j].x;
          const dy = pts[i].y - pts[j].y;
          const d = Math.hypot(dx, dy);
          if (d < MAX_DIST) {
            const a = 1 - d / MAX_DIST;
            ctx.strokeStyle = `rgba(59, 158, 219, ${a * 0.35})`;
            ctx.lineWidth = 0.6;
            ctx.beginPath();
            ctx.moveTo(pts[i].x, pts[i].y);
            ctx.lineTo(pts[j].x, pts[j].y);
            ctx.stroke();
          }
        }

        if (interactive && !reduceMotion) {
          const dxm = pts[i].x - mouseX;
          const dym = pts[i].y - mouseY;
          const dm = Math.hypot(dxm, dym);
          if (dm < 180) {
            const a = 1 - dm / 180;
            ctx.strokeStyle = `rgba(59, 158, 219, ${a * 0.7})`;
            ctx.lineWidth = 0.8;
            ctx.beginPath();
            ctx.moveTo(pts[i].x, pts[i].y);
            ctx.lineTo(mouseX, mouseY);
            ctx.stroke();
          }
        }
      }

      for (const p of pts) {
        ctx.fillStyle = "rgba(59, 158, 219, 0.9)";
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = "rgba(59, 158, 219, 0.15)";
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r * 3, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    const loop = () => {
      if (visible) drawFrame();
      if (!reduceMotion) raf = requestAnimationFrame(loop);
    };

    if (reduceMotion) {
      drawFrame();
    } else {
      raf = requestAnimationFrame(loop);
    }

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      canvas.removeEventListener("mousemove", onMove);
      canvas.removeEventListener("mouseleave", onLeave);
      observer.disconnect();
    };
  }, []);

  return <canvas ref={ref} className={className} aria-hidden />;
}
