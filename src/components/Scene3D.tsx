"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, OrbitControls } from "@react-three/drei";
import * as THREE from "three";

function VoxelGrid() {
  const groupRef = useRef<THREE.Group>(null);

  const voxels = useMemo(() => {
    const positions: [number, number, number][] = [];
    const size = 4;
    for (let x = -size; x <= size; x++) {
      for (let y = -size; y <= size; y++) {
        for (let z = -size; z <= size; z++) {
          const dist = Math.sqrt(x * x + y * y + z * z);
          if (dist < size && dist > size - 2 && Math.random() > 0.5) {
            positions.push([x * 0.35, y * 0.35, z * 0.35]);
          }
        }
      }
    }
    return positions;
  }, []);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.1;
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.05) * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      {voxels.map((pos, i) => (
        <mesh key={i} position={pos}>
          <boxGeometry args={[0.25, 0.25, 0.25]} />
          <meshStandardMaterial
            color={i % 3 === 0 ? "#00f0ff" : i % 3 === 1 ? "#39ff14" : "#4d7cff"}
            emissive={i % 3 === 0 ? "#00f0ff" : i % 3 === 1 ? "#39ff14" : "#4d7cff"}
            emissiveIntensity={0.5}
            transparent
            opacity={0.7}
          />
        </mesh>
      ))}
    </group>
  );
}

function MoleculeStructure() {
  const groupRef = useRef<THREE.Group>(null);

  const atoms = useMemo(() => {
    const positions: { pos: [number, number, number]; radius: number; color: string }[] = [];
    for (let i = 0; i < 12; i++) {
      const angle = (i / 12) * Math.PI * 2;
      const radius = 1.5 + Math.sin(i * 0.8) * 0.5;
      positions.push({
        pos: [
          Math.cos(angle) * radius,
          Math.sin(angle) * 0.8,
          Math.sin(angle) * radius,
        ],
        radius: 0.1 + Math.random() * 0.15,
        color: i % 2 === 0 ? "#00f0ff" : "#39ff14",
      });
    }
    return positions;
  }, []);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = -state.clock.elapsedTime * 0.15;
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.2;
    }
  });

  return (
    <group ref={groupRef} position={[2, 0, 0]}>
      {atoms.map((atom, i) => (
        <Float key={i} speed={2} rotationIntensity={0.2} floatIntensity={0.3}>
          <mesh position={atom.pos}>
            <sphereGeometry args={[atom.radius, 16, 16]} />
            <meshStandardMaterial
              color={atom.color}
              emissive={atom.color}
              emissiveIntensity={0.8}
              transparent
              opacity={0.9}
            />
          </mesh>
        </Float>
      ))}
      {atoms.map((atom, i) => {
        const next = atoms[(i + 1) % atoms.length];
        const start = new THREE.Vector3(...atom.pos);
        const end = new THREE.Vector3(...next.pos);
        const mid = start.clone().add(end).multiplyScalar(0.5);
        const length = start.distanceTo(end);
        const direction = end.clone().sub(start).normalize();
        const quaternion = new THREE.Quaternion().setFromUnitVectors(
          new THREE.Vector3(0, 1, 0),
          direction
        );

        return (
          <mesh
            key={`bond-${i}`}
            position={[mid.x, mid.y, mid.z]}
            quaternion={quaternion}
          >
            <cylinderGeometry args={[0.02, 0.02, length, 8]} />
            <meshStandardMaterial
              color="#4d7cff"
              emissive="#4d7cff"
              emissiveIntensity={0.4}
              transparent
              opacity={0.5}
            />
          </mesh>
        );
      })}
    </group>
  );
}

function ParticleField() {
  const pointsRef = useRef<THREE.Points>(null);
  const count = 500;

  const geometry = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count * 3; i++) {
      pos[i] = (Math.random() - 0.5) * 20;
    }
    geo.setAttribute("position", new THREE.BufferAttribute(pos, 3));
    return geo;
  }, []);

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.02;
    }
  });

  return (
    <points ref={pointsRef} geometry={geometry}>
      <pointsMaterial
        size={0.03}
        color="#00f0ff"
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
}

export default function Scene3D() {
  return (
    <div className="absolute inset-0 w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 7], fov: 60 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#00f0ff" />
        <pointLight position={[-10, -10, -5]} intensity={0.5} color="#39ff14" />
        <VoxelGrid />
        <MoleculeStructure />
        <ParticleField />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
          maxPolarAngle={Math.PI / 1.5}
          minPolarAngle={Math.PI / 3}
        />
      </Canvas>
    </div>
  );
}
