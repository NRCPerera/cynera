import React from 'react';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero">
            {/* Background gradient */}
            <div className="hero__bg-gradient" />

            {/* Animated background elements */}
            <div className="hero__bg-elements">
                <div className="hero__orb hero__orb--1" />
                <div className="hero__orb hero__orb--2" />
                <div className="hero__orb hero__orb--3" />
            </div>

            {/* Grid pattern overlay */}
            <div className="hero__grid" />

            {/* Content */}
            <div className="hero__content">
                {/* Badge */}
                <div className="hero__badge">
                    <span className="hero__badge-dot" />
                    <span className="hero__badge-text">Sri Lanka's Premier Digital Partner</span>
                </div>

                {/* Main headline */}
                <h1 className="hero__headline">
                    Transforming Sri Lankan<br />
                    Businesses with{' '}
                    <span className="hero__headline-accent">Custom Digital Solutions</span>
                </h1>

                {/* Subtext */}
                <p className="hero__subtext">
                    We build powerful mobile apps and modern web platforms that help local businesses
                    compete globally. From Android & iOS apps to React-powered websites.
                </p>

                {/* CTA buttons */}
                <div className="hero__cta-group">
                    <a href="#case-study" className="hero__cta-primary">
                        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                        </svg>
                        View Our Portfolio
                    </a>
                    <a href="#contact" className="hero__cta-secondary">
                        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        Book a Free Consultation
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
