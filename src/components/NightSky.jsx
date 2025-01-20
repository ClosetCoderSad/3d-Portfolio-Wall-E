import { OrbitControls, Stars } from "@react-three/drei";

export default function NightSky() {
  return (
    <>
      <color attach="background" args={["#000000"]} />
      <Stars radius={250} depth={50} count={5000} factor={4} saturation={0} />
      <OrbitControls enableZoom={false} />
    </>
  );
}
