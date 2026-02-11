import * as THREE from 'three';

export class CubeGrid {
    constructor(scene) {
        this.scene = scene;
        this.cubes = [];
        this.gridSize = 20;
        this.spacing = 2.5;
        this.init();
    }
    
    init() {
        const geometry = new THREE.BoxGeometry(0.5, 0.5, 0.5);
        const material = new THREE.MeshStandardMaterial({
            color: 0x25a3b1,
            emissive: 0x0f1729,
            roughness: 0.3,
            metalness: 0.7,
            transparent: true,
            opacity: 0.3
        });
        
        const edgeMaterial = new THREE.LineBasicMaterial({ color: 0x25a3b1 });
        
        for (let i = 0; i < this.gridSize; i++) {
            for (let j = 0; j < this.gridSize; j++) {
                const x = (i - this.gridSize/2) * this.spacing;
                const z = (j - this.gridSize/2) * this.spacing;
                const y = Math.sin(i * 0.5 + j * 0.5) * 0.5;
                
                const cube = new THREE.Mesh(geometry, material.clone());
                cube.position.set(x, y, z);
                cube.castShadow = true;
                cube.receiveShadow = true;
                
                // Add wireframe edges
                const edges = new THREE.EdgesGeometry(geometry);
                const line = new THREE.LineSegments(edges, edgeMaterial.clone());
                cube.add(line);
                
                this.scene.add(cube);
                this.cubes.push({
                    mesh: cube,
                    originalY: y,
                    speed: 0.5 + Math.random() * 0.5,
                    phase: Math.random() * Math.PI * 2
                });
            }
        }
    }
    
    update() {
        const time = Date.now() * 0.001;
        
        this.cubes.forEach((cube, index) => {
            const i = index % this.gridSize;
            const j = Math.floor(index / this.gridSize);
            
            cube.mesh.rotation.x += 0.005;
            cube.mesh.rotation.y += 0.005;
            
            cube.mesh.position.y = cube.originalY + Math.sin(time * cube.speed + cube.phase) * 0.3;
        });
    }
    
    rotate(mouseX, mouseY) {
        this.cubes.forEach(cube => {
            cube.mesh.rotation.x += mouseY * 0.01;
            cube.mesh.rotation.y += mouseX * 0.01;
        });
    }
}