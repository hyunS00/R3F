import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";

function MyElement3D_1() {
  const refMesh = useRef();

  useFrame((state, delta) => {
    refMesh.current.rotation.z += delta;
  });

  return (
    <>
      <directionalLight position={[1, 1, 1]} />

      <axesHelper scale={10} />
      <OrbitControls />

      <mesh
        ref={refMesh}
        position-y={2}
        rotation-z={THREE.MathUtils.degToRad(45)}
        scale={[2, 1, 1]}
      >
        <boxGeometry />
        <meshStandardMaterial
          color="#e67e22"
          opacity={0.5}
          transparent={true}
        />
        <axesHelper />

        <mesh scale={[0.1, 0.1, 0.1]} position-y={2}>
          <sphereGeometry />
          <meshStandardMaterial color="red" />
          <axesHelper scale={5} />
        </mesh>
      </mesh>
    </>
  );
}

export default MyElement3D_1;