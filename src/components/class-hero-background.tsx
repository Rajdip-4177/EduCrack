'use client';

export default function ClassHeroBackground() {
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
                        filter: blur(50px) brightness(0.8);
                        width: 100%;
                        height: 100%;
                    }
                    .g1, .g2, .g3, .g4, .g5 {
                        position: absolute;
                        border-radius: 100%;
                        mix-blend-mode: screen;
                        opacity: 0.7;
                    }
                    .g1 {
                        background: radial-gradient(circle at center, rgba(173, 58, 223, 0.6) 0, rgba(173, 58, 223, 0) 60%) no-repeat;
                        width: 60vw;
                        height: 60vh;
                        top: 10%;
                        left: 10%;
                        animation: drift-g1 20s infinite alternate ease-in-out;
                    }
                    .g2 {
                        background: radial-gradient(circle at center, rgba(98, 0, 153, 0.6) 0, rgba(98, 0, 153, 0) 60%) no-repeat;
                        width: 50vw;
                        height: 50vh;
                        top: 40%;
                        right: 15%;
                        animation: drift-g2 22s infinite alternate ease-in-out;
                    }
                    .g3 {
                        background: radial-gradient(circle at center, rgba(74, 20, 140, 0.5) 0, rgba(74, 20, 140, 0) 70%) no-repeat;
                        width: 80vw;
                        height: 80vh;
                        bottom: -20%;
                        left: 25%;
                        animation: pulse-g3 18s infinite alternate ease-in-out;
                    }
                     .g4 {
                        background: radial-gradient(circle at center, rgba(30, 0, 60, 0.7) 0, rgba(30, 0, 60, 0) 60%) no-repeat;
                        width: 40vw;
                        height: 40vh;
                        top: 5%;
                        right: 5%;
                        animation: drift-g1 25s infinite alternate ease-in-out;
                    }
                    .g5 {
                         background: radial-gradient(circle at center, rgba(156, 39, 176, 0.5) 0, rgba(156, 39, 176, 0) 70%) no-repeat;
                        width: 55vw;
                        height: 55vh;
                        bottom: 5%;
                        left: -10%;
                        animation: drift-g2 19s infinite alternate ease-in-out;
                    }
                    @keyframes drift-g1 {
                        from { transform: translate(-5vw, -5vh) scale(1); }
                        to { transform: translate(5vw, 5vh) scale(1.1); }
                    }
                    @keyframes drift-g2 {
                        from { transform: translate(8vw, 10vh) scale(1); }
                        to { transform: translate(-8vw, -10vh) scale(0.9); }
                    }
                    @keyframes pulse-g3 {
                        from { transform: scale(1); opacity: 0.5; }
                        to { transform: scale(1.3); opacity: 0.7; }
                    }
                `}
            </style>
        </div>
    );
}
