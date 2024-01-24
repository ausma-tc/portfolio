'use client'
import React, { useState, useEffect, useRef } from "react";
import { useFooterHover } from '../../app/providers/mouseContext';

function FlareCursor() {
  const { isHoveringFooter } = useFooterHover();
  const [isPointer, setIsPointer] = useState(false);
  const lerpFactor = 0.3;
  const position = useRef({ x: 0, y: 0 });
  const targetPosition = useRef({ x: 0, y: 0 });
  const animationFrameId = useRef();

  const handleMouseMove = (e) => {
    // Mise à jour directe de la référence sans causer de re-render
    targetPosition.current = { x: e.clientX, y: e.clientY };
    const target = e.target;
    setIsPointer(
      window.getComputedStyle(target).getPropertyValue("cursor") === "pointer"
    );
  };

  const updatePosition = () => {
    const targetX = targetPosition.current.x;
    const targetY = targetPosition.current.y;
    
    // Inclus le lerp (interpolation linéaire) ici pour un mouvement fluide
    position.current.x += (targetX - position.current.x) * lerpFactor;
    position.current.y += (targetY - position.current.y) * lerpFactor;
  
    // Vérifiez que l'élément existe avant de définir sa propriété 'transform'
    if (flareEl.current) {
      // Appliquez le décalage pour centrer le curseur
      const offsetX = -flareEl.current.clientWidth / 2;
      const offsetY = -flareEl.current.clientHeight / 2;
  
      // Mettez à jour le style transform avec compte tenu du décalage
      flareEl.current.style.transform = `translate3d(${position.current.x + offsetX}px, ${position.current.y + offsetY}px, 0)`;
    }
  };

  useEffect(() => {
    const moveFlare = () => {
      updatePosition();
      // Continuer l'animation au prochain rafraîchissement d'écran
      animationFrameId.current = requestAnimationFrame(moveFlare);
    };

    // Démarrer la boucle d'animation
    moveFlare();
    window.addEventListener("mousemove", handleMouseMove);
    
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, []); // Pas de dépendances - s'exécute une seule fois

  const flareSize = isPointer ? 0 : 30;
  const flareEl = useRef(null);

  return (
    <div
      ref={flareEl}
      className={`flare ${isPointer ? " pointer" : ""}`}
      style={{
        width: `${flareSize}px`,
        height: `${flareSize}px`,
        position: 'fixed',
        willChange: 'transform', // Indique au navigateur de préparer les optimisations GPU
        pointerEvents: 'none', // Empêche la div d'intercepter les événements de la souris
        background: `${isHoveringFooter ? '#110F52' : '#26a8df'}`,
      }}
    />
  );
}

export default FlareCursor;