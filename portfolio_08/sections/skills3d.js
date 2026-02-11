export class Skills3D {
    constructor() {
        this.element = null;
    }
    
    render() {
        const section = document.createElement('section');
        section.id = 'skills-section';
        section.className = 'section-3d';
        
        section.innerHTML = `
            <h2 class="section-title-3d">What I Bring</h2>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 3rem; margin-top: 2rem;">
                <div class="card-3d">
                    <h3 style="display: flex; align-items: center; gap: 1rem; margin-bottom: 2rem; color: var(--accent);">
                        <i class="fas fa-users"></i> Soft Skills
                    </h3>
                    
                    <div class="skill-bar-3d">
                        <div class="skill-info">
                            <span>Communication</span>
                            <span>90%</span>
                        </div>
                        <div class="skill-bar-container">
                            <div class="skill-progress-3d" data-width="90" style="width: 0%;"></div>
                        </div>
                    </div>
                    
                    <div class="skill-bar-3d">
                        <div class="skill-info">
                            <span>Problem Solving</span>
                            <span>95%</span>
                        </div>
                        <div class="skill-bar-container">
                            <div class="skill-progress-3d" data-width="95" style="width: 0%;"></div>
                        </div>
                    </div>
                    
                    <div class="skill-bar-3d">
                        <div class="skill-info">
                            <span>Team Leadership</span>
                            <span>85%</span>
                        </div>
                        <div class="skill-bar-container">
                            <div class="skill-progress-3d" data-width="85" style="width: 0%;"></div>
                        </div>
                    </div>
                    
                    <div class="skill-bar-3d">
                        <div class="skill-info">
                            <span>Critical Thinking</span>
                            <span>88%</span>
                        </div>
                        <div class="skill-bar-container">
                            <div class="skill-progress-3d" data-width="88" style="width: 0%;"></div>
                        </div>
                    </div>
                </div>
                
                <div class="card-3d">
                    <h3 style="display: flex; align-items: center; gap: 1rem; margin-bottom: 2rem; color: var(--accent);">
                        <i class="fas fa-laptop-code"></i> Technical & Analytical
                    </h3>
                    
                    <div style="display: flex; flex-wrap: wrap; gap: 1rem;">
                        <span class="tech-tag" style="background: rgba(37,163,177,0.1); color: var(--accent); padding: 0.8rem 1.5rem; border-radius: 30px; font-weight: 600;">Python Analytics (Intermediate)</span>
                        <span class="tech-tag" style="background: rgba(37,163,177,0.1); color: var(--accent); padding: 0.8rem 1.5rem; border-radius: 30px; font-weight: 600;">MS Office Suite (Advanced)</span>
                        <span class="tech-tag" style="background: rgba(37,163,177,0.1); color: var(--accent); padding: 0.8rem 1.5rem; border-radius: 30px; font-weight: 600;">Frontend Development (Basic)</span>
                        <span class="tech-tag" style="background: rgba(37,163,177,0.1); color: var(--accent); padding: 0.8rem 1.5rem; border-radius: 30px; font-weight: 600;">Data Visualization (Intermediate)</span>
                        <span class="tech-tag" style="background: rgba(37,163,177,0.1); color: var(--accent); padding: 0.8rem 1.5rem; border-radius: 30px; font-weight: 600;">HTML & CSS</span>
                        <span class="tech-tag" style="background: rgba(37,163,177,0.1); color: var(--accent); padding: 0.8rem 1.5rem; border-radius: 30px; font-weight: 600;">JavaScript</span>
                        <span class="tech-tag" style="background: rgba(37,163,177,0.1); color: var(--accent); padding: 0.8rem 1.5rem; border-radius: 30px; font-weight: 600;">Pandas</span>
                        <span class="tech-tag" style="background: rgba(37,163,177,0.1); color: var(--accent); padding: 0.8rem 1.5rem; border-radius: 30px; font-weight: 600;">NumPy</span>
                    </div>
                </div>
            </div>
        `;
        
        this.element = section;
        return section;
    }
}