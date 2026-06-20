export function LiquidBackdrop() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div
        className="liquid-blob"
        style={{
          width: 600, height: 600, top: "-8%", left: "-10%",
          background: "radial-gradient(circle, rgba(124,92,255,0.28) 0%, transparent 70%)",
          animationDelay: "0s",
        }}
      />
      <div
        className="liquid-blob"
        style={{
          width: 480, height: 480, top: "30%", right: "-8%",
          background: "radial-gradient(circle, rgba(167,139,250,0.22) 0%, transparent 70%)",
          animationDelay: "-4s",
        }}
      />
      <div
        className="liquid-blob"
        style={{
          width: 380, height: 380, bottom: "8%", left: "20%",
          background: "radial-gradient(circle, rgba(201,187,255,0.18) 0%, transparent 70%)",
          animationDelay: "-8s",
        }}
      />
      <div
        className="liquid-blob"
        style={{
          width: 520, height: 520, bottom: "-10%", right: "10%",
          background: "radial-gradient(circle, rgba(124,92,255,0.18) 0%, transparent 70%)",
          animationDelay: "-11s",
        }}
      />
    </div>
  );
}
