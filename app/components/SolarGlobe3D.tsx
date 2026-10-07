"use client";

import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";

export default function SolarGlobe3D() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isRevealed, setIsRevealed] = useState(false);
  const [activeMetricTab, setActiveMetricTab] = useState<"global" | "greenhub">("global");
  const [isLoaded, setIsLoaded] = useState(false);

  const isDraggingRef = useRef(false);
  const prevPointerRef = useRef({ x: 0, y: 0 });
  const velocityRef = useRef({ x: 0.004, y: 0 });
  const isAutoRotatingRef = useRef(true);
  const isRevealedRef = useRef(false);

  useEffect(() => {
    isRevealedRef.current = isRevealed;
  }, [isRevealed]);

  // Scroll Reveal Intersection Observer
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsRevealed(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Three.js 3D Sphere Scene (Lazy initialized on scroll reveal)
  useEffect(() => {
    if (!isRevealed) return;
    const container = containerRef.current;
    if (!container) return;

    const scene = new THREE.Scene();

    const getDimensions = () => {
      const w = container.clientWidth || 500;
      const h = container.clientHeight || 500;
      return { w, h };
    };

    let { w, h } = getDimensions();

    const camera = new THREE.PerspectiveCamera(40, w / h, 0.1, 1000);
    camera.position.set(0, 0, 4.3);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(w, h);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.3;
    container.innerHTML = "";
    container.appendChild(renderer.domElement);

    // Master Tilt Group (Earth's 23.4° Axial Tilt)
    const tiltGroup = new THREE.Group();
    tiltGroup.rotation.z = (23.4 * Math.PI) / 180;
    tiltGroup.rotation.x = 0.12;
    scene.add(tiltGroup);

    // Rotating Globe Group
    const globeGroup = new THREE.Group();
    globeGroup.scale.set(0.85, 0.85, 0.85); // Starts slightly smaller for blooming reveal
    tiltGroup.add(globeGroup);

    // Panoramic Texture
    const textureLoader = new THREE.TextureLoader();
    const earthRadius = 1.42;

    const earthTexture = textureLoader.load(
      "/solar-globe/earth-panoramic-texture.jpg",
      () => {
        setIsLoaded(true);
      }
    );
    earthTexture.colorSpace = THREE.SRGBColorSpace;
    earthTexture.wrapS = THREE.RepeatWrapping;
    earthTexture.wrapT = THREE.ClampToEdgeWrapping;

    // 1. Earth Sphere Mesh
    const earthGeometry = new THREE.SphereGeometry(earthRadius, 64, 64);
    const earthMaterial = new THREE.MeshStandardMaterial({
      map: earthTexture,
      roughness: 0.4,
      metalness: 0.2,
    });
    const earthMesh = new THREE.Mesh(earthGeometry, earthMaterial);
    globeGroup.add(earthMesh);

    // 2. Subtle Cloud Layer
    const cloudGeometry = new THREE.SphereGeometry(earthRadius * 1.008, 64, 64);
    const cloudCanvas = document.createElement("canvas");
    cloudCanvas.width = 1024;
    cloudCanvas.height = 512;
    const cctx = cloudCanvas.getContext("2d")!;
    cctx.clearRect(0, 0, 1024, 512);
    cctx.fillStyle = "rgba(255, 255, 255, 0.16)";
    for (let i = 0; i < 40; i++) {
      const cx = Math.random() * 1024;
      const cy = (0.2 + Math.random() * 0.6) * 512;
      cctx.beginPath();
      cctx.ellipse(cx, cy, 60 + Math.random() * 90, 12 + Math.random() * 18, 0, 0, Math.PI * 2);
      cctx.fill();
    }
    const cloudTexture = new THREE.CanvasTexture(cloudCanvas);
    cloudTexture.wrapS = THREE.RepeatWrapping;

    const cloudMaterial = new THREE.MeshStandardMaterial({
      map: cloudTexture,
      transparent: true,
      opacity: 0.35,
      blending: THREE.AdditiveBlending,
      roughness: 0.9,
    });
    const cloudMesh = new THREE.Mesh(cloudGeometry, cloudMaterial);
    globeGroup.add(cloudMesh);

    // 3. Green Hub Signature Neon Lime Atmosphere Rim Halo (#c8ff4a)
    const atmosphereGeometry = new THREE.SphereGeometry(earthRadius * 1.045, 48, 48);
    const atmosphereMaterial = new THREE.MeshStandardMaterial({
      color: new THREE.Color("#c8ff4a"),
      transparent: true,
      opacity: 0.22,
      blending: THREE.AdditiveBlending,
      side: THREE.BackSide,
      roughness: 0.1,
    });
    const atmosphereMesh = new THREE.Mesh(atmosphereGeometry, atmosphereMaterial);
    globeGroup.add(atmosphereMesh);

    // --- 4. LARGE PROMINENT 3D SOLAR PANEL ARRAYS ---
    function createLargeSolarPanelTexture(): THREE.CanvasTexture {
      const pCanvas = document.createElement("canvas");
      pCanvas.width = 512;
      pCanvas.height = 512;
      const pctx = pCanvas.getContext("2d")!;

      // Deep Photorealistic Solar Cell Silicon Blue
      const grad = pctx.createLinearGradient(0, 0, 512, 512);
      grad.addColorStop(0, "#081a36");
      grad.addColorStop(0.5, "#103260");
      grad.addColorStop(1, "#091c38");
      pctx.fillStyle = grad;
      pctx.fillRect(0, 0, 512, 512);

      // Aluminum Frame
      pctx.strokeStyle = "#cbd5e1";
      pctx.lineWidth = 14;
      pctx.strokeRect(7, 7, 498, 498);

      // Solar Wafers / Grid Lines (distinct white/cyan grid)
      pctx.strokeStyle = "rgba(186, 230, 253, 0.55)";
      pctx.lineWidth = 3;
      for (let x = 32; x < 500; x += 75) {
        pctx.beginPath();
        pctx.moveTo(x, 14);
        pctx.lineTo(x, 498);
        pctx.stroke();
      }
      for (let y = 32; y < 500; y += 50) {
        pctx.beginPath();
        pctx.moveTo(14, y);
        pctx.lineTo(498, y);
        pctx.stroke();
      }

      // Silver Multi-Busbars (High Efficiency Monocrystalline)
      pctx.strokeStyle = "#ffffff";
      pctx.lineWidth = 5;
      [110, 220, 330, 440].forEach((bx) => {
        pctx.beginPath();
        pctx.moveTo(bx, 14);
        pctx.lineTo(bx, 498);
        pctx.stroke();
      });

      // Glass Specular Sheen Diagonal Glint
      const glint = pctx.createLinearGradient(0, 0, 512, 512);
      glint.addColorStop(0.3, "rgba(255, 255, 255, 0)");
      glint.addColorStop(0.5, "rgba(200, 255, 74, 0.25)");
      glint.addColorStop(0.7, "rgba(255, 255, 255, 0)");
      pctx.fillStyle = glint;
      pctx.fillRect(0, 0, 512, 512);

      const pTexture = new THREE.CanvasTexture(pCanvas);
      pTexture.colorSpace = THREE.SRGBColorSpace;
      return pTexture;
    }

    const panelTexture = createLargeSolarPanelTexture();
    const panelWidth = 0.22;
    const panelHeight = 0.30;
    const panelGeometry = new THREE.BoxGeometry(panelWidth, panelHeight, 0.02);
    const panelMaterial = new THREE.MeshStandardMaterial({
      map: panelTexture,
      roughness: 0.16,
      metalness: 0.85,
    });

    // Strategic positions across globe for 360° visibility
    const panelSites: { lat: number; lon: number; scale?: number }[] = [
      // India & South Asia
      { lat: 21, lon: 78, scale: 1.05 },
      { lat: 10, lon: 76, scale: 0.95 },
      // Middle East & Africa
      { lat: 24, lon: 45, scale: 1.0 },
      { lat: 20, lon: 15, scale: 1.05 },
      { lat: -25, lon: 27, scale: 0.95 },
      { lat: 4, lon: 35, scale: 0.9 },
      // Europe
      { lat: 48, lon: 12, scale: 1.0 },
      { lat: 40, lon: -4, scale: 0.95 },
      // East & Central Asia
      { lat: 35, lon: 102, scale: 1.05 },
      { lat: 33, lon: 130, scale: 0.95 },
      { lat: 7, lon: 110, scale: 0.9 },
      // Australia
      { lat: -25, lon: 133, scale: 1.05 },
      { lat: -33, lon: 148, scale: 0.95 },
      // Americas (North & South)
      { lat: 37, lon: -110, scale: 1.05 },
      { lat: 41, lon: -78, scale: 1.0 },
      { lat: 20, lon: -100, scale: 0.95 },
      { lat: -15, lon: -50, scale: 1.05 },
      { lat: -28, lon: -65, scale: 0.95 },
      // Additional visible arrays
      { lat: 55, lon: 37, scale: 0.95 },
      { lat: -10, lon: -60, scale: 0.95 },
    ];

    panelSites.forEach(({ lat, lon, scale = 1 }) => {
      const phi = (90 - lat) * (Math.PI / 180);
      const theta = (lon + 180) * (Math.PI / 180);

      const surfaceR = earthRadius + 0.014;
      const x = -surfaceR * Math.sin(phi) * Math.cos(theta);
      const z = surfaceR * Math.sin(phi) * Math.sin(theta);
      const y = surfaceR * Math.cos(phi);

      const panelMesh = new THREE.Mesh(panelGeometry, panelMaterial);
      panelMesh.position.set(x, y, z);
      panelMesh.scale.set(scale, scale, scale);

      // Orient panel perpendicular to surface normal
      const normal = new THREE.Vector3(x, y, z).normalize();
      panelMesh.quaternion.setFromUnitVectors(new THREE.Vector3(0, 0, 1), normal);

      panelMesh.rotateZ((Math.random() - 0.5) * 0.35);
      globeGroup.add(panelMesh);
    });

    // Lighting
    const sunLight = new THREE.DirectionalLight(0xffffff, 2.4);
    sunLight.position.set(5, 3, 4.5);
    scene.add(sunLight);

    const rimLight = new THREE.DirectionalLight(0xc8ff4a, 1.8);
    rimLight.position.set(-5, -2, -3);
    scene.add(rimLight);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.9);
    scene.add(ambientLight);

    // Interactive Drag Controls
    const onPointerDown = (clientX: number, clientY: number) => {
      isDraggingRef.current = true;
      prevPointerRef.current = { x: clientX, y: clientY };
      velocityRef.current = { x: 0, y: 0 };
    };

    const onPointerMove = (clientX: number, clientY: number) => {
      if (!isDraggingRef.current) return;
      const deltaX = clientX - prevPointerRef.current.x;
      const deltaY = clientY - prevPointerRef.current.y;

      globeGroup.rotation.y += deltaX * 0.0075;
      globeGroup.rotation.x += deltaY * 0.005;

      globeGroup.rotation.x = Math.max(-0.65, Math.min(0.65, globeGroup.rotation.x));

      velocityRef.current = {
        x: deltaX * 0.0075,
        y: deltaY * 0.005,
      };

      prevPointerRef.current = { x: clientX, y: clientY };
    };

    const onPointerUp = () => {
      isDraggingRef.current = false;
    };

    const domElement = renderer.domElement;

    const handleMouseDown = (e: MouseEvent) => onPointerDown(e.clientX, e.clientY);
    const handleMouseMove = (e: MouseEvent) => onPointerMove(e.clientX, e.clientY);
    const handleMouseUp = () => onPointerUp();

    domElement.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);

    const handleTouchStart = (e: TouchEvent) => {
      if (e.touches.length === 1) {
        onPointerDown(e.touches[0].clientX, e.touches[0].clientY);
      }
    };
    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length === 1) {
        onPointerMove(e.touches[0].clientX, e.touches[0].clientY);
      }
    };
    const handleTouchEnd = () => onPointerUp();

    domElement.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: true });
    window.addEventListener("touchend", handleTouchEnd);

    const handleResize = () => {
      if (!container) return;
      const { w: newW, h: newH } = getDimensions();
      camera.aspect = newW / newH;
      camera.updateProjectionMatrix();
      renderer.setSize(newW, newH);
    };
    window.addEventListener("resize", handleResize);

    // Animation Loop with Smooth Reveal Scale Blooming
    let animId: number;
    let currentScale = 0.85;

    const animate = () => {
      animId = requestAnimationFrame(animate);

      // Smoothly bloom 3D sphere scale when revealed
      const targetScale = isRevealedRef.current ? 1.0 : 0.85;
      currentScale += (targetScale - currentScale) * 0.045;
      globeGroup.scale.set(currentScale, currentScale, currentScale);

      if (!isDraggingRef.current) {
        velocityRef.current.x *= 0.94;
        velocityRef.current.y *= 0.94;
        globeGroup.rotation.y += velocityRef.current.x;
        globeGroup.rotation.x += velocityRef.current.y;

        if (isAutoRotatingRef.current) {
          globeGroup.rotation.y += 0.0045;
          cloudMesh.rotation.y += 0.0015;
        }
      }

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", handleResize);
      domElement.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      domElement.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);

      earthGeometry.dispose();
      earthMaterial.dispose();
      cloudGeometry.dispose();
      cloudMaterial.dispose();
      cloudTexture.dispose();
      atmosphereGeometry.dispose();
      atmosphereMaterial.dispose();
      panelGeometry.dispose();
      panelMaterial.dispose();
      panelTexture.dispose();
      earthTexture.dispose();
      renderer.dispose();
      if (domElement.parentNode) {
        domElement.parentNode.removeChild(domElement);
      }
    };
  }, [isRevealed]);

  return (
    <section
      ref={sectionRef}
      className={`gh-solar-globe-section ${isRevealed ? "is-revealed" : ""}`}
      id="global-solar-tech"
    >
      <div className="container">
        <div className="gh-solar-globe-card">
          {/* Interactive Hint with Eyebrow Style */}
          <div className="gh-globe-hint">
            <span>✨ Drag or swipe to spin the globe continuously in 360°</span>
          </div>

          {/* 3D Globe Viewport */}
          <div className="gh-globe-canvas-wrap">
            <div className="gh-globe-backdrop-glow" />
            <div
              ref={containerRef}
              className="gh-globe-three-container"
              style={{
                width: "100%",
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                cursor: "grab",
                opacity: isLoaded ? 1 : 0.6,
                transition: "opacity 0.4s ease",
              }}
            />
          </div>

          {/* Metric Selector Toggle in Green Hub's theme */}
          <div className="gh-metric-toggle-wrapper">
            <div className="gh-metric-toggle">
              <button
                type="button"
                className={`gh-metric-btn ${activeMetricTab === "global" ? "is-selected" : ""}`}
                onClick={() => setActiveMetricTab("global")}
              >
                Global Tier-1 Benchmark
              </button>
              <button
                type="button"
                className={`gh-metric-btn ${activeMetricTab === "greenhub" ? "is-selected" : ""}`}
                onClick={() => setActiveMetricTab("greenhub")}
              >
                Green Hub Kerala Impact
              </button>
            </div>
          </div>

          {/* Bottom Stats Grid with Staggered Entrance Animation */}
          {activeMetricTab === "global" ? (
            <div className="gh-globe-stats-grid">
              {/* Stat 1: 25.8 GW */}
              <div className="gh-globe-stat-item">
                <div className="gh-globe-stat-icon">
                  <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.2">
                    <rect x="8" y="16" width="36" height="24" rx="2" />
                    <line x1="8" y1="28" x2="44" y2="28" />
                    <line x1="20" y1="16" x2="20" y2="40" />
                    <line x1="32" y1="16" x2="32" y2="40" />
                    <circle cx="50" cy="14" r="6" />
                    <line x1="50" y1="4" x2="50" y2="6" />
                    <line x1="58" y1="14" x2="60" y2="14" />
                    <rect x="24" y="46" width="22" height="10" rx="2" />
                    <line x1="20" y1="51" x2="24" y2="51" />
                  </svg>
                </div>
                <div className="gh-globe-stat-text">
                  <h3>
                    25.8<small>GW</small>
                  </h3>
                  <p>Solar Module Manufacturing capacity globally</p>
                </div>
              </div>

              {/* Stat 2: 5.4 GW */}
              <div className="gh-globe-stat-item">
                <div className="gh-globe-stat-icon">
                  <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.2">
                    <polygon points="12,46 26,14 54,14 40,46" />
                    <line x1="19" y1="30" x2="47" y2="30" />
                    <line x1="33" y1="14" x2="26" y2="46" />
                    <circle cx="12" cy="14" r="3" fill="currentColor" />
                  </svg>
                </div>
                <div className="gh-globe-stat-text">
                  <h3>
                    5.4<small>GW</small>
                  </h3>
                  <p>Solar Cell Manufacturing capacity</p>
                </div>
              </div>

              {/* Stat 3: 24+ Countries */}
              <div className="gh-globe-stat-item">
                <div className="gh-globe-stat-icon">
                  <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.2">
                    <circle cx="30" cy="32" r="20" />
                    <ellipse cx="30" cy="32" rx="9" ry="20" />
                    <line x1="10" y1="32" x2="50" y2="32" />
                    <path
                      d="M48 18 C48 14 54 10 54 18 C54 24 48 30 48 30 C48 30 42 24 42 18 C42 14 48 10 48 18 Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <div className="gh-globe-stat-text">
                  <h3>
                    24<small>+</small>
                  </h3>
                  <p>Countries modules exported globally</p>
                </div>
              </div>

              {/* Stat 4: Tier-1 40 Quarters */}
              <div className="gh-globe-stat-item">
                <div className="gh-globe-stat-icon tier1-badge">
                  <div className="gh-tier1-mark">
                    <span>TIER</span>
                    <b>1</b>
                  </div>
                </div>
                <div className="gh-globe-stat-text">
                  <h3>
                    40<small>Q</small>
                  </h3>
                  <p>Quarters of BloombergNEF Tier-1 rating</p>
                </div>
              </div>
            </div>
          ) : (
            <div className="gh-globe-stats-grid">
              {/* Green Hub Kerala Specific */}
              <div className="gh-globe-stat-item">
                <div className="gh-globe-stat-icon">
                  <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.2">
                    <rect x="10" y="14" width="44" height="32" rx="3" />
                    <line x1="10" y1="30" x2="54" y2="30" />
                    <line x1="25" y1="14" x2="25" y2="46" />
                    <line x1="39" y1="14" x2="39" y2="46" />
                  </svg>
                </div>
                <div className="gh-globe-stat-text">
                  <h3>
                    18.6<small>MW</small>
                  </h3>
                  <p>Clean rooftop capacity energized across Kerala</p>
                </div>
              </div>

              <div className="gh-globe-stat-item">
                <div className="gh-globe-stat-icon">
                  <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.2">
                    <path d="M12 48 L32 18 L52 48 Z" />
                    <line x1="22" y1="48" x2="22" y2="56" />
                    <line x1="42" y1="48" x2="42" y2="56" />
                  </svg>
                </div>
                <div className="gh-globe-stat-text">
                  <h3>
                    1,200<small>+</small>
                  </h3>
                  <p>Satisfied rooftop homes and commercial plants</p>
                </div>
              </div>

              <div className="gh-globe-stat-item">
                <div className="gh-globe-stat-icon">
                  <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.2">
                    <circle cx="32" cy="32" r="22" />
                    <path d="M22 32 L29 39 L43 23" strokeWidth="3" />
                  </svg>
                </div>
                <div className="gh-globe-stat-text">
                  <h3>
                    100<small>%</small>
                  </h3>
                  <p>In-house certified technical & KSEB liaison squad</p>
                </div>
              </div>

              <div className="gh-globe-stat-item">
                <div className="gh-globe-stat-icon">
                  <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.2">
                    <path d="M16 20 C16 14 48 14 48 20 C48 38 32 50 32 50 C32 50 16 38 16 20 Z" />
                    <path d="M26 28 L30 33 L38 23" strokeWidth="3" />
                  </svg>
                </div>
                <div className="gh-globe-stat-text">
                  <h3>
                    25<small>YRS</small>
                  </h3>
                  <p>Performance warranty on Tier-1 bifacial panels</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
