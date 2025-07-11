'use client';

const Shape = ({ id, size, top, left, duration, delay }: { id: number; size: number; top: string; left: string; duration: string; delay: string; }) => (
    <div
        className="absolute rounded-full"
        style={{
            width: `${size}px`,
            height: `${size}px`,
            top,
            left,
            animation: `drift ${duration} ${delay} infinite linear`,
            background: `radial-gradient(circle, hsla(291, 65%, 42%, 0.3) 0%, hsla(289, 67%, 35%, 0.1) 100%)`,
            filter: 'blur(20px)',
        }}
    />
);


export default function HeroBackground() {
    const shapes = [
        { id: 1, size: 400, top: '10%', left: '5%', duration: '25s', delay: '0s' },
        { id: 2, size: 300, top: '20%', left: '80%', duration: '30s', delay: '-5s' },
        { id: 3, size: 200, top: '70%', left: '15%', duration: '20s', delay: '-10s' },
        { id: 4, size: 350, top: '60%', left: '60%', duration: '35s', delay: '-15s' },
        { id: 5, size: 250, top: '5%', left: '40%', duration: '28s', delay: '-2s' },
    ];

    return (
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-primary via-black to-accent overflow-hidden">
            <style>
                {`
                    @keyframes drift {
                        0% { transform: translate(0, 0) rotate(0deg); }
                        25% { transform: translate(20px, 40px) rotate(90deg); }
                        50% { transform: translate(-30px, -10px) rotate(180deg); }
                        75% { transform: translate(10px, -50px) rotate(270deg); }
                        100% { transform: translate(0, 0) rotate(360deg); }
                    }
                `}
            </style>
            {shapes.map(shape => <Shape key={shape.id} {...shape} />)}
        </div>
    );
}
