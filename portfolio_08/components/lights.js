import * as THREE from 'three';

export class Lights {
    constructor(scene) {
        this.scene = scene;
        this.lights = [];
        this.init();
    }
    
    init() {
        // Ambient light
        const ambient = new THREE.AmbientLight(0x404040, 0.6);
        this.scene.add(ambient);
        this.lights.push(ambient);
        
        // Main directional light
        const mainLight = new THREE.DirectionalLight(0xffffff, 1);
        mainLight.position.set(5, 5, 5);
        mainLight.castShadow = true;
        mainLight.receiveShadow = true;
        mainLight.shadow.mapSize.width = 1024;
        mainLight.shadow.mapSize.height = 1024;
        this.scene.add(mainLight);
        this.lights.push(mainLight);
        
        // Fill light
        const fillLight = new THREE.DirectionalLight(0x25a3b1, 0.4);
        fillLight.position.set(-5, 0, 5);
        this.scene.add(fillLight);
        this.lights.push(fillLight);
        
        // Back light
        const backLight = new THREE.DirectionalLight(0x0f1729, 0.3);
        backLight.position.set(0, 0, -5);
        this.scene.add(backLight);
        this.lights.push(backLight);
        
        // Point lights for accent
        const pointLight1 = new THREE.PointLight(0x25a3b1, 0.5);
        pointLight1.position.set(2, 1, 2);
        this.scene.add(pointLight1);
        this.lights.push(pointLight1);
        
        const pointLight2 = new THREE.PointLight(0x0f1729, 0.3);
        pointLight2.position.set(-2, 1, -2);
        this.scene.add(pointLight2);
        this.lights.push(pointLight2);
    }
    
    toggleShadows(enable) {
        this.lights.forEach(light => {
            if (light.castShadow !== undefined) {
                light.castShadow = enable;
            }
        });
    }
}