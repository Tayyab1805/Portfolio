export class About3D {
    constructor() {
        this.element = null;
    }
    
    render() {
        const section = document.createElement('section');
        section.id = 'about-section';
        section.className = 'section-3d';
        
        section.innerHTML = `
            <h2 class="section-title-3d">Get to Know Me</h2>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 3rem; margin-top: 2rem;">
                <div class="card-3d">
                    <h3 style="font-size: 1.8rem; margin-bottom: 1.5rem; color: var(--accent);">About Me</h3>
                    <p style="margin-bottom: 1.5rem; line-height: 1.8;">
                        A dedicated 4th-semester BS Business Analytics student at the International Islamic University Islamabad (IIUI), expected to graduate in 2028.
                    </p>
                    <p style="margin-bottom: 1.5rem; line-height: 1.8;">
                        I combine strong academic performance with hands-on management experience and a proven track record in analytical competitions. My journey is driven by the passion to apply data-driven solutions to real-world business challenges.
                    </p>
                    <p style="line-height: 1.8;">
                        Whether it's analyzing complex datasets, managing warehouse operations, or developing innovative business ideas, I bring the same level of dedication and analytical rigor to everything I do.
                    </p>
                </div>
                <div class="grid-3d">
                    <div class="card-3d" style="text-align: center;">
                        <i class="fas fa-database" style="font-size: 2.5rem; color: var(--accent); margin-bottom: 1rem;"></i>
                        <h4 style="margin-bottom: 0.5rem;">Data-Driven</h4>
                        <p style="color: var(--text-dark);">Passionate about applying analytical solutions to real-world challenges</p>
                    </div>
                    <div class="card-3d" style="text-align: center;">
                        <i class="fas fa-trophy" style="font-size: 2.5rem; color: var(--accent); margin-bottom: 1rem;"></i>
                        <h4 style="margin-bottom: 0.5rem;">High Achiever</h4>
                        <p style="color: var(--text-dark);">Proven track record with 1st & 3rd positions in national competitions</p>
                    </div>
                    <div class="card-3d" style="text-align: center;">
                        <i class="fas fa-users" style="font-size: 2.5rem; color: var(--accent); margin-bottom: 1rem;"></i>
                        <h4 style="margin-bottom: 0.5rem;">Team Leader</h4>
                        <p style="color: var(--text-dark);">Hands-on experience managing production and warehouse operations</p>
                    </div>
                </div>
            </div>
        `;
        
        this.element = section;
        return section;
    }
}