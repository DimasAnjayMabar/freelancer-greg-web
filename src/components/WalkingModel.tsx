import React, { useRef, useEffect } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';
import { Group, Box3, Vector3 } from 'three';

interface WalkingModelProps {
  scale?: number;
}

const WalkingModel: React.FC<WalkingModelProps> = ({ scale = 1 }) => {
  const group = useRef<Group>(null);
  const { scene, animations } = useGLTF('/models/walking_downstairs.glb');
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    // Memutar animasi jika tersedia
    if (actions && Object.keys(actions).length > 0) {
      const actionName = Object.keys(actions)[0];
      const action = actions[actionName];
      if (action) {
        action.play();
        // Set waktu animasi jika perlu
        // action.timeScale = 1.0; // Kecepatan animasi
      }
    }

    // Center the model
    if (group.current) {
      // Hitung bounding box untuk memusatkan model
      const box = new Box3().setFromObject(group.current);
      const center = box.getCenter(new Vector3());
      const size = box.getSize(new Vector3());
      
      // Pusatkan model
      group.current.position.x = -center.x;
      group.current.position.y = -center.y;
      group.current.position.z = -center.z;
      
      console.log('Model size:', size);
      console.log('Model center:', center);
    }
  }, [actions]);

  return (
    <group ref={group} scale={[scale, scale, scale]}>
      <primitive object={scene} />
    </group>
  );
};

export default WalkingModel;