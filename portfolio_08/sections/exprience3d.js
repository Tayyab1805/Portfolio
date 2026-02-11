export class Experience3D {
    constructor() {
        this.element = null;
    }
    
    render() {
        const section = document.createElement('section');
        section.id = 'experience-section';
        section.className = 'section-3d';
        
        section.innerHTML = `
            <h2 class="section-title-3d">Professional Background</h2>
            <div class="card-3d" style="margin-top: 2rem;">
                <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 1.5rem; flex-wrap: wrap;">
                    <div>
                        <h3 style="font-size: 2rem; color: var(--accent); margin-bottom: 0.5rem;">Production & Warehouse Manager</h3>
                        <p style="font-size: 1.2rem; font-weight: 600; color: var(--heading);">Dressy (Wholesale Shop)</p>
                    </div>
                    <span style="background: var(--accent); color: white; padding: 0.5rem 1.5rem; border-radius: 30px; font-weight: 600;">June 2023 – Present</span>
                </div>
                
                <p style="font-size: 1.1rem; line-height: 1.8; margin-bottom: 2rem; color: var(--text-dark);">
                    Responsible for overseeing production workflows and managing warehouse inventory and operations for a wholesale business. This role demonstrates practical skills in:
                </p>
                
                <div style="display: flex; flex-wrap: wrap; gap: 1rem;">
                    <span style="background: rgba(37,163,177,0.1); color: var(--accent); padding: 0.8rem 1.5rem; border-radius: 30px; font-weight: 600;">Logistics Management</span>
                    <span style="background: rgba(37,163,177,0.1); color: var(--accent); padding: 0.8rem 1.5rem; border-radius: 30px; font-weight: 600;">Process Optimization</span>
                    <span style="background: rgba(37,163,177,0.1); color: var(--accent); padding: 0.8rem 1.5rem; border-radius: 30px; font-weight: 600;">Team Leadership</span>
                    <span style="background: rgba(37,163,177,0.1); color: var(--accent); padding: 0.8rem 1.5rem; border-radius: 30px; font-weight: 600;">Inventory Control</span>
                    <span style="background: rgba(37,163,177,0.1); color: var(--accent); padding: 0.8rem 1.5rem; border-radius: 30px; font-weight: 600;">Quality Assurance</span>
                </div>
            </div>
        `;
        
        this.element = section;
        return section;
    }
}