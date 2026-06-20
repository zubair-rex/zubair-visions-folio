import { useEffect, useState } from "react";

export function useIsMobileOrLowPower() {
  const [low, setLow] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 768px)");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    const cores = (navigator as Navigator & { hardwareConcurrency?: number }).hardwareConcurrency ?? 8;
    const decide = () => setLow(mq.matches || reduced.matches || cores <= 4);
    decide();
    mq.addEventListener("change", decide);
    reduced.addEventListener("change", decide);
    return () => {
      mq.removeEventListener("change", decide);
      reduced.removeEventListener("change", decide);
    };
  }, []);
  return low;
}
