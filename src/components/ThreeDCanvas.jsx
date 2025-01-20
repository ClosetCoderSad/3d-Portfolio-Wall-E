import { Environment, OrbitControls } from "@react-three/drei";
import { Mars } from "./Mars";
import { WallE } from "./WallE";
import { Canvas } from "@react-three/fiber";
import NightSky from "./NightSky";

export const ThreeDCanvas = () => {
  return (
    <>
      <Canvas shadows camera={{ position: [0, 2, 5], fov: 30 }}>
        <NightSky/>
        <OrbitControls enableZoom={false} />
        <group position-y={-1}>
          <Mars />
          <WallE />
        </group>
        <ambientLight intensity={0.5} />
        <directionalLight position={[2, 2, 2]} intensity={0.5} castShadow />
        <Environment preset="sunset" />
      </Canvas>
    </>
  );
};
