import { useRef } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'
import { useUIStore } from '@/store/useUIStore'

const target = new THREE.Vector3()
const desired = new THREE.Vector3()

export default function CameraRig() {
  const { camera, mouse } = useThree()
  const progress = useUIStore((s) => s.sceneProgress)
  const ref = useRef({ x: 0, y: 0 })

  useFrame(() => {
    // base camera distance pulls in as scroll progresses
    const z = THREE.MathUtils.lerp(6.2, 3.6, progress)
    const y = THREE.MathUtils.lerp(0, -1.2, progress)

    // soft mouse parallax
    ref.current.x += (mouse.x * 0.6 - ref.current.x) * 0.05
    ref.current.y += (mouse.y * 0.4 - ref.current.y) * 0.05

    desired.set(ref.current.x, y + ref.current.y, z)
    camera.position.lerp(desired, 0.08)
    target.set(0, 0, 0)
    camera.lookAt(target)
  })

  return null
}
