// VitalChain dashboard mockup — simulated live waveform + risk gauge
(function () {
  const canvas = document.getElementById("waveCanvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");

  const cssWidth = canvas.clientWidth || 720;
  const cssHeight = canvas.clientHeight || 190;
  const dpr = window.devicePixelRatio || 1;
  canvas.width = cssWidth * dpr;
  canvas.height = cssHeight * dpr;
  ctx.scale(dpr, dpr);

  const W = cssWidth;
  const H = cssHeight;
  const now = W * 0.62; // boundary between measured and predicted
  const minMap = 45;
  const maxMap = 95;

  function mapY(v) {
    const t = (v - minMap) / (maxMap - minMap);
    return H - 20 - t * (H - 40);
  }

  // Base measured history (last ~90 samples), trending down toward "now"
  const history = [];
  let val = 78;
  for (let i = 0; i < 90; i++) {
    const drift = -0.14 * (i / 90) * 30; // gentle downward drift over time
    val += (Math.random() - 0.5) * 2.2;
    const target = 78 + drift;
    val += (target - val) * 0.08;
    history.push(val);
  }

  // Predicted future path (uncertain band trending further down)
  const future = [];
  let fval = history[history.length - 1];
  for (let i = 0; i < 40; i++) {
    fval -= 0.5 + Math.random() * 0.35;
    future.push(fval);
  }

  let liveHistory = history.slice();

  function draw() {
    ctx.clearRect(0, 0, W, H);

    // grid
    ctx.strokeStyle = "rgba(255,255,255,0.05)";
    ctx.lineWidth = 1;
    for (let gy = 20; gy < H; gy += 34) {
      ctx.beginPath();
      ctx.moveTo(0, gy);
      ctx.lineTo(W, gy);
      ctx.stroke();
    }

    // threshold line 65 mmHg
    const thresholdY = mapY(65);
    ctx.strokeStyle = "#f5a623";
    ctx.setLineDash([5, 5]);
    ctx.lineWidth = 1.4;
    ctx.beginPath();
    ctx.moveTo(0, thresholdY);
    ctx.lineTo(W, thresholdY);
    ctx.stroke();
    ctx.setLineDash([]);
    ctx.fillStyle = "#f5a623";
    ctx.font = "11px sans-serif";
    ctx.fillText("65 mmHg", 6, thresholdY - 6);

    // predicted risk zone shading
    ctx.fillStyle = "rgba(245,99,110,0.08)";
    ctx.fillRect(now, 0, W - now, H);

    // measured line
    ctx.strokeStyle = "#38bdf8";
    ctx.lineWidth = 2.2;
    ctx.beginPath();
    liveHistory.forEach((v, i) => {
      const x = (i / (liveHistory.length - 1)) * now;
      const y = mapY(v);
      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    });
    ctx.stroke();

    // "now" marker
    ctx.strokeStyle = "rgba(255,255,255,0.25)";
    ctx.setLineDash([3, 4]);
    ctx.beginPath();
    ctx.moveTo(now, 0);
    ctx.lineTo(now, H);
    ctx.stroke();
    ctx.setLineDash([]);

    // predicted line
    ctx.strokeStyle = "#f5636e";
    ctx.lineWidth = 2.2;
    ctx.beginPath();
    const lastX = now;
    const lastY = mapY(liveHistory[liveHistory.length - 1]);
    ctx.moveTo(lastX, lastY);
    future.forEach((v, i) => {
      const x = now + ((i + 1) / future.length) * (W - now);
      const y = mapY(v);
      ctx.lineTo(x, y);
    });
    ctx.stroke();

    // predicted dot
    const endX = W - 4;
    const endY = mapY(future[future.length - 1]);
    ctx.fillStyle = "#f5636e";
    ctx.beginPath();
    ctx.arc(endX, endY, 4, 0, Math.PI * 2);
    ctx.fill();
  }

  // gently animate the live portion so it feels "real-time"
  function tick() {
    liveHistory.shift();
    const last = liveHistory[liveHistory.length - 1];
    const next = last + (Math.random() - 0.55) * 1.6;
    liveHistory.push(Math.max(50, Math.min(90, next)));
    draw();
  }

  draw();
  setInterval(tick, 700);

  // risk gauge animation (arc length ~= 282.7 for r=90 semicircle)
  const gaugeArc = document.getElementById("gaugeArc");
  const gaugeValue = document.getElementById("gaugeValue");
  if (gaugeArc && gaugeValue) {
    const arcLength = 283;
    const targetScore = 72;
    let shown = 0;
    const anim = setInterval(() => {
      shown += 4;
      if (shown >= targetScore) {
        shown = targetScore;
        clearInterval(anim);
      }
      const offset = arcLength * (1 - shown / 100);
      gaugeArc.setAttribute("stroke-dashoffset", offset.toFixed(1));
      gaugeValue.textContent = shown;
    }, 30);
  }
})();
