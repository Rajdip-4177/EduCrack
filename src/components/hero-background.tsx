'use client';

export default function HeroBackground() {
    return (
        <div className="absolute inset-0 z-0 overflow-hidden bg-[#0a001a]">
             <div className="hero-gradient-bg">
                <div className="hero-gradients-container">
                    <div className="hero-g1"></div>
                    <div className="hero-g2"></div>
                    <div className="hero-g3"></div>
                    <div className="hero-g4"></div>
                    <div className="hero-g5"></div>
                </div>
            </div>
        </div>
    );
}
