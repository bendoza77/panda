import { useRef } from 'react'
import { Float } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

function Plane({ position, color = '#fff1d6', scale = 1 }) {
  const ref = useRef(null)
  useFrame(({ clock }) => {
    if (!ref.current) return
    const t = clock.getElapsedTime()
    ref.current.rotation.y = t * 0.4
  })
  return (
    <Float speed={1.2} rotationIntensity={0.4} floatIntensity={0.6}>
      <group ref={ref} position={position} scale={scale}>
        {/* fuselage */}
        <mesh>
          <capsuleGeometry args={[0.05, 0.45, 4, 8]} />
          <meshStandardMaterial color={color} metalness={0.4} roughness={0.4} />
        </mesh>
        {/* wing */}
        <mesh rotation={[0, 0, Math.PI / 2]}>
          <boxGeometry args={[0.02, 0.6, 0.12]} />
          <meshStandardMaterial color={color} metalness={0.4} roughness={0.4} />
        </mesh>
        {/* tail */}
        <mesh position={[0, 0.28, 0]} rotation={[0, 0, Math.PI / 2]}>
          <boxGeometry args={[0.02, 0.18, 0.06]} />
          <meshStandardMaterial color={color} metalness={0.4} roughness={0.4} />
        </mesh>
      </group>
    </Float>
  )
}

function Cloud({ position, scale = 1 }) {
  return (
    <Float speed={0.6} rotationIntensity={0.2} floatIntensity={0.8}>
      <group position={position} scale={scale}>
        {[
          [0, 0, 0, 0.5],
          [0.4, 0.05, 0, 0.35],
          [-0.35, 0.08, 0.05, 0.4],
          [0.15, 0.18, -0.05, 0.3],
        ].map(([x, y, z, r], i) => (
          <mesh key={i} position={[x, y, z]}>
            <sphereGeometry args={[r, 16, 16]} />
            <meshStandardMaterial
              color="#f4ede0"
              roughness={1}
              transparent
              opacity={0.55}
              emissive="#f4ede0"
              emissiveIntensity={0.05}
            />
          </mesh>
        ))}
      </group>
    </Float>
  )
}

export default function FloatingObjects() {
  return (
    <group>
      <Plane position={[2.4, 0.6, 1.2]} scale={1.1} color="#FF7A00" />
      <Plane position={[-2.6, -0.3, 0.8]} scale={0.9} color="#fff1d6" />
      <Plane position={[1.8, -1, -1.5]} scale={0.8} color="#7fb89c" />
      <Cloud position={[-2, 1.2, 1]} scale={0.9} />
      <Cloud position={[2.3, -0.6, -1]} scale={1.1} />
      <Cloud position={[0, 1.8, -1.5]} scale={0.7} />
    </group>
  )
}
