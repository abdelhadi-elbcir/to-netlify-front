const AnnoucementSlider = ({ stops }) => {
        
    if (!stops || stops.length === 0) {
        return <div>Pas d'image</div>;
    }

    return (
        <div className="md:w-2/3">
            <div className="relative aspect-video mb-4">
                <img
                    src={stops[0]?.picture?.urlImage || "https://t4.ftcdn.net/jpg/00/53/45/31/360_F_53453175_hVgYVz0WmvOXPd9CNzaUcwcibiGao3CL.jpg"}
                    alt="Mountain landscape"
                    className="w-full h-full shadow object-cover rounded-lg"
                />
            </div>
            <div className="flex gap-2 overflow-x-auto">
                {stops.slice(1).map((stop, i) => (
                    <img
                        key={i}
                        src={stop?.picture?.urlImage || "https://t4.ftcdn.net/jpg/00/53/45/31/360_F_53453175_hVgYVz0WmvOXPd9CNzaUcwcibiGao3CL.jpg"}
                        alt={`Thumbnail ${i + 1}`}
                        className="w-24 h-24 object-cover shadow rounded-md"
                    />
                ))}
            </div>
        </div>
    );
};

export default AnnoucementSlider;
