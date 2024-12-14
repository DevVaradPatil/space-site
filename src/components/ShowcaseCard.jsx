import React, { useEffect, useRef, useState } from 'react';

const ShowcaseCard = ({ video, title, subtitle }) => {
    const videoRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            { threshold: 0.5 } // Adjust threshold as needed (0.5 means 50% visibility)
        );

        if (videoRef.current) {
            observer.observe(videoRef.current);
        }

        return () => {
            if (videoRef.current) {
                observer.unobserve(videoRef.current);
            }
        };
    }, []);

    return (
        <div
            ref={videoRef}
            className="relative rounded-lg w-[300px] h-[600px] overflow-hidden shadow-lg"
        >
            {isVisible && (
                <video
                    src={video}
                    autoPlay
                    loop
                    muted
                    className="w-full h-full object-cover"
                />
            )}
            <div className="absolute top-0 left-0 p-4 bg-black/10 text-white">
                <h3 className="text-lg font-bold">{title}</h3>
                <p className="text-sm">{subtitle}</p>
            </div>
        </div>
    );
};

export default ShowcaseCard;
