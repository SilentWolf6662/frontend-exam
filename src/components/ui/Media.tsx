import type React from 'react';
import { useState } from 'react';

interface MediaProps {
    src: string;
    type: 'mp4' | 'youtube';
    captions?: string; // Optional captions file for video or audio
}

const Media: React.FC<MediaProps> = ({ src, type, captions }) => {
    const [error, setError] = useState(false);

    if (error) {
        return <p>Failed to load media.</p>;
    }

    if (type === 'mp4') {
        return (
            // biome-ignore lint/a11y/useMediaCaption: Already using it
            <video
                controls
                width="100%"
                onError={() => setError(true)}
            >
                {captions && (
                    <track
                        src={captions}
                        kind="subtitles"
                        srcLang="en"
                        label="English"
                        default
                    />
                )}
                <source src={src} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        );
    }

    if (type === 'youtube') {
        const videoId = src.split('v=')[1]?.split('&')[0];
        if (!videoId) {
            return <p>Invalid YouTube link.</p>;
        }
        return (
            <iframe
                width="100%"
                height="315"
                src={`${src.replace("watch?v=", "embed/")}?autoplay=1`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                onError={() => setError(true)}
            >
                Your browser does not support the iframe tag.
            </iframe>
        );
    }

    return <p>Unsupported media type.</p>;
};

export default Media;
