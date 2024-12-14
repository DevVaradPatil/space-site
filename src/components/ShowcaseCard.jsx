import React from 'react'

const ShowcaseCard = ({ video, title, subtitle }) => {
    return (
        <div className="relative rounded-lg w-[300px] h-[600px] overflow-hidden shadow-lg">
            <video
                src={video}
                autoPlay
                loop
                muted
                className="w-full h-full object-cover"
            />
            <div className="absolute top-0 left-0 p-4 bg-black/10 text-white">
                <h3 className="text-lg font-bold">{title}</h3>
                <p className="text-sm">{subtitle}</p>
            </div>
        </div>
    );
};

export default ShowcaseCard;