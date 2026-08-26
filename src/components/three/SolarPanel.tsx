import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Mesh } from 'three';
import { useGLTF } from '@react-three/drei';

interface SolarPanelProps {
  position: [number, number, number];
  rotation: [number, number, number];
  scale: number;
}

// This is a simplified placeholder for a solar panel model
// In a real implementation, you would import a proper GLTF model
const SolarPanel: React.FC<SolarPanelProps> = ({ position, rotation, scale }) => {
  const meshRef = useRef<Mesh>(null);
  
  useFrame((state) => {
    if (!meshRef.current) return;
    
    // Add subtle movement to the panel
    meshRef.current.rotation.y += 0.001;
    meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.05;
  });

  return (
    <group position={position} rotation={rotation} scale={scale}>
      {/* Main panel frame */}
      <mesh ref={meshRef}>
        <boxGeometry args={[4, 0.1, 3]} />
        <meshStandardMaterial color="#003F5C" />
      </mesh>
      
      {/* Panel cells */}
      <mesh position={[0, 0.1, 0]}>
        <boxGeometry args={[3.8, 0.05, 2.8]} />
        <meshStandardMaterial color="#1e3a8a" metalness={0.8} roughness={0.2} />
      </mesh>
      
      {/* Panel support */}
      <mesh position={[0, -0.5, -1]} rotation={[Math.PI / 4, 0, 0]}>
        <boxGeometry args={[0.2, 1, 0.2]} />
        <meshStandardMaterial color="#4b5563" />
      </mesh>
    </group>
  );
};

export default SolarPanel;