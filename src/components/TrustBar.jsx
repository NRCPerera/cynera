import React from 'react';
import './TrustBar.css';

const TrustBar = () => {
    const techStack = [
        {
            name: 'React', icon: (
                <svg viewBox="0 0 24 24" className="trust-bar__tech-icon" fill="currentColor">
                    <path d="M12 13.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                    <ellipse cx="12" cy="12" rx="10" ry="4" fill="none" stroke="currentColor" strokeWidth="1" />
                    <ellipse cx="12" cy="12" rx="10" ry="4" fill="none" stroke="currentColor" strokeWidth="1" transform="rotate(60 12 12)" />
                    <ellipse cx="12" cy="12" rx="10" ry="4" fill="none" stroke="currentColor" strokeWidth="1" transform="rotate(120 12 12)" />
                </svg>
            )
        },
        {
            name: 'Node.js', icon: (
                <svg viewBox="0 0 24 24" className="trust-bar__tech-icon" fill="currentColor">
                    <path d="M12 1.85c-.27 0-.55.07-.78.2l-7.44 4.3c-.48.28-.78.8-.78 1.36v8.58c0 .56.3 1.08.78 1.36l1.95 1.12c.95.46 1.27.46 1.69.46 1.38 0 2.17-.84 2.17-2.3V8.44c0-.12-.09-.21-.21-.21h-.93c-.12 0-.22.09-.22.21v8.19c0 .65-.67 1.3-1.76.75L4.44 16.3c-.07-.04-.12-.12-.12-.21V7.7c0-.09.05-.17.12-.21l7.44-4.29c.07-.04.15-.04.22 0l7.44 4.29c.07.04.12.12.12.21v8.39c0 .09-.05.17-.12.21l-7.44 4.29c-.07.04-.15.04-.22 0l-1.91-1.13c-.06-.03-.13-.04-.19-.01-.53.3-.63.34-1.13.51-.12.04-.31.11.07.32l2.48 1.47c.24.14.51.21.78.21s.55-.07.78-.2l7.44-4.3c.48-.28.78-.8.78-1.36V7.7c0-.56-.3-1.08-.78-1.36l-7.44-4.3c-.23-.13-.5-.2-.78-.2z" />
                </svg>
            )
        },
        {
            name: 'Android', icon: (
                <svg viewBox="0 0 24 24" className="trust-bar__tech-icon" fill="currentColor">
                    <path d="M6 18c0 .55.45 1 1 1h1v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h2v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h1c.55 0 1-.45 1-1V8H6v10zM3.5 8C2.67 8 2 8.67 2 9.5v7c0 .83.67 1.5 1.5 1.5S5 17.33 5 16.5v-7C5 8.67 4.33 8 3.5 8zm17 0c-.83 0-1.5.67-1.5 1.5v7c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-7c0-.83-.67-1.5-1.5-1.5zm-4.97-5.84l1.3-1.3c.2-.2.2-.51 0-.71-.2-.2-.51-.2-.71 0l-1.48 1.48C13.85 1.23 12.95 1 12 1c-.96 0-1.86.23-2.66.63L7.85.15c-.2-.2-.51-.2-.71 0-.2.2-.2.51 0 .71l1.31 1.31C6.97 3.26 6 5.01 6 7h12c0-1.99-.97-3.75-2.47-4.84zM10 5H9V4h1v1zm5 0h-1V4h1v1z" />
                </svg>
            )
        },
        {
            name: 'iOS', icon: (
                <svg viewBox="0 0 24 24" className="trust-bar__tech-icon" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
            )
        },
        {
            name: 'TypeScript', icon: (
                <svg viewBox="0 0 24 24" className="trust-bar__tech-icon" fill="currentColor">
                    <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z" />
                </svg>
            )
        },
    ];

    const badges = [
        { name: 'SLASSCOM Member', status: 'Pending' },
        { name: 'ISO 27001', status: 'In Progress' },
    ];

    return (
        <section className="trust-bar">
            <div className="trust-bar__container">
                <div className="trust-bar__content">
                    {/* Tech Stack */}
                    <div className="trust-bar__tech">
                        <span className="trust-bar__tech-label">Our Stack</span>
                        <div className="trust-bar__tech-icons">
                            {techStack.map((tech) => (
                                <div key={tech.name} className="trust-bar__tech-item">
                                    {tech.icon}
                                    <span className="trust-bar__tech-name">{tech.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Divider */}
                    <div className="trust-bar__divider" />

                    {/* Badges */}
                    <div className="trust-bar__badges">
                        {badges.map((badge) => (
                            <div key={badge.name} className="trust-bar__badge">
                                <svg className="trust-bar__badge-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                </svg>
                                <span className="trust-bar__badge-text">{badge.name}</span>
                                <span className="trust-bar__badge-status">({badge.status})</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TrustBar;
