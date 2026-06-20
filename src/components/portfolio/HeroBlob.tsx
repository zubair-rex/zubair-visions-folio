import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

function Blob() {
  const meshRef = useRef<THREE.Mesh>(null);
  const groupRef = useRef<THREE.Group>(null);
  const target = useRef({ x: 0, y: 0 });

  const geometry = useMemo(() => new THREE.IcosahedronGeometry(1.5, 24), []);
  const basePositions = useMemo(() => {
    const arr = geometry.attributes.position.array as Float32Array;
    return new Float32Array(arr);
  }, [geometry]);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    const pos = geometry.attributes.position as THREE.BufferAttribute;
    const arr = pos.array as Float32Array;
    for (let i = 0; i < pos.count; i++) {
      const ix = i * 3;
      const ox = basePositions[ix];
      const oy = basePositions[ix + 1];
      const oz = basePositions[ix + 2];
      const len = Math.sqrt(ox * ox + oy * oy + oz * oz) || 1;
      const nx = ox / len, ny = oy / len, nz = oz / len;
      const n =
        Math.sin(nx * 2.4 + t * 0.55) *
        Math.cos(ny * 2.4 - t * 0.45) *
        Math.sin(nz * 2.4 + t * 0.35);
      const d = 1 + n * 0.16;
      arr[ix] = ox * d;
      arr[ix + 1] = oy * d;
      arr[ix + 2] = oz * d;
    }
    pos.needsUpdate = true;
    geometry.computeVertexNormals();

    const m = state.mouse;
    target.current.y = m.x * 0.45;
    target.current.x = m.y * 0.3;
    if (groupRef.current) {
      groupRef.current.rotation.y += (target.current.y + 0.0015 - groupRef.current.rotation.y) * 0.04;
      groupRef.current.rotation.x += (target.current.x - groupRef.current.rotation.x) * 0.04;
    }
  });

  return (
    <group ref={groupRef}>
      <mesh ref={meshRef} geometry={geometry}>
        <meshStandardMaterial
          color="#7C5CFF"
          emissive="#3a1f99"
          emissiveIntensity={0.25}
          roughness={0.22}
          metalness={0.55}
        />
      </mesh>
    </group>
  );
}

export function HeroBlob() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5.2], fov: 45 }}
      dpr={[1, 1.6]}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={0.4} />
      <pointLight position={[3, 2, 4]} intensity={2.4} color="#7C5CFF" distance={20} />
      <pointLight position={[-3, -2, 3]} intensity={1.0} color="#ffffff" distance={20} />
      <Blob />
    </Canvas>
  );
}
