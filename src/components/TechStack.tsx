import * as THREE from "three";
import { useRef, useMemo, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import { EffectComposer, N8AO } from "@react-three/postprocessing";
import {
  BallCollider,
  Physics,
  RigidBody,
  CylinderCollider,
  RapierRigidBody,
} from "@react-three/rapier";

import "./styles/TechStack.css";

/* ================================
   3D CURSOR REPELLING BALLS
================================ */

const textureLoader = new THREE.TextureLoader();
const imageUrls = [
  "/images/react2.webp",
  "/images/next2.webp",
  "/images/node2.webp",
  "/images/express.webp",
  "/images/mongo.webp",
  "/images/mysql.webp",
  "/images/typescript.webp",
  "/images/javascript.webp",
];
const textures = imageUrls.map((url) => textureLoader.load(url));

const sphereGeometry = new THREE.SphereGeometry(1, 28, 28);

const spheres = [...Array(30)].map(() => ({
  scale: [1.0, 1.2, 1.1, 1.3, 1.3][Math.floor(Math.random() * 5)],
}));

type SphereProps = {
  vec?: THREE.Vector3;
  scale: number;
  r?: typeof THREE.MathUtils.randFloatSpread;
  material: THREE.MeshPhysicalMaterial;
  isActive: boolean;
};

function SphereGeo({
  vec = new THREE.Vector3(),
  scale,
  r = THREE.MathUtils.randFloatSpread,
  material,
  isActive,
}: SphereProps) {
  const api = useRef<RapierRigidBody | null>(null);

  useFrame((_state, delta) => {
    if (!isActive) return;

    delta = Math.min(0.1, delta);

    const impulse = vec
      .copy(api.current!.translation())
      .normalize()
      .multiply(
        new THREE.Vector3(
          -50 * delta * scale,
          -150 * delta * scale,
          -50 * delta * scale
        )
      );

    api.current?.applyImpulse(impulse, true);
  });

  return (
    <RigidBody
      linearDamping={0.75}
      angularDamping={0.15}
      friction={0.2}
      position={[r(20), r(20) - 25, r(20) - 10]}
      ref={api}
      colliders={false}
    >
      <BallCollider args={[scale]} />

      <CylinderCollider
        rotation={[Math.PI / 2, 0, 0]}
        position={[0, 0, 1.2 * scale]}
        args={[0.15 * scale, 0.275 * scale]}
      />

      <mesh
        castShadow
        receiveShadow
        scale={scale}
        geometry={sphereGeometry}
        material={material}
        rotation={[0.3, 1, 1]}
      />
    </RigidBody>
  );
}

type PointerProps = {
  vec?: THREE.Vector3;
  isActive: boolean;
};

function Pointer({ vec = new THREE.Vector3(), isActive }: PointerProps) {
  const ref = useRef<RapierRigidBody>(null);

  useFrame(({ pointer, viewport }) => {
    if (!isActive) return;

    const targetVec = vec.lerp(
      new THREE.Vector3(
        (pointer.x * viewport.width) / 2,
        (pointer.y * viewport.height) / 2,
        0
      ),
      0.2
    );

    ref.current?.setNextKinematicTranslation(targetVec);
  });

  return (
    <RigidBody
      position={[100, 100, 100]}
      type="kinematicPosition"
      colliders={false}
      ref={ref}
    >
      <BallCollider args={[2]} />
    </RigidBody>
  );
}

/* ================================
   INFINITE TECH STACK MARQUEE
================================ */

const techCategories = [
  {
    label: "AI ENGINEERING",
    items: [
      { name: "LangChain", icon: "🔗" },
      { name: "LangGraph", icon: "⚙️" },
      { name: "FAISS", icon: "📦" },
      { name: "Ollama", icon: "🧠" },
      { name: "OpenRouter", icon: "🌐" }
    ],
  },
  {
    label: "MACHINE LEARNING",
    items: [
      { name: "Python", icon: "🐍" },
      { name: "NumPy", icon: "🔢" },
      { name: "Pandas", icon: "🐼" },
      { name: "Scikit-learn", icon: "🤖" },
    ],
  },
  {
    label: "AUTOMATION",
    items: [
      { name: "n8n", icon: "⚡" },
      { name: "REST APIs", icon: "🔌" },
    ],
  },
  {
    label: "COMPUTER VISION",
    items: [
      { name: "OpenCV", icon: "👁️" },
      { name: "YOLO", icon: "🎯" },
    ],
  },
  {
    label: "CLOUD & DATA",
    items: [
      { name: "AWS", icon: "☁️" },
      { name: "SQL", icon: "🗄️" },
    ],
  },
  {
    label: "DEVELOPER TOOLS",
    items: [
      { name: "Git", icon: "🐙" },
      { name: "GitHub", icon: "🐙" },
      { name: "VS Code", icon: "🛠️" },
    ],
  },
  {
    label: "FRONTEND",
    items: [
      { name: "HTML", icon: "🌐" },
      { name: "CSS", icon: "🎨" },
      { name: "JavaScript", icon: "⚡" },
      { name: "Streamlit", icon: "📊" },
    ],
  },
];

const allItems = techCategories.flatMap((cat) =>
  cat.items.map((item) => ({
    category: cat.label,
    name: item.name,
    icon: item.icon
  }))
);

const loopItems = [...allItems, ...allItems];

/* ================================
   MAIN COMPONENT
================================ */

const TechStack = () => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;

      const threshold = document
        .getElementById("work")!
        .getBoundingClientRect().top;

      setIsActive(scrollY > threshold);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const materials = useMemo(() => {
    return textures.map(
      (texture) =>
        new THREE.MeshPhysicalMaterial({
          map: texture,
          emissive: "#ffffff",
          emissiveMap: texture,
          emissiveIntensity: 0.3,
          metalness: 0.5,
          roughness: 1,
          clearcoat: 0.1,
        })
    );
  }, []);

  return (
    <section id="techstack" className="techstack">
      <h2 className="techstack-title">
        My <span>Techstack</span>
      </h2>

      {/* 3D BALL ANIMATION */}
      <div className="techstack-canvas-wrapper">
        <Canvas
          shadows
          camera={{ position: [0, 0, 20], fov: 32.5 }}
          className="tech-canvas"
        >
          <ambientLight intensity={1} />

          <spotLight
            position={[20, 20, 25]}
            penumbra={1}
            angle={0.2}
            color="white"
            castShadow
          />

          <directionalLight position={[0, 5, -4]} intensity={2} />

          <Physics gravity={[0, 0, 0]}>
            <Pointer isActive={isActive} />

            {spheres.map((props, i) => (
              <SphereGeo
                key={i}
                {...props}
                material={materials[Math.floor(Math.random() * materials.length)]}
                isActive={isActive}
              />
            ))}
          </Physics>

          <Environment
            files="/models/char_enviorment.hdr"
            environmentIntensity={0.5}
            environmentRotation={[0, 4, 2]}
          />

          <EffectComposer enableNormalPass={false}>
            <N8AO color="#0f002c" aoRadius={2} intensity={1.15} />
          </EffectComposer>
        </Canvas>
      </div>

      {/* INFINITE MARQUEE */}
      <div className="techstack-marquee-wrapper">
        <div className="techstack-marquee">
          <div className="techstack-marquee-track">
            {loopItems.map((item, i) => (
              <div className="techstack-pill-float" key={i} style={{ animationDelay: `${(i % 5) * 0.4}s` }}>
                <div className="techstack-pill">
                  <span className="techstack-pill-icon">{item.icon}</span>
                  <span className="techstack-pill-category">{item.category}</span>
                  <span className="techstack-pill-name">{item.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;