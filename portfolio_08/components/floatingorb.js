import * as THREE from 'three';

export class FloatingOrbs {
    constructor(scene) {
        this.scene = scene;
        this.orbs = [];
        this.count = 30;
        this.init();
    }
    
    init() {
        const geometry = new THREE.SphereGeometry(0.2, 32, 32);
        const material = new THREE.MeshStandardMaterial({
            color: 0x25a3b1,
            emissive: 0x0f1729,
            roughness: 0.2,
            metalness: 0.8,
            transparent: true,
            opacity: 0.4
        });
        
        for (let i = 0; i < this.count; i++) {
            const orb = new THREE.Mesh(geometry, material.clone());
            
            // Random position in sphere
            const radius = 8 + Math.random() * 5;
            const theta = Math.random() * Math.PI * 2;
            const phi = Math.random() * Math.PI * 2;
            
            orb.position.x = radius * Math.sin(theta) * Math.cos(phi);
            orb.position.y = radius * Math.sin(theta) * Math.sin(phi);
            orb.position.z = radius * Math.cos(theta);
            
            orb.castShadow = true;
            orb.receiveShadow = true;
            
            this.scene.add(orb);
            
            this.orbs.push({
                mesh: orb,
                radius: radius,
                theta: theta,
                phi: phi,
                speed: 0.1 + Math.random() * 0.2,
                color: new THREE.Color().setHSL(Math.random(), 0.5, 0.5)
            });
        }
    }
    
    update() {
        const time = Date.now() * 0.001;
        
        this.orbs.forEach(orb => {
            orb.theta += 0.001 * orb.speed;
            orb.phi += 0.001 * orb.speed;
            
            orb.mesh.position.x = orb.radius * Math.sin(orb.theta) * Math.cos(orb.phi);
            orb.mesh.position.y = orb.radius * Math.sin(orb.theta) * Math.sin(orb.phi);
            orb.mesh.position.z = orb.radius * Math.cos(orb.theta);
            
            orb.mesh.rotation.x += 0.01;
            orb.mesh.rotation.y += 0.01;
            
            // Pulse effect
            const scale = 1 + Math.sin(time * 2 + orb.theta) * 0.1;
            orb.mesh.scale.set(scale, scale, scale);
        });
    }
    
    rotate(mouseX, mouseY) {
        this.orbs.forEach(orb => {
            orb.theta += mouseX * 0.01;
            orb.phi += mouseY * 0.01;
        });
    }
}