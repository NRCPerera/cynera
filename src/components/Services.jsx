import React from 'react';
import './Services.css';

const Services = () => {
    const services = [
        {
            id: 1,
            title: 'Custom Mobile Apps',
            subtitle: 'Android & iOS',
            description: 'Native and cross-platform mobile applications that deliver exceptional user experiences. From concept to App Store.',
            icon: (
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
            ),
            features: ['React Native', 'Swift & Kotlin', 'App Store Optimization', 'Push Notifications'],
            bgClass: 'services__card-bg--blue',
        },
        {
            id: 2,
            title: 'Modern Web Development',
            subtitle: 'React & Node.js',
            description: 'Scalable, performant web applications built with cutting-edge technologies and best practices.',
            icon: (
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
            ),
            features: ['React & Next.js', 'Node.js & Express', 'PostgreSQL & MongoDB', 'Cloud Deployment'],
            bgClass: 'services__card-bg--purple',
        },
        {
            id: 3,
            title: 'Digital Business Transformation',
            subtitle: 'Strategy & Execution',
            description: 'End-to-end digital transformation solutions to modernize your business operations and drive growth.',
            icon: (
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
            ),
            features: ['Process Automation', 'Cloud Migration', 'Data Analytics', 'Integration Services'],
            bgClass: 'services__card-bg--teal',
        },
    ];

    const stats = [
        { value: '50+', label: 'Projects Delivered' },
        { value: '15+', label: 'Happy Clients' },
        { value: '99%', label: 'Satisfaction Rate' },
        { value: '24/7', label: 'Support Available' },
    ];

    return (
        <section id="services" className="services">
            {/* Section Header */}
            <div className="services__header">
                <span className="services__label">What We Do</span>
                <h2 className="services__title">
                    Services That Drive{' '}
                    <span className="services__title-accent">Real Results</span>
                </h2>
                <p className="services__description">
                    We combine technical excellence with business understanding to deliver
                    solutions that make a measurable impact on your bottom line.
                </p>
            </div>

            {/* Bento Grid */}
            <div className="services__grid">
                {services.map((service) => (
                    <div key={service.id} className="services__card">
                        {/* Background gradient */}
                        <div className={`services__card-bg ${service.bgClass}`} />

                        <div className="services__card-content">
                            {/* Icon */}
                            <div className="services__card-icon">
                                {service.icon}
                            </div>

                            {/* Content */}
                            <div>
                                <span className="services__card-subtitle">{service.subtitle}</span>
                                <h3 className="services__card-title">{service.title}</h3>
                                <p className="services__card-text">{service.description}</p>
                            </div>

                            {/* Features */}
                            <div className="services__features">
                                {service.features.map((feature, idx) => (
                                    <div key={idx} className="services__feature">
                                        <svg className="services__feature-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        {feature}
                                    </div>
                                ))}
                            </div>

                            {/* Arrow */}
                            <div className="services__card-arrow">
                                <span>Learn more</span>
                                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Stats row */}
            <div className="services__stats">
                {stats.map((stat, index) => (
                    <div key={index} className="services__stat">
                        <div className="services__stat-value">{stat.value}</div>
                        <div className="services__stat-label">{stat.label}</div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Services;
