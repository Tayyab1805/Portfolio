import * as THREE from 'three';

export class Scene3D {
    constructor() {
        this.scene = null;
        this.init();
    }
    
    init() {
        this.scene = new THREE.Scene();
        this.scene.background = new THREE.Color(0xeff1ee);
        
        // Add fog for depth
        this.scene.fog = new THREE.Fog(0xeff1ee, 10, 50);
    }
    
    addObject(object) {
        this.scene.add(object);
    }
    
    removeObject(object) {
        this.scene.remove(object);
    }
    
    getScene() {
        return this.scene;
    }
}