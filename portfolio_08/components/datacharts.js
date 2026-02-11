import * as THREE from 'three';

export class DataCharts {
    constructor(scene) {
        this.scene = scene;
        this.charts = [];
        this.init();
    }
    
    init() {
        this.createBarChart();
        this.createPieChart();
        this.createLineChart();
    }
    
    createBarChart() {
        const group = new THREE.Group();
        group.position.set(-3, 0, -5);
        
        const colors = [0x25a3b1, 0x0f1729, 0x182543];
        const heights = [1.5, 2.0, 1.2, 1.8, 1.4];
        
        heights.forEach((height, i) => {
            const geometry = new THREE.BoxGeometry(0.3, height, 0.3);
            const material = new THREE.MeshStandardMaterial({
                color: colors[i % colors.length],
                emissive: 0x0f1729,
                roughness: 0.4,
                metalness: 0.6,
                transparent: true,
                opacity: 0.5
            });
            
            const bar = new THREE.Mesh(geometry, material);
            bar.position.x = i * 0.8 - 2;
            bar.position.y = height / 2;
            bar.castShadow = true;
            bar.receiveShadow = true;
            
            group.add(bar);
        });
        
        this.scene.add(group);
        this.charts.push(group);
    }
    
    createPieChart() {
        const group = new THREE.Group();
        group.position.set(3, 0, -5);
        
        const segments = [0.3, 0.2, 0.25, 0.15, 0.1];
        let startAngle = 0;
        
        segments.forEach((segment, i) => {
            const angle = segment * Math.PI * 2;
            
            // Create a wedge using custom geometry
            const shape = new THREE.Shape();
            shape.moveTo(0, 0);
            shape.lineTo(1, 0);
            shape.absarc(0, 0, 1, 0, angle, false);
            shape.lineTo(0, 0);
            
            const geometry = new THREE.ExtrudeGeometry(shape, {
                depth: 0.1,
                bevelEnabled: false
            });
            
            const material = new THREE.MeshStandardMaterial({
                color: new THREE.Color().setHSL(i * 0.1, 0.7, 0.5),
                emissive: 0x0f1729,
                roughness: 0.4,
                metalness: 0.6,
                transparent: true,
                opacity: 0.5,
                side: THREE.DoubleSide
            });
            
            const wedge = new THREE.Mesh(geometry, material);
            wedge.rotation.z = startAngle;
            wedge.rotation.x = Math.PI / 2;
            wedge.position.y = 0.5;
            
            group.add(wedge);
            startAngle += angle;
        });
        
        this.scene.add(group);
        this.charts.push(group);
    }
    
    createLineChart() {
        const group = new THREE.Group();
        group.position.set(0, 0, -5);
        
        const points = [
            [-2, 0, 0],
            [-1, 1, 0],
            [0, 0.5, 0],
            [1, 1.5, 0],
            [2, 0.8, 0]
        ];
        
        // Create line
        const lineGeometry = new THREE.BufferGeometry();
        const linePositions = points.flat();
        lineGeometry.setAttribute('position', new THREE.Float32BufferAttribute(linePositions, 3));
        
        const lineMaterial = new THREE.LineBasicMaterial({ color: 0x25a3b1 });
        const line = new THREE.Line(lineGeometry, lineMaterial);
        group.add(line);
        
        // Create points
        points.forEach((point, i) => {
            const sphereGeometry = new THREE.SphereGeometry(0.1, 16, 16);
            const sphereMaterial = new THREE.MeshStandardMaterial({
                color: 0x25a3b1,
                emissive: 0x0f1729,
                roughness: 0.3,
                metalness: 0.7
            });
            
            const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
            sphere.position.set(point[0], point[1], point[2]);
            group.add(sphere);
        });
        
        this.scene.add(group);
        this.charts.push(group);
    }
    
    update() {
        const time = Date.now() * 0.001;
        
        this.charts.forEach((chart, index) => {
            chart.rotation.y += 0.001;
            chart.position.y = Math.sin(time + index) * 0.1;
        });
    }
}