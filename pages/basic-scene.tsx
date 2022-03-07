import { useRef } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import { Canvas, MeshProps, useFrame } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera } from '@react-three/drei'
import * as THREE from 'three'
import CanvasWrapper from 'components/CanvasWrapper'

type BoxProps = MeshProps & {
  color: string
}

const Box: React.FC<BoxProps> = ({ color, ...props }) => {
  const meshRef = useRef<THREE.Mesh>()

  useFrame(({ camera, mouse }) => {
    if (meshRef.current) {
      camera.position.x = Math.sin(mouse.x * Math.PI * 2) * 3
      camera.position.z = Math.cos(mouse.x * Math.PI * 2) * 3
      camera.position.y = mouse.y * 5
      camera.lookAt(meshRef.current.position)
    }
  })

  return (
    <mesh {...props} ref={meshRef}>
      <boxGeometry args={[1, 1, 1]} />
      <meshBasicMaterial color={color} />
    </mesh>
  )
}

const BasicScene: NextPage = () => {
  return (
    <>
      <Head>
        <title>Basic Scene</title>
        <meta name="description" content="Basic Scene" />
      </Head>

      <CanvasWrapper>
        {typeof window !== 'undefined' ? (
          <Canvas dpr={Math.min(window.devicePixelRatio, 2)}>
            <PerspectiveCamera makeDefault fov={75} position={[0, 0, 3]} />
            <OrbitControls enableDamping />
            <Box color="red" position={[0, 0, 0]} />
          </Canvas>
        ) : null}
      </CanvasWrapper>
    </>
  )
}

export default BasicScene
