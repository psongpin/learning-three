import type { NextPage } from 'next'
import Head from 'next/head'
import { Canvas } from '@react-three/fiber'
import { PerspectiveCamera } from '@react-three/drei'

const Box: React.FC = () => {
  return (
    <mesh>
      <boxGeometry args={[1, 1, 1]} />
      <meshBasicMaterial color="#ff0000" />
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
          <PerspectiveCamera
            makeDefault
            fov={75}
            aspect={800 / 600}
            position={[0, 0, 3]}
          />
          <Box />
        </Canvas>
      </div>
    </>
  )
}

export default BasicScene
