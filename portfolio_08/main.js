import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import gsap from 'gsap';
import { Scene3D } from './components/Scene3D.js';
import { Camera } from './components/Camera.js';
import { Lights } from './components/Lights.js';
import { CubeGrid } from './components/CubeGrid.js';
import { FloatingOrbs } from './components/FloatingOrbs.js';
import { DataCharts } from './components/DataCharts.js';
import { Particles } from './components/Particles.js';
import { Hero3D } from './sections/Hero3D.js';
import { About3D } from './sections/About3D.js';
import { Education3D } from './sections/Education3D.js';
import { Skills3D } from './sections/Skills3D.js';
import { Experience3D } from './sections/Experience3D.js';
import { Projects3D } from './sections/Projects3D.js';
import { Contact3D } from './sections/Contact3D.js';

class Portfolio3D {
    constructor() {
        this.scene = null;
        this.camera = null;
        this.renderer = null;
        this.controls = null;
        this.objects = [];
        this.sections = {};
        this.currentSection = 'home';
        this.isLoading = true;
        
        this.init();
    }
    
    async init() {
        this.setupScene();
        this.setupCamera();
        this.setupRenderer();
        this.setupLights();
        this.setupControls();
        this.setup3DElements();
        this.setupEventListeners();
        this.loadContent();
        this.animate();
    }
    
    setupScene() {
        this.scene = new THREE.Scene();
        this.scene.background = new THREE.Color(0xeff1ee);
    }
    
    setupCamera() {
        this.camera = new THREE.PerspectiveCamera(
            45,
            window.innerWidth / window.innerHeight,
            0.1,
            1000
        );
        this.camera.position.set(0, 2, 10);
        this.camera.lookAt(0, 0, 0);
    }
    
    setupRenderer() {
        this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.renderer.shadowMap.enabled = true;
        this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
        this.renderer.setPixelRatio(window.devicePixelRatio);
        document.getElementById('canvas-container').appendChild(this.renderer.domElement);
    }
    
    setupLights() {
        const ambientLight = new THREE.AmbientLight(0x404040);
        this.scene.add(ambientLight);
        
        const mainLight = new THREE.DirectionalLight(0xffffff, 1);
        mainLight.position.set(5, 5, 5);
        mainLight.castShadow = true;
        mainLight.receiveShadow = true;
        this.scene.add(mainLight);
        
        const fillLight = new THREE.DirectionalLight(0x25a3b1, 0.3);
        fillLight.position.set(-5, 0, 5);
        this.scene.add(fillLight);
        
        const backLight = new THREE.DirectionalLight(0x0f1729, 0.2);
        backLight.position.set(0, 0, -5);
        this.scene.add(backLight);
    }
    
    setupControls() {
        this.controls = new OrbitControls(this.camera, this.renderer.domElement);
        this.controls.enableDamping = true;
        this.controls.dampingFactor = 0.05;
        this.controls.autoRotate = true;
        this.controls.autoRotateSpeed = 0.5;
        this.controls.enableZoom = true;
        this.controls.enablePan = true;
        this.controls.maxPolarAngle = Math.PI / 2;
        this.controls.minDistance = 5;
        this.controls.maxDistance = 20;
    }
    
    setup3DElements() {
        // Add floating orbs
        this.floatingOrbs = new FloatingOrbs(this.scene);
        this.floatingOrbs.init();
        
        // Add cube grid
        this.cubeGrid = new CubeGrid(this.scene);
        this.cubeGrid.init();
        
        // Add particles
        this.particles = new Particles(this.scene);
        this.particles.init();
        
        // Add data charts
        this.dataCharts = new DataCharts(this.scene);
        this.dataCharts.init();
    }
    
    loadContent() {
        // Load all sections content
        this.sections = {
            home: new Hero3D(),
            about: new About3D(),
            education: new Education3D(),
            skills: new Skills3D(),
            experience: new Experience3D(),
            projects: new Projects3D(),
            contact: new Contact3D()
        };
        
        this.renderSections();
        this.hideLoadingScreen();
    }
    
    renderSections() {
        const container = document.getElementById('content-sections');
        
        Object.keys(this.sections).forEach(key => {
            const sectionElement = this.sections[key].render();
            container.appendChild(sectionElement);
        });
        
        // Animate sections on scroll
        this.setupScrollAnimations();
    }
    
