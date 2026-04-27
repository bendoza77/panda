import { useMemo, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { destinations } from '@/config/destinations'

function latLonToVec3(lat, lon, r) {
  const phi = (90 - lat) * (Math.PI / 180)
  const theta = (lon + 180) * (Math.PI / 180)
  return new THREE.Vector3(
    -r * Math.sin(phi) * Math.cos(theta),
    r * Math.cos(phi),
    r * Math.sin(phi) * Math.sin(theta)
  )
}

function Pin({ position, color }) {
  const ref = useRef(null)
  useFrame(({ clock }) => {
    if (!ref.current) return
    const t = clock.getElapsedTime()
    ref.current.scale.setScalar(1 + Math.sin(t * 2 + position.x) * 0.18)
  })
  return (
    <group position={position}>
      <mesh ref={ref}>
        <sphereGeometry args={[0.045, 16, 16]} />
        <meshBasicMaterial color={color} />
      </mesh>
      <mesh>
        <sphereGeometry args={[0.09, 16, 16]} />
        <meshBasicMaterial color={color} transparent opacity={0.18} />
      </mesh>
    </group>
  )
}

function Ring({ radius, tilt, speed = 0.3, color = '#FF7A00' }) {
  const ref = useRef(null)
  useFrame((_, dt) => {
    if (!ref.current) return
    ref.current.rotation.z += dt * speed
  })
  return (
    <mesh ref={ref} rotation={[tilt, 0, 0]}>
      <torusGeometry args={[radius, 0.005, 8, 128]} />
      <meshBasicMaterial color={color} transparent opacity={0.4} />
    </mesh>
  )
}

export default function Globe({ scale = 1, autoRotate = true }) {
  const group = useRef(null)
  const sphere = useRef(null)
  const radius = 1.6

  const pins = useMemo(
    () =>
      destinations.map((d) => ({
        ...d,
        pos: latLonToVec3(d.coords.lat, d.coords.lon, radius * 1.01),
      })),
    [radius]
  )

  const wireGeo = useMemo(() => new THREE.IcosahedronGeometry(radius * 1.02, 4), [radius])

  useFrame(({ clock, mouse }) => {
    if (!group.current) return
    const t = clock.getElapsedTime()
    if (autoRotate) {
      group.current.rotation.y = t * 0.08
    }
    // mouse parallax tilt
    group.current.rotation.x += (mouse.y * 0.25 - group.current.rotation.x) * 0.05
    if (sphere.current) {
      sphere.current.material.emissiveIntensity = 0.18 + Math.sin(t * 0.8) * 0.06
    }
  })

  return (
    <group ref={group} scale={scale}>
      {/* outer atmosphere */}
      <mesh>
        <sphereGeometry args={[radius * 1.18, 64, 64]} />
        <meshBasicMaterial
          color="#7fb89c"
          transparent
          opacity={0.06}
          side={THREE.BackSide}
          blending={THREE.AdditiveBlending}
        />
      </mesh>
      <mesh>
        <sphereGeometry args={[radius * 1.08, 64, 64]} />
        <meshBasicMaterial
          color="#FF7A00"
          transparent
          opacity={0.05}
          side={THREE.BackSide}
          blending={THREE.AdditiveBlending}
        />
      </mesh>

      {/* core sphere */}
      <mesh ref={sphere}>
        <sphereGeometry args={[radius, 64, 64]} />
        <meshStandardMaterial
          color="#0B3D2E"
          roughness={0.85}
          metalness={0.1}
          emissive="#1f5d40"
          emissiveIntensity={0.18}
        />
      </mesh>

      {/* wireframe overlay */}
      <mesh geometry={wireGeo}>
        <meshBasicMaterial color="#7fb89c" wireframe transparent opacity={0.18} />
      </mesh>

      {/* pins */}
      {pins.map((p) => (
        <Pin key={p.id} position={p.pos} color={p.color} />
      ))}

      {/* arcs / orbital rings */}
      <Ring radius={radius * 1.42} tilt={0.6} color="#FF7A00" />
      <Ring radius={radius * 1.62} tilt={-0.3} speed={-0.2} color="#7fb89c" />
    </group>
  )
}
