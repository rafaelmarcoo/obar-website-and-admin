import homeImg from "../assets/Home.jpg";

const HomeSection = () => {
  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 h-full w-full overflow-hidden">
            <img
                src={homeImg} 
                alt="homeImg"
                className="w-full h-full object-cover opacity-50"
            />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-red-400">A Korean Feast Awaits</h1>
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium text-neutral-200 max-w-2xl mx-auto leading-relaxed">Savor the Authentic Korean Flavors of Korea. Experience the Perfect Blend of Tradition and Taste</h2>
        </div>
    </div>
  )
}

export default HomeSection