export class Contact3D {
    constructor() {
        this.element = null;
    }
    
    render() {
        const section = document.createElement('section');
        section.id = 'contact-section';
        section.className = 'section-3d';
        
        section.innerHTML = `
            <h2 class="section-title-3d">Let's Work Together</h2>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 3rem; margin-top: 2rem;">
                <div class="card-3d">
                    <p style="font-size: 1.1rem; margin-bottom: 2rem; line-height: 1.8;">
                        I'm always open to discussing new opportunities, internships, or just connecting with fellow professionals.
                    </p>
                    
                    <div style="display: flex; flex-direction: column; gap: 1.5rem;">
                        <div style="display: flex; align-items: center; gap: 1rem;">
                            <div style="width: 50px; height: 50px; border-radius: 15px; background: var(--accent-light); display: flex; align-items: center; justify-content: center; color: var(--accent); font-size: 1.2rem;">
                                <i class="fas fa-envelope"></i>
                            </div>
                            <div>
                                <h4 style="font-size: 1rem; margin-bottom: 0.25rem;">Email</h4>
                                <p style="color: var(--accent);">tayyabtayyabe@gmail.com</p>
                            </div>
                        </div>
                        
                        <div style="display: flex; align-items: center; gap: 1rem;">
                            <div style="width: 50px; height: 50px; border-radius: 15px; background: var(--accent-light); display: flex; align-items: center; justify-content: center; color: var(--accent); font-size: 1.2rem;">
                                <i class="fas fa-phone"></i>
                            </div>
                            <div>
                                <h4 style="font-size: 1rem; margin-bottom: 0.25rem;">Phone</h4>
                                <p style="color: var(--accent);">+92 320 5722442</p>
                            </div>
                        </div>
                        
                        <div style="display: flex; align-items: center; gap: 1rem;">
                            <div style="width: 50px; height: 50px; border-radius: 15px; background: var(--accent-light); display: flex; align-items: center; justify-content: center; color: var(--accent); font-size: 1.2rem;">
                                <i class="fab fa-linkedin"></i>
                            </div>
                            <div>
                                <h4 style="font-size: 1rem; margin-bottom: 0.25rem;">LinkedIn</h4>
                                <p style="color: var(--accent);">linkedin.com/in/tayyab1805</p>
                            </div>
                        </div>
                        
                        <div style="display: flex; align-items: center; gap: 1rem;">
                            <div style="width: 50px; height: 50px; border-radius: 15px; background: var(--accent-light); display: flex; align-items: center; justify-content: center; color: var(--accent); font-size: 1.2rem;">
                                <i class="fas fa-map-marker-alt"></i>
                            </div>
                            <div>
                                <h4 style="font-size: 1rem; margin-bottom: 0.25rem;">Location</h4>
                                <p style="color: var(--accent);">Islamabad, Pakistan</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="card-3d">
                    <form class="form-3d" id="contact-form-3d">
                        <div class="form-group-3d">
                            <label style="display: block; margin-bottom: 0.5rem; font-weight: 600;">Your Name</label>
                            <input type="text" placeholder="John Doe" required>
                        </div>
                        
                        <div class="form-group-3d">
                            <label style="display: block; margin-bottom: 0.5rem; font-weight: 600;">Your Email</label>
                            <input type="email" placeholder="john@example.com" required>
                        </div>
                        
                        <div class="form-group-3d">
                            <label style="display: block; margin-bottom: 0.5rem; font-weight: 600;">Subject</label>
                            <input type="text" placeholder="Internship Opportunity">
                        </div>
                        
                        <div class="form-group-3d">
                            <label style="display: block; margin-bottom: 0.5rem; font-weight: 600;">Message</label>
                            <textarea placeholder="Hi Muhammad, I'd like to discuss..." rows="5" required></textarea>
                        </div>
                        
                        <button type="submit" style="width: 100%; padding: 1rem; background: var(--accent); color: white; border: none; border-radius: 10px; font-size: 1.1rem; font-weight: 600; display: flex; align-items: center; justify-content: center; gap: 0.5rem; cursor: pointer; transition: all 0.3s ease;">
                            <i class="fas fa-paper-plane"></i> Send Message
                        </button>
                    </form>
                </div>
            </div>
        `;
        
        // Add form submission handler
        setTimeout(() => {
            const form = document.getElementById('contact-form-3d');
            if (form) {
                form.addEventListener('submit', (e) => {
                    e.preventDefault();
                    const btn = e.target.querySelector('button');
                    const originalText = btn.innerHTML;
                    
                    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
                    btn.disabled = true;
                    
                    setTimeout(() => {
                        btn.innerHTML = '<i class="fas fa-check"></i> Message Sent!';
                        btn.style.background = '#10b981';
                        
                        setTimeout(() => {
                            btn.innerHTML = originalText;
                            btn.style.background = 'var(--accent)';
                            btn.disabled = false;
                        }, 3000);
                    }, 1500);
                });
            }
        }, 100);
        
        this.element = section;
        return section;
    }
}