    setupScrollAnimations() {
        const sections = document.querySelectorAll('.section-3d');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '0.95';
                    entry.target.style.transform = 'translateZ(30px)';
                    
                    // Animate skill bars when section is visible
                    if (entry.target.id === 'skills-section') {
                        this.animateSkillBars();
                    }
                }
            });
        }, { threshold: 0.1 });
        
        sections.forEach(section => observer.observe(section));
    }
    
    animateSkillBars() {
        const skillBars = document.querySelectorAll('.skill-progress-3d');
        
        skillBars.forEach(bar => {
            const width = bar.getAttribute('data-width');
            bar.style.width = width + '%';
        });
    }
    
    setupEventListeners() {
        // Navigation buttons
        document.querySelectorAll('.nav-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const section = e.target.dataset.section;
                this.navigateToSection(section);
            });
        });
        
        // Theme toggle
        document.getElementById('themeToggle').addEventListener('click', () => {
            this.toggleTheme();
        });
        
        // Window resize
        window.addEventListener('resize', () => this.onWindowResize(), false);
        
        // Mouse move for 3D effect
        window.addEventListener('mousemove', (e) => this.onMouseMove(e));
    }
    
    navigateToSection(section) {
        this.currentSection = section;
        
        // Update active nav button
        document.querySelectorAll('.nav-btn').forEach(btn => {
            btn.classList.remove('active');
            if (btn.dataset.section === section) {
                btn.classList.add('active');
            }
        });
        
        // Smooth scroll to section
        const sectionElement = document.getElementById(`${section}-section`);
        if (sectionElement) {
            sectionElement.scrollIntoView({ behavior: 'smooth' });
        }
        
        // Animate camera
        this.animateCameraToSection(section);
    }
    
    animateCameraToSection(section) {
        const positions = {
            home: { x: 0, y: 2, z: 10 },
            about: { x: 2, y: 2, z: 8 },
            education: { x: -2, y: 2, z: 8 },
            skills: { x: 0, y: 2, z: 12 },
            experience: { x: 2, y: 2, z: 10 },
            projects: { x: -2, y: 2, z: 10 },
            contact: { x: 0, y: 2, z: 15 }
        };
        
        const pos = positions[section];
        if (pos) {
            gsap.to(this.camera.position, {
                x: pos.x,
                y: pos.y,
                z: pos.z,
                duration: 2,
                ease: 'power2.inOut'
            });
        }
    }
    
    onWindowResize() {
        this.camera.aspect = window.innerWidth / window.innerHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
    }
    
    onMouseMove(e) {
        // Parallax effect for 3D objects
        const mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
        const mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
        
        this.floatingOrbs.rotate(mouseX, mouseY);
        this.cubeGrid.rotate(mouseX, mouseY);
        this.particles.move(mouseX, mouseY);
    }
    
    toggleTheme() {
        const root = document.documentElement;
        const isDark = root.style.getPropertyValue('--primary-bg') === 'rgba(239, 241, 238, 0.95)';
        
        if (isDark) {
            // Switch to dark
            root.style.setProperty('--primary-bg', 'rgba(15, 23, 41, 0.95)');
            root.style.setProperty('--secondary-bg', 'rgba(24, 37, 67, 0.92)');
            root.style.setProperty('--block-bg', 'rgba(32, 45, 75, 0.9)');
            root.style.setProperty('--heading', 'rgba(255, 255, 255, 0.95)');
            root.style.setProperty('--text-dark', 'rgba(255, 255, 255, 0.9)');
            this.scene.background = new THREE.Color(0x0f1729);
        } else {
            // Switch to light
            root.style.setProperty('--primary-bg', 'rgba(239, 241, 238, 0.95)');
            root.style.setProperty('--secondary-bg', 'rgba(249, 248, 245, 0.92)');
            root.style.setProperty('--block-bg', 'rgba(253, 253, 252, 0.9)');
            root.style.setProperty('--heading', 'rgb(24, 37, 67)');
            root.style.setProperty('--text-dark', 'rgb(15, 23, 41)');
            this.scene.background = new THREE.Color(0xeff1ee);
        }
        
        // Animate theme toggle
        gsap.to(document.querySelector('.theme-toggle-3d i'), {
            rotation: 360,
            duration: 0.5,
            ease: 'power2.out'
        });
    }
    
    hideLoadingScreen() {
        this.isLoading = false;
        
        // Update progress bar
        const progressBar = document.getElementById('progress-bar');
        progressBar.style.width = '100%';
        
        // Hide loading screen
        setTimeout(() => {
            document.getElementById('loading-screen').style.opacity = '0';
            setTimeout(() => {
                document.getElementById('loading-screen').style.display = 'none';
            }, 1000);
        }, 500);
        
        // Initial camera animation
        gsap.from(this.camera.position, {
            y: 5,
            z: 20,
            duration: 2,
            ease: 'power2.out'
        });
    }
    
    animate() {
        requestAnimationFrame(() => this.animate());
        
        // Update controls
        this.controls.update();
        
        // Update 3D objects
        this.floatingOrbs.update();
        this.cubeGrid.update();
        this.particles.update();
        this.dataCharts.update();
        
        // Render scene
        this.renderer.render(this.scene, this.camera);
    }
}

// Initialize portfolio
new Portfolio3D();

// Export for use in other files
export default Portfolio3D;