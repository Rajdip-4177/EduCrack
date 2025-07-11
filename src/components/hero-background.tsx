'use client';

export default function HeroBackground() {
    return (
        <div className="absolute inset-0 z-0 overflow-hidden bg-[#0a001a]">
             <div className="gradient-bg">
                <div className="gradients-container">
                    <div className="g1"></div>
                    <div className="g2"></div>
                    <div className="g3"></div>
                    <div className="g4"></div>
                    <div className="g5"></div>
                </div>
            </div>
            <style>
                {`
                    .gradient-bg {
                        width: 100vw;
                        height: 100vh;
                        position: relative;
                        overflow: hidden;
                        background: transparent;
                        top: 0;
                        left: 0;
                    }
                    .gradients-container {
                        filter: blur(40px);
                        width: 100%;
                        height: 100%;
                    }
                    .g1, .g2, .g3, .g4, .g5 {
                        position: absolute;
                        border-radius: 100%;
                        mix-blend-mode: screen;
                    }
                    .g1 {
                        background: radial-gradient(circle at center, rgba(123, 31, 162, 0.8) 0, rgba(123, 31, 162, 0) 50%) no-repeat;
                        width: 70vw;
                        height: 70vh;
                        top: calc(50% - 35vh);
                        left: calc(50% - 35vw);
                        transform-origin: center center;
                        animation: move-g1 15s infinite;
                    }
                    .g2 {
                        background: radial-gradient(circle at center, rgba(156, 39, 176, 0.8) 0, rgba(156, 39, 176, 0) 50%) no-repeat;
                        width: 70vw;
                        height: 70vh;
                        top: calc(50% - 35vh);
                        left: calc(50% - 35vw);
                        transform-origin: top center;
                        animation: move-g2 15s infinite;
                    }
                    .g3 {
                        background: radial-gradient(circle at center, rgba(74, 20, 140, 0.8) 0, rgba(74, 20, 140, 0) 50%) no-repeat;
                        width: 60vw;
                        height: 60vh;
                        top: calc(50% - 30vh + 10vh);
                        left: calc(50% - 30vw - 10vw);
                        transform-origin: center center;
                        animation: move-g3 15s infinite;
                    }
                     .g4 {
                        background: radial-gradient(circle at center, rgba(21, 0, 48, 0.8) 0, rgba(21, 0, 48, 0) 50%) no-repeat;
                        width: 50vw;
                        height: 50vh;
                        top: calc(50% - 25vh);
                        left: calc(50% - 25vw);
                        transform-origin: center center;
                        animation: move-g4 18s infinite;
                    }
                    @keyframes move-g1 {
                        0% { transform: translate(0, 0) rotate(0deg) scale(1); }
                        25% { transform: translate(10vw, -10vh) rotate(90deg) scale(1.1); }
                        50% { transform: translate(-15vw, 15vh) rotate(180deg) scale(0.9); }
                        75% { transform: translate(5vw, -5vh) rotate(270deg) scale(1.2); }
                        100% { transform: translate(0, 0) rotate(360deg) scale(1); }
                    }
                    @keyframes move-g2 {
                        0% { transform: translate(0, 0) rotate(0deg) scale(1.2); }
                        25% { transform: translate(-12vw, 8vh) rotate(-90deg) scale(1); }
                        50% { transform: translate(10vw, -10vh) rotate(-180deg) scale(1.3); }
                        75% { transform: translate(-8vw, 12vh) rotate(-270deg) scale(1.1); }
                        100% { transform: translate(0, 0) rotate(-360deg) scale(1.2); }
                    }
                    @keyframes move-g3 {
                        0% { transform: scale(1); }
                        50% { transform: scale(1.5); }
                        100% { transform: scale(1); }
                    }
                     @keyframes move-g4 {
                        0% { transform: translate(0, 0); }
                        50% { transform: translate(20vw, 20vh); }
                        100% { transform: translate(0, 0); }
                    }
                `}
            </style>
        </div>
    );
}
