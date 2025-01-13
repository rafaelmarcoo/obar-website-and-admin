import { useState, useEffect } from "react"
import { autoArrayOne } from "../constants"

const AutoImgOne = () => {
    const duplicatedImgs = [...autoArrayOne, ...autoArrayOne];
    const [scrollPos, setScrollPos] = useState(0);

    useEffect(() => {
        const scrollContainer = document.getElementById('gallery-container-one');

        const handleScroll = () => {
            if(scrollContainer) {
                if(scrollPos >= scrollContainer.scrollWidth / 2) {
                    scrollContainer.scrollLeft = 0;
                    setScrollPos(0);
                }
            }
        };

        const animate = () => {
            if(scrollContainer) {
                setScrollPos(prev => prev + 1);
                scrollContainer.scrollLeft = scrollPos;
            }
        };

        const animation = setInterval(animate, 20);
        scrollContainer?.addEventListener('scroll', handleScroll);

        return () => {
            clearInterval(animation);
            scrollContainer?.removeEventListener('scroll', handleScroll);
        };
    }, [scrollPos]);

    return (
    <div className="w-full bg-orange-200 py-12">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
            <div
                id="gallery-container-one"
                className="flex overflow-x-hidden gap-4 py-4 select-none"
            >
                {duplicatedImgs.map((image, index) => (
                    <div 
                        key={`${image.id}-${index}`}
                        className="flex-none w-80 h-60 relative rounded-lg overflow-hidden transform transition-transform hover:scale-105"
                    >
                        <img 
                            src={image.src}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute index-0 bg-black/20 hover:bg-black/30 transition-colors"></div>
                    </div>
                ))}
            </div>
        </div>
    </div>
    )
}

export default AutoImgOne