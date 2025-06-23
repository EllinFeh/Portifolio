"use client";
import React from 'react';
import Spline from '@splinetool/react-spline'; // O pacote já inclui tipos

interface MySplineSceneProps {
  sceneUrl: string;

}

const MySplineScene: React.FC<MySplineSceneProps> = ({ sceneUrl }) => {
  const handleLoad = (spline: any) => { // 'spline' é o objeto da aplicação Spline
    console.log('Cena Spline carregada!', spline);

  };

  return (
    <div style={{ height: '380px', width: '340px' }}> 
      <Spline
        scene={sceneUrl}
        onLoad={handleLoad} 
      />
    </div>
  );
};
180.04
const My3dItem: React.FC = () => {
  const mySplineSceneUrl = "https://prod.spline.design/rJX62ujsRpAucghs/scene.splinecode";

  return (
    <div>
      <MySplineScene sceneUrl={mySplineSceneUrl} />
    </div>
  );
};

export default My3dItem; 