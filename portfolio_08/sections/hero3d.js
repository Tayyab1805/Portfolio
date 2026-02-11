export class Hero3D {
    constructor() {
        this.element = null;
    }
    
    render() {
        const section = document.createElement('section');
        section.id = 'home-section';
        section.className = 'section-3d';
        section.style.transform = 'translateZ(50px)';
        
        section.innerHTML = `
            <div style="display: flex; flex-direction: column; gap: 2rem;">
                <span class="greeting-3d" style="color: var(--accent); font-size: 1.2rem;">Hello, I'm</span>
                <h1 class="hero-title-3d" style="font-size: 4rem; line-height: 1.1;">
                    Muhammad<br>
                    <span style="color: var(--accent); position: relative;">
                        Tayyab
                        <span style="position: absolute; bottom: 10px; left: 0; width: 100%; height: 20px; background: rgba(37,163,177,0.2); z-index: -1;"></span>
                    </span>
                </h1>
                <div class="typing-container-3d" style="height: 60px; display: flex; align-items: center;">
                    <span id="typing-text-3d" style="font-size: 1.8rem; font-weight: 600; color: var(--heading); border-right: 3px solid var(--accent); padding-right: 10px;"></span>
                </div>
                <p style="font-size: 1.2rem; color: var(--text-dark); max-width: 600px; line-height: 1.8;">
                    Turning data into insights and ideas into reality. A passionate student combining analytical thinking with real-world business experience.
                </p>
                <div style="display: flex; gap: 1rem; margin-top: 1rem;">
                    <a href="#contact" class="btn btn-primary" style="background: var(--accent); color: white; border: none; padding: 1rem 2rem; border-radius: 30px; font-weight: 600;">
                        <i class="fas fa-envelope"></i> Get in Touch
                    </a>
                    <a href="https://m-tayyab.lovable.app/" target="_blank" class="btn btn-secondary" style="background: transparent; color: var(--accent); border: 2px solid var(--accent); padding: 1rem 2rem; border-radius: 30px; font-weight: 600;">
                        <i class="fas fa-download"></i> Download CV
                    </a>
                </div>
            </div>
        `;
        
        this.element = section;
        return section;
    }
}