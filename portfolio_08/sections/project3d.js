export class Projects3D {
    constructor() {
        this.element = null;
    }
    
    render() {
        const section = document.createElement('section');
        section.id = 'projects-section';
        section.className = 'section-3d';
        
        section.innerHTML = `
            <h2 class="section-title-3d">Recognition & Work</h2>
            <div class="grid-3d" style="margin-top: 2rem;">
                <div class="project-card-3d">
                    <div class="project-header-3d">
                        <div style="font-size: 3rem; font-weight: 800; margin-bottom: 0.5rem;">1st</div>
                        <h3 style="font-size: 1.3rem; margin-bottom: 0.5rem;">Statistical Model Competition</h3>
                        <p style="opacity: 0.9;">FGEI (All-Pakistan)</p>
                    </div>
                    <div style="padding: 1.5rem;">
                        <p style="margin-bottom: 1.5rem; line-height: 1.7;">
                            Secured first position in an All-Pakistan competition organized by Federal Government Educational Institutions, demonstrating exceptional statistical analysis and modeling capabilities.
                        </p>
                        <div style="display: flex; justify-content: space-between; background: rgba(37,163,177,0.1); padding: 1rem; border-radius: 10px;">
                            <div style="text-align: center;">
                                <div style="font-size: 1.5rem; font-weight: 800; color: var(--accent);">64+</div>
                                <div style="font-size: 0.85rem; color: var(--text-dark);">Teams</div>
                            </div>
                            <div style="text-align: center;">
                                <div style="font-size: 1.5rem; font-weight: 800; color: var(--accent);">1st</div>
                                <div style="font-size: 0.85rem; color: var(--text-dark);">Position</div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="project-card-3d">
                    <div class="project-header-3d">
                        <div style="font-size: 3rem; font-weight: 800; margin-bottom: 0.5rem;">3rd</div>
                        <h3 style="font-size: 1.3rem; margin-bottom: 0.5rem;">Business Idea Competition 2025</h3>
                        <p style="opacity: 0.9;">NUML University</p>
                    </div>
                    <div style="padding: 1.5rem;">
                        <p style="margin-bottom: 1.5rem; line-height: 1.7;">
                            Awarded third position among 64 competing teams for presenting an innovative and viable business idea, showcasing entrepreneurial thinking and presentation skills.
                        </p>
                        <div style="display: flex; justify-content: space-between; background: rgba(37,163,177,0.1); padding: 1rem; border-radius: 10px;">
                            <div style="text-align: center;">
                                <div style="font-size: 1.5rem; font-weight: 800; color: var(--accent);">64</div>
                                <div style="font-size: 0.85rem; color: var(--text-dark);">Teams</div>
                            </div>
                            <div style="text-align: center;">
                                <div style="font-size: 1.5rem; font-weight: 800; color: var(--accent);">3rd</div>
                                <div style="font-size: 0.85rem; color: var(--text-dark);">Position</div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="project-card-3d">
                    <div class="project-header-3d">
                        <div style="font-size: 3rem; font-weight: 800; margin-bottom: 0.5rem;">3rd</div>
                        <h3 style="font-size: 1.3rem; margin-bottom: 0.5rem;">Federal Board Academic Excellence</h3>
                        <p style="opacity: 0.9;">All Allied Schools</p>
                    </div>
                    <div style="padding: 1.5rem;">
                        <p style="margin-bottom: 1.5rem; line-height: 1.7;">
                            Achieved 3rd position among all Allied Schools affiliated with the Federal Board, demonstrating outstanding academic performance.
                        </p>
                        <div style="display: flex; justify-content: space-between; background: rgba(37,163,177,0.1); padding: 1rem; border-radius: 10px;">
                            <div style="text-align: center;">
                                <div style="font-size: 1.5rem; font-weight: 800; color: var(--accent);">3rd</div>
                                <div style="font-size: 0.85rem; color: var(--text-dark);">Position</div>
                            </div>
                            <div style="text-align: center;">
                                <div style="font-size: 1.5rem; font-weight: 800; color: var(--accent);">All</div>
                                <div style="font-size: 0.85rem; color: var(--text-dark);">Schools</div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="project-card-3d">
                    <div class="project-header-3d">
                        <div style="font-size: 3rem; font-weight: 800; margin-bottom: 0.5rem;">🏆</div>
                        <h3 style="font-size: 1.3rem; margin-bottom: 0.5rem;">PM Laptop Scheme 2025</h3>
                        <p style="opacity: 0.9;">Government of Pakistan</p>
                    </div>
                    <div style="padding: 1.5rem;">
                        <p style="margin-bottom: 1.5rem; line-height: 1.7;">
                            Awarded laptop based on academic merit through the Prime Minister's Laptop Scheme 2025, recognizing exceptional academic achievements.
                        </p>
                        <div style="display: flex; justify-content: space-between; background: rgba(37,163,177,0.1); padding: 1rem; border-radius: 10px;">
                            <div style="text-align: center;">
                                <div style="font-size: 1.5rem; font-weight: 800; color: var(--accent);">4+</div>
                                <div style="font-size: 0.85rem; color: var(--text-dark);">Awards</div>
                            </div>
                            <div style="text-align: center;">
                                <div style="font-size: 1.5rem; font-weight: 800; color: var(--accent);">10+</div>
                                <div style="font-size: 0.85rem; color: var(--text-dark);">Certs</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
        
        this.element = section;
        return section;
    }
}