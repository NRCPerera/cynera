import React from 'react';
import './CaseStudy.css';

const CaseStudy = () => {
    const metrics = [
        { value: '300+', label: 'Active Members' },
        { value: '85%', label: 'Digital Adoption' },
        { value: '60%', label: 'Time Saved' },
        { value: '4.8★', label: 'App Rating' },
    ];

    const features = [
        'Member mobile app (iOS & Android)',
        'Instructor portal & scheduling',
        'Online payment integration (PayHere)',
        'Workout tracking & progress analytics',
        'Coffee bar ordering system',
        'Admin dashboard & reporting',
    ];

    return (
        <section id="case-study" className="case-study">
            {/* Background decoration */}
            <div className="case-study__bg-orb" />

            {/* Section header */}
            <div className="case-study__header">
                <span className="case-study__label">Featured Case Study</span>
                <h2 className="case-study__title">
                    How We Digitized a{' '}
                    <span className="case-study__title-accent">Local Gym's Operations</span>
                </h2>
                <p className="case-study__description">
                    A complete digital ecosystem for Get-Fit Gym — from member management
                    to payment processing, all in one unified platform.
                </p>
            </div>

            <div className="case-study__content">
                <div className="case-study__grid">
                    {/* Left: Mockups */}
                    <div className="case-study__mockups">
                        {/* Phone mockup */}
                        <div className="case-study__phone-container">
                            <div className="case-study__phone">
                                <div className="case-study__phone-screen">
                                    {/* Phone screen content */}
                                    <div className="case-study__phone-content">
                                        {/* Status bar */}
                                        <div className="case-study__phone-status">
                                            <span>9:41</span>
                                            <div className="case-study__phone-battery" />
                                        </div>

                                        {/* App header */}
                                        <div className="case-study__phone-header">
                                            <div className="case-study__phone-logo">
                                                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                                </svg>
                                            </div>
                                            <span className="case-study__phone-app-name">Get-Fit</span>
                                        </div>

                                        {/* Stats cards */}
                                        <div className="case-study__phone-stats">
                                            <div className="case-study__phone-stat-card">
                                                <div className="case-study__phone-stat-value">12</div>
                                                <div className="case-study__phone-stat-label">Workouts</div>
                                            </div>
                                            <div className="case-study__phone-stat-card">
                                                <div className="case-study__phone-stat-value">8.5k</div>
                                                <div className="case-study__phone-stat-label">Calories</div>
                                            </div>
                                        </div>

                                        {/* Progress bar */}
                                        <div className="case-study__phone-progress">
                                            <div className="case-study__phone-progress-header">
                                                <span className="case-study__phone-progress-label">Weekly Goal</span>
                                                <span className="case-study__phone-progress-value">75%</span>
                                            </div>
                                            <div className="case-study__phone-progress-bar">
                                                <div className="case-study__phone-progress-fill" />
                                            </div>
                                        </div>

                                        {/* Quick actions */}
                                        <div className="case-study__phone-cta">
                                            <div className="case-study__phone-button">Start Workout</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Glow effect */}
                            <div className="case-study__phone-glow" />
                        </div>

                        {/* Laptop mockup */}
                        <div className="case-study__laptop-container">
                            <div className="case-study__laptop">
                                <div className="case-study__laptop-screen">
                                    {/* Screen content */}
                                    <div className="case-study__laptop-content">
                                        {/* Header */}
                                        <div className="case-study__laptop-header">
                                            <div className="case-study__laptop-logo-group">
                                                <div className="case-study__laptop-logo" />
                                                <span className="case-study__laptop-title">Admin Dashboard</span>
                                            </div>
                                            <div className="case-study__laptop-dots">
                                                <div className="case-study__laptop-dot case-study__laptop-dot--red" />
                                                <div className="case-study__laptop-dot case-study__laptop-dot--yellow" />
                                                <div className="case-study__laptop-dot case-study__laptop-dot--green" />
                                            </div>
                                        </div>

                                        {/* Mini chart */}
                                        <div className="case-study__laptop-stats">
                                            <div className="case-study__laptop-stat">
                                                <div className="case-study__laptop-stat-label">Members</div>
                                                <div className="case-study__laptop-stat-value">324</div>
                                            </div>
                                            <div className="case-study__laptop-stat">
                                                <div className="case-study__laptop-stat-label">Revenue</div>
                                                <div className="case-study__laptop-stat-value case-study__laptop-stat-value--accent">LKR 1.2M</div>
                                            </div>
                                            <div className="case-study__laptop-stat">
                                                <div className="case-study__laptop-stat-label">Active</div>
                                                <div className="case-study__laptop-stat-value">89%</div>
                                            </div>
                                        </div>

                                        {/* Chart placeholder */}
                                        <div className="case-study__laptop-chart">
                                            {[40, 65, 45, 80, 55, 90, 70].map((h, i) => (
                                                <div
                                                    key={i}
                                                    className="case-study__chart-bar"
                                                    style={{ height: `${h}%` }}
                                                />
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Laptop base */}
                            <div className="case-study__laptop-base" />
                        </div>
                    </div>

                    {/* Right: Content */}
                    <div className="case-study__details">
                        {/* Client badge */}
                        <div className="case-study__client-badge">
                            <div className="case-study__client-avatar">
                                <span>GF</span>
                            </div>
                            <span className="case-study__client-name">Get-Fit Gym & Coffee Bar</span>
                            <span className="case-study__client-status">Live</span>
                        </div>

                        {/* Description */}
                        <h3 className="case-study__details-title">
                            Complete Digital Ecosystem for a Modern Gym
                        </h3>
                        <p className="case-study__details-text">
                            When Get-Fit Gym approached us, they were managing everything manually —
                            member registrations, payments, class schedules. We built a comprehensive
                            solution that transformed their operations and enhanced member experience.
                        </p>

                        {/* Features list */}
                        <div className="case-study__features">
                            {features.map((feature, index) => (
                                <div key={index} className="case-study__feature">
                                    <div className="case-study__feature-icon">
                                        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <span className="case-study__feature-text">{feature}</span>
                                </div>
                            ))}
                        </div>

                        {/* Metrics */}
                        <div className="case-study__metrics">
                            {metrics.map((metric, index) => (
                                <div key={index} className="case-study__metric">
                                    <div className="case-study__metric-value">{metric.value}</div>
                                    <div className="case-study__metric-label">{metric.label}</div>
                                </div>
                            ))}
                        </div>

                        {/* CTA */}
                        <a href="#contact" className="case-study__cta">
                            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                            </svg>
                            Discuss Your Project
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CaseStudy;
