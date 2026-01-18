import React from 'react';
import './WhyUs.css';

const WhyUs = () => {
    const benefits = [
        {
            icon: (
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
            ),
            title: 'Local Market Expertise',
            description: 'We understand the Sri Lankan business landscape, payment ecosystems like PayHere, and what local consumers expect.',
        },
        {
            icon: (
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
            title: 'Same Timezone Support',
            description: 'No waiting for offshore teams to wake up. Get real-time support and quick response times during your business hours.',
        },
        {
            icon: (
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
            ),
            title: 'Global Quality Standards',
            description: 'We follow international best practices in code quality, security, and user experience — matching what you\'d expect from top-tier agencies worldwide.',
        },
        {
            icon: (
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
            ),
            title: 'Face-to-Face Meetings',
            description: 'Build trust through in-person meetings at your office or ours. Nothing beats a face-to-face discussion for complex projects.',
        },
        {
            icon: (
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
            title: 'Cost-Effective Solutions',
            description: 'Get premium development at competitive rates. Lower operational costs mean more value for your investment.',
        },
        {
            icon: (
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
            ),
            title: 'Agile & Flexible',
            description: 'Quick iterations, transparent communication, and flexibility to adapt as your requirements evolve during the project.',
        },
    ];

    return (
        <section id="why-us" className="why-us">
            {/* Background decoration */}
            <div className="why-us__bg-orb" />

            <div className="why-us__content">
                {/* Section Header */}
                <div className="why-us__header">
                    <span className="why-us__label">Why Choose Us</span>
                    <h2 className="why-us__title">
                        Your Local Partner for{' '}
                        <span className="why-us__title-accent">Global Success</span>
                    </h2>
                    <p className="why-us__description">
                        Working with a Sri Lankan IT partner means you get the best of both worlds —
                        local understanding with international quality.
                    </p>
                </div>

                {/* Benefits Grid */}
                <div className="why-us__grid">
                    {benefits.map((benefit, index) => (
                        <div key={index} className="why-us__card">
                            {/* Icon */}
                            <div className="why-us__card-icon">
                                {benefit.icon}
                            </div>

                            {/* Content */}
                            <h3 className="why-us__card-title">{benefit.title}</h3>
                            <p className="why-us__card-text">{benefit.description}</p>
                        </div>
                    ))}
                </div>

                {/* CTA Banner */}
                <div className="why-us__cta-banner">
                    <div className="why-us__cta-content">
                        <h3 className="why-us__cta-title">
                            Ready to Transform Your Business?
                        </h3>
                        <p className="why-us__cta-text">
                            Let's discuss how we can help you achieve your digital goals.
                            Book a free 30-minute consultation with our team.
                        </p>
                        <div className="why-us__cta-buttons">
                            <a href="#contact" className="why-us__cta-primary">
                                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                                Schedule a Call
                            </a>
                            <a
                                href="https://wa.me/94713846415"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="why-us__cta-whatsapp"
                            >
                                <svg fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                </svg>
                                Chat on WhatsApp
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyUs;
