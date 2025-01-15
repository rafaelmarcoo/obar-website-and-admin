import homeImg from "../assets/Home.jpg";

const HomeSection = () => {
    const handleScroll = (event, targetId) => {
        event.preventDefault();
        const targetElement = document.getElementById(targetId);
        if(targetElement) {
            const offsetTop = targetElement.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: "smooth",
            });
        }
        setMenuBar(false);
    }

    return (
        <div id="home" className="relative min-h-screen w-full flex items-center justify-center overflow-hidden pt-24">
            <div className="absolute inset-0 h-full w-full">
                <img
                    src={homeImg} 
                    alt="homeImg"
                    className="w-full h-full object-cover opacity-50"
                />
            </div>
            <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-red-400">A Korean Feast Awaits</h1>
                <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium text-neutral-200 max-w-2xl mx-auto leading-relaxed">Savor the Authentic Korean Flavors of Korea. Experience the Perfect Blend of Tradition and Taste</h2>
                <div className="flex lg:hidden justify-center items-center text-xl p-10">
                    <a 
                        className="bg-gradient-to-r from-red-300 to-red-600 p-2 rounded-md"
                        href={`#contact`}
                        onClick={(e) => handleScroll(e, "contact")}>
                        Book Now!
                    </a>
                </div>
            </div>
        </div>
    )
}

export default HomeSection