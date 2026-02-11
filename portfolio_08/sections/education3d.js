export class Education3D {
    constructor() {
        this.element = null;
    }
    
    render() {
        const section = document.createElement('section');
        section.id = 'education-section';
        section.className = 'section-3d';
        
        section.innerHTML = `
            <h2 class="section-title-3d">My Academic Journey</h2>
            <div class="timeline-3d" style="margin-top: 3rem;">
                <div class="timeline-item-3d">
                    <h3 style="font-size: 1.5rem; color: var(--accent); margin-bottom: 0.5rem;">BS Business Analytics</h3>
                    <div style="display: flex; gap: 1rem; margin-bottom: 1rem;">
                        <span style="background: var(--accent-light); color: var(--accent); padding: 0.3rem 1rem; border-radius: 20px; font-weight: 600;">4th Semester</span>
                        <span style="background: rgba(37,163,177,0.1); color: var(--accent); padding: 0.3rem 1rem; border-radius: 20px; font-weight: 600;">Expected 2028</span>
                    </div>
                    <p style="color: var(--text-dark); margin-bottom: 0.5rem;"><strong>International Islamic University Islamabad (IIUI)</strong></p>
                    <p style="color: var(--text-dark);">Currently Pursuing</p>
                </div>
                
                <div class="timeline-item-3d">
                    <h3 style="font-size: 1.5rem; color: var(--accent); margin-bottom: 0.5rem;">HSSC (Intermediate)</h3>
                    <div style="display: flex; gap: 1rem; margin-bottom: 1rem;">
                        <span style="background: var(--accent-light); color: var(--accent); padding: 0.3rem 1rem; border-radius: 20px; font-weight: 600;">Completed</span>
                    </div>
                    <p style="color: var(--text-dark); margin-bottom: 0.5rem;"><strong>FG Sir Syed College</strong></p>
                    <p style="color: var(--text-dark);">76% (840/1100)</p>
                </div>
                
                <div class="timeline-item-3d">
                    <h3 style="font-size: 1.5rem; color: var(--accent); margin-bottom: 0.5rem;">SSC (Matriculation)</h3>
                    <div style="display: flex; gap: 1rem; margin-bottom: 1rem;">
                        <span style="background: var(--accent-light); color: var(--accent); padding: 0.3rem 1rem; border-radius: 20px; font-weight: 600;">Completed</span>
                        <span style="background: rgba(37,163,177,0.1); color: var(--accent); padding: 0.3rem 1rem; border-radius: 20px; font-weight: 600;">Outstanding</span>
                    </div>
                    <p style="color: var(--text-dark); margin-bottom: 0.5rem;"><strong>Allied School</strong></p>
                    <p style="color: var(--text-dark);">1076/1100 Marks</p>
                </div>
            </div>
        `;
        
        this.element = section;
        return section;
    }
}