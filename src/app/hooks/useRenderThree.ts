import { useEffect, useRef } from "react";
import * as Three from "three";
import { GLTFLoader } from "three/examples/jsm/Addons.js";
import { OrbitControls } from "three/examples/jsm/Addons.js";

export const useRenderThree = (source: string, screen: string) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const modelRef = useRef<Three.Object3D | null>(null);
  const isPausedRef = useRef(false);
  const pivotRef = useRef<Three.Group | null>(null);
  const outOfViewRef = useRef(false);

  useEffect(() => {
    if (!containerRef.current) return;
    const cleanupRef = containerRef.current;
    const width = containerRef.current.clientWidth;
    const height = containerRef.current.clientHeight;

    // SCENE SET UP

    const scene = new Three.Scene();
    const pivot = new Three.Group();
    pivot.name = "PivotGroup";
    scene.add(pivot);
    pivotRef.current = pivot;

    const camera = new Three.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.set(0.0, 0.08, 45); // Move the camera so it's in front of the model

    const renderer = new Three.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    containerRef.current.appendChild(renderer.domElement);
    renderer.shadowMap.enabled = true;

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.target.set(0, 0, 0);
    controls.update();

    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = Three.PCFSoftShadowMap;

    // LIGHTING
    const ambientLight = new Three.AmbientLight(0xffffff, 0.2);
    scene.add(ambientLight);

    const keyLight = new Three.DirectionalLight(0xfff2e5, 2.0);
    keyLight.position.set(5, 10, 7.5);
    keyLight.castShadow = true;
    keyLight.shadow.bias = -0.003;
    keyLight.shadow.mapSize.width = 2048;
    keyLight.shadow.mapSize.height = 2048;
    scene.add(keyLight);

    const fillLight = new Three.DirectionalLight(0xabcdef, 0.7);
    fillLight.position.set(-5, 5, 5);
    fillLight.castShadow = false;
    scene.add(fillLight);

    const rimLight = new Three.DirectionalLight(0xfff2e5, 1.0);
    rimLight.position.set(-5, 8, -8);
    scene.add(rimLight);

    const spotLight = new Three.SpotLight(
      0xffffff,
      1.5,
      0,
      Math.PI / 8,
      0.25,
      1
    );
    spotLight.position.set(0, 8, 10);
    spotLight.castShadow = true;
    spotLight.shadow.mapSize.width = 1024;
    spotLight.shadow.mapSize.height = 1024;
    scene.add(spotLight);

    // LOADING
    const loader = new GLTFLoader();
    loader.load(source, (gltf) => {
      const model = gltf.scene;
      modelRef.current = model;
      const box = new Three.Box3().setFromObject(model);
      const center = new Three.Vector3();
      box.getCenter(center);

      model.position.sub(center);
      pivot.add(model);

      const textureLoader = new Three.TextureLoader();
      textureLoader.load(screen, (texture) => {
        model.traverse((child) => {
          if (child instanceof Three.Mesh && child.name === "Object_123") {
            const mesh = child;
            mesh.material = new Three.MeshBasicMaterial({
              map: texture,
            });
            mesh.material.needsUpdate = true;
          }
        });
      });
    });

    // ANIMATION
    let frameId: number | null = null;

    const handleMouseDown = () => {
      isPausedRef.current = true;
    };

    const handleMouseUp = () => {
      isPausedRef.current = false;
    };

    function animate() {
      if (outOfViewRef.current) return;
      frameId = requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
      if (pivotRef.current) {
        if (isPausedRef.current) return;
        pivotRef.current.rotation.y += 0.0005;
      }
    }
    animate();

    containerRef.current.addEventListener("mousedown", handleMouseDown);
    containerRef.current.addEventListener("mouseup", handleMouseUp);
    containerRef.current.addEventListener("mouseleave", handleMouseUp);

    // OFF SCREEN DETECTION
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          outOfViewRef.current = false;
          if (frameId === null) animate();
        } else {
          outOfViewRef.current = true;
          if (frameId !== null) {
            cancelAnimationFrame(frameId);
            frameId = null;
          }
        }
      });
    });
    observer.observe(containerRef.current);

    // CLEANUP
    return () => {
      if (frameId !== null) cancelAnimationFrame(frameId);
      if (controls && controls.dispose) controls.dispose();
      if (renderer && renderer.dispose) renderer.dispose();
      if (cleanupRef && renderer.domElement.parentNode === cleanupRef) {
        cleanupRef.removeChild(renderer.domElement);
      }
      observer.disconnect();

      cleanupRef.removeEventListener("mousedown", handleMouseDown);
      cleanupRef.removeEventListener("mouseup", handleMouseUp);
      cleanupRef.removeEventListener("mouseleave", handleMouseUp);
    };
  }, [source, screen]);

  return { containerRef };
};
