import { Canvas, useFrame } from "@react-three/fiber";
import {
  Sky,
  Sphere,
  MeshDistortMaterial,
  Html,
  RoundedBox,
  OrbitControls,
} from "@react-three/drei";
import { useRef } from "react";

function Bola({ position, color, radius }) {
  const sphere = useRef();

  useFrame(() => {});

  return (
    <mesh>
      <Sphere ref={sphere} args={[radius, 200, 200]} position={position}>
        <MeshDistortMaterial
          attach='material'
          distort={0.4}
          speed={1.4}
          roughness={0.8}
          color={color}
        />
      </Sphere>
    </mesh>
  );
}

function Cubo({ position, color, size, radius, move }) {
  const cube = useRef();

  if (move === true) {
    useFrame(
      () => (
        (cube.current.rotation.x += 0.006), (cube.current.rotation.y += 0.006)
      )
    );
  } else {
    move === false;
  }

  return (
    <mesh>
      <RoundedBox
        ref={cube}
        args={size}
        position={position}
        radius={radius}
        smoothness={4}
      >
        <meshPhongMaterial color={color} />
      </RoundedBox>
    </mesh>
  );
}

function Movin() {
  const movin = useRef();

  useFrame(
    () => (
      (movin.current.rotation.x += 0.006), (movin.current.rotation.z += 0.01)
    )
  );
  return (
    <mesh ref={movin}>
      <Bola position={[9, 12, -6]} color='hotpink' radius={1.5} />
      <Bola position={[-5, -5, -5]} color='brown' radius={1.2} />
      <Bola position={[5, 5, 5]} color='hotpink' radius={1.2} />
    </mesh>
  );
}

function HtmlContent({ position, classes, children }) {
  return (
    <Html
      as='section'
      wrapperClass={classes}
      position={position}
      distanceFactor={1}
    >
      {children}
    </Html>
  );
}

// Cena 3d

function ThreeScene() {
  return (
    <Canvas camera={{ fov: 50 }}>
      <Sky />
      <OrbitControls enableZoom={false} />
      <pointLight intensity={1} position={[-5, 5, -5]} />
      <ambientLight intensity={0.5} />
      <Bola position={[0, -2, -3]} color='green' />
      <Bola position={[-2, 0, 1]} color='red' />
      <Cubo
        position={[2.3, -0.7, 1]}
        size={[1, 1, 1]}
        color='pink'
        radius={0.01}
        move
      />
      {/* Banner Explicativo */}
      <HtmlContent position={[-0.6, 0.3, 3]}>
        <div className='h-[600px] w-[1000px] flex items-center justify-center bg-white rounded-xl backdrop-blur-xl bg-opacity-50 px-5'>
          <p className='text-4xl'>
            Hello,
            <br />
            <br /> in this section just some primitive shapes movin' around.
            <br /> from drei.
          </p>
        </div>
      </HtmlContent>
      <Bola radius={1.4} position={[4, 3, -5]} color='black' />
      <Movin />

      {/* moving around shapes */}
    </Canvas>
  );
}

export default function Scene1() {
  return (
    <section className='h-screen'>
      <ThreeScene />
    </section>
  );
}
