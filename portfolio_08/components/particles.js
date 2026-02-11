import * as THREE from 'three';

export class Particles {
    constructor(scene) {
        this.scene = scene;
        this.particles = null;
        this.count = 1000;
        this.init();
    }
    
    init() {
        const geometry = new THREE.BufferGeometry();
        const positions = new Float32Array(this.count * 3);
        const colors = new Float32Array(this.count * 3);
        
        for (let i = 0; i < this.count * 3; i += 3) {
            // Position
            positions[i] = (Math.random() - 0.5) * 50;
            positions[i + 1] = (Math.random() - 0.5) * 50;
            positions[i + 2] = (Math.random() - 0.5) * 50;
            
            // Color
            colors[i] = 37 / 255; // R
            colors[i + 1] = 163 / 255; // G
            colors[i + 2] = 177 / 255; // B
        }
        
        geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
        
        const material = new THREE.PointsMaterial({
            size: 0.1,
            vertexColors: true,
            transparent: true,
            opacity: 0.3,
            blending: THREE.AdditiveBlending,
            depthWrite: false
        });
        
        this.particles = new THREE.Points(geometry, material);
        this.scene.add(this.particles);
    }
    
    update() {
        const time = Date.now() * 0.001;
        
        this.particles.rotation.x += 0.0001;
        this.particles.rotation.y += 0.0002;
        
        // Animate particles
        const positions = this.particles.geometry.attributes.position.array;
        
        for (let i = 0; i < positions.length; i += 3) {
            positions[i + 1] += Math.sin(time + positions[i]) * 0.001;
        }
        
        this.particles.geometry.attributes.position.needsUpdate = true;
    }
    
    move(mouseX, mouseY) {
        this.particles.rotation.x += mouseY * 0.01;
        this.particles.rotation.y += mouseX * 0.01;
    }
}