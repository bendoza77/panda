import { useEffect } from 'react'
import { Environment } from '@react-three/drei'
import Globe from './Globe'
import Particles from './Particles'
import Lights from './Lights'
import CameraRig from './CameraRig'
import FloatingObjects from './FloatingObjects'
import { useUIStore } from '@/store/useUIStore'

export default function SceneManager({ mobile = false }) {
  const setHeroReady = useUIStore((s) => s.setHeroReady)

  useEffect(() => {
    const t = setTimeout(() => setHeroReady(true), 320)
    return () => clearTimeout(t)
  }, [setHeroReady])

  return (
    <>
      <fog attach="fog" args={['#061d15', 7, 18]} />
      <color attach="background" args={['#000000']} />
      <Lights />
      <CameraRig />
      <Globe scale={mobile ? 0.85 : 1} />
      {!mobile && <FloatingObjects />}
      <Particles count={mobile ? 350 : 900} radius={9} />
      <Environment preset="sunset" environmentIntensity={0.35} background={false} />
    </>
  )
}
