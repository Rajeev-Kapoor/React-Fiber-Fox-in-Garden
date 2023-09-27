import { Stats, OrbitControls, Sphere, Environment } from '@react-three/drei'
import { Canvas, useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

export default function App() {
  
  const gltf = useLoader(GLTFLoader, './models/CatSketchfabExportfbx.glb')


  return (
    <Canvas camera={{ position: [30, 50, 10] }} >
      <directionalLight position={[3.3,1 , 4.4]} intensity={1}   />
      <Environment files ='./img/meadow_1k.hdr' background blur={0}/>
      <primitive
        object={gltf.scene}
                position={[-0, -0, -0]}
        />
        

      {/* <Sphere args={[10]} rotation-x={Math.PI / 2} receiveShadow></Sphere> */}
      <OrbitControls target={[0, 1, 0]} autoRotate />
      <axesHelper args={[5]} />
      <Stats />
    </Canvas>
  )
}

