interface AspectRatioProps {
    ratio: number; // Aspect ratio as a number (e.g., 16 / 9)
    children: React.ReactNode;
    className?: string; // Optional className for custom styling
}

function AspectRatio({ ratio, children, className }: AspectRatioProps) {
    const aspectRatio = (1 / ratio) * 100; // Calculate padding-bottom percentage from ratio

    return (
        <div
            className={className}
            style={{
                position: "relative",
                width: "100%",
                paddingBottom: `${aspectRatio}%`, // Maintain the aspect ratio with padding-bottom
                height: 0,
            }}
        >
            <div
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                }}
            >
                {children}
            </div>
        </div>
    );
}

export { AspectRatio };
