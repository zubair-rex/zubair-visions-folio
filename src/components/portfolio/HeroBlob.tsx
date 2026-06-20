import { Canvas, useFrame } from "@react-three/fiber";
import { MeshDistortMaterial, Icosahedron, Environment } from "@react-three/drei";
import { useRef } from "react";
import type { Mesh } from "three";

function Blob() {
  const ref = useRef<Mesh>(null);
  const target = useRef({ x: 0, y: 0 });

  useFrame((state, delta) => {
    const m = state.mouse;
    target.current.x = m.y * 0.3;
    target.current.y = m.x * 0.4;
    if (!ref.current) return;
    ref.current.rotation.x += (target.current.x - ref.current.rotation.x) * 0.04;
    ref.current.rotation.y += (target.current.y + state.clock.elapsedTime * 0.05 - ref.current.rotation.y) * 0.04;
  });

  return (
    <Icosahedron ref={ref} args={[1.5, 12]} position={[0, 0, 0]}>
      <MeshDistortMaterial
        color="#7C5CFF"
        emissive="#3a1f99"
        emissiveIntensity={0.35}
        roughness={0.15}
        metalness={0.4}
        distort={0.45}
        speed={1.3}
      />
    </Icosahedron>
  );
}

export function HeroBlob() {
  return (
    <Canvas
      camera={{ position: [0, 0, 4], fov: 45 }}
      dpr={[1, 1.6]}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={0.4} />
      <directionalLight position={[3, 3, 5]} intensity={1.2} color="#b8a4ff" />
      <directionalLight position={[-4, -2, -2]} intensity={0.4} color="#5b3ee0" />
      <Blob />
      <Environment preset="city" />
    </Canvas>
  );
}
