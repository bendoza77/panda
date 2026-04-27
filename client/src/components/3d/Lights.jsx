import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'

export default function Lights() {
  const key = useRef(null)
  const rim = useRef(null)

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime()
    if (key.current) {
      key.current.position.x = Math.sin(t * 0.18) * 6
      key.current.position.z = Math.cos(t * 0.18) * 6
    }
    if (rim.current) {
      rim.current.intensity = 1.2 + Math.sin(t * 0.6) * 0.15
    }
  })

  return (
    <>
      <ambientLight intensity={0.18} color="#cfe6d8" />
      <directionalLight
        ref={key}
        position={[5, 4, 5]}
        intensity={1.6}
        color="#fff1d6"
      />
      <pointLight
        ref={rim}
        position={[-6, -2, -4]}
        intensity={1.2}
        color="#ff7a00"
      />
      <pointLight position={[0, 6, 0]} intensity={0.4} color="#7fb89c" />
    </>
  )
}
