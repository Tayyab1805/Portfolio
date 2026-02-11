import gsap from 'gsap';

export class Animations {
    static fadeIn(element, duration = 0.5) {
        gsap.fromTo(element, {
            opacity: 0,
            y: 30
        }, {
            opacity: 1,
            y: 0,
            duration: duration,
            ease: 'power2.out'
        });
    }
    
    static slideInLeft(element, duration = 0.5) {
        gsap.fromTo(element, {
            opacity: 0,
            x: -50
        }, {
            opacity: 1,
            x: 0,
            duration: duration,
            ease: 'power2.out'
        });
    }
    
    static slideInRight(element, duration = 0.5) {
        gsap.fromTo(element, {
            opacity: 0,
            x: 50
        }, {
            opacity: 1,
            x: 0,
            duration: duration,
            ease: 'power2.out'
        });
    }
    
    static scaleIn(element, duration = 0.5) {
        gsap.fromTo(element, {
            opacity: 0,
            scale: 0.8
        }, {
            opacity: 1,
            scale: 1,
            duration: duration,
            ease: 'backOut(1.7)'
        });
    }
    
    static rotateIn(element, duration = 0.5) {
        gsap.fromTo(element, {
            opacity: 0,
            rotation: -180
        }, {
            opacity: 1,
            rotation: 0,
            duration: duration,
            ease: 'power2.out'
        });
    }
    
    static float(element, duration = 2) {
        gsap.to(element, {
            y: -10,
            duration: duration,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut'
        });
    }
    
    static pulse(element, duration = 1) {
        gsap.to(element, {
            scale: 1.1,
            duration: duration,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut'
        });
    }
}