import * as THREE from 'three';

export class Camera {
    constructor() {
        this.camera = null;
        this.init();
    }
    
    init() {
        this.camera = new THREE.PerspectiveCamera(
            45,
            window.innerWidth / window.innerHeight,
            0.1,
            1000
        );
        this.camera.position.set(0, 2, 12);
        this.camera.lookAt(0, 0, 0);
    }
    
    updateAspect(width, height) {
        this.camera.aspect = width / height;
        this.camera.updateProjectionMatrix();
    }
    
    getCamera() {
        return this.camera;
    }
}