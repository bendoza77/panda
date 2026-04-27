import { Suspense, lazy } from 'react'
import { Canvas } from '@react-three/fiber'
import { useViewport } from '@/hooks/useViewport'

const SceneManager = lazy(() => import('./SceneManager'))

export default function CanvasWrapper() {
  const { isMobile } = useViewport()
  return (
    <div className="absolute inset-0">
      <Canvas
        dpr={isMobile ? [1, 1.4] : [1, 2]}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: 'high-performance',
        }}
        camera={{ position: [0, 0, 6.2], fov: 42, near: 0.1, far: 100 }}
      >
        <Suspense fallback={null}>
          <SceneManager mobile={isMobile} />
        </Suspense>
      </Canvas>
    </div>
  )
}
