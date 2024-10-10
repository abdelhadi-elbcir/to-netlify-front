

const AnnoucementSlider = () => {


    return (<div className="md:w-2/3">
        <div className="relative aspect-video mb-4">
            <img src="https://t4.ftcdn.net/jpg/00/53/45/31/360_F_53453175_hVgYVz0WmvOXPd9CNzaUcwcibiGao3CL.jpg" alt="Mountain landscape" className="w-full h-full object-cover rounded-lg" />
        </div>
        <div className="flex gap-2 overflow-x-auto">
            {[...Array(6)].map((_, i) => (
                <img key={i} src={`https://t4.ftcdn.net/jpg/00/53/45/31/360_F_53453175_hVgYVz0WmvOXPd9CNzaUcwcibiGao3CL.jpg`} alt={`Thumbnail ${i + 1}`} className="w-24 h-24 object-cover rounded-md" />
            ))}
        </div>
    </div>)
}

export default AnnoucementSlider;