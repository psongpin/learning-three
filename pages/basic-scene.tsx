import { useRef } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import { Canvas, MeshProps, useFrame } from '@react-three/fiber'
import { PerspectiveCamera } from '@react-three/drei'
import { Mesh } from 'three'

type BoxProps = MeshProps & {
  color: string
}

const Box: React.FC<BoxProps> = ({ color, ...props }) => {
  const meshRef = useRef<Mesh>()

  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = clock.getElapsedTime()
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

      <div style={{ height: '100vh' }}>
        <Canvas>
          <PerspectiveCamera makeDefault fov={75} position={[0, 0, 3]} />

          <Box color="red" position={[0, 0, 0]} />
        </Canvas>
      </div>
    </>
  )
}

export default BasicScene
