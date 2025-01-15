import { ArrowLeft, ArrowRight } from "lucide-react";
import special from "../assets/specials/1.jpg";
import { menuArray } from "../constants";
import { useState } from "react";

const MenuSection = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => 
            prevIndex === menuArray.length - 1 ? 0 : prevIndex+ 1
        );
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => 
            prevIndex === 0 ? menuArray.length - 1 : prevIndex - 1
        );
    };

    return (
        <div className="w-full py-12 bg-neutral-950">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold text-center">This Week's Special!</h2>
                        <div className="rounded-lg overflow-hidden transform transition-transform hover:scale-105">
                            <img 
                                src={special}
                                className="w-full h-full"
                            />
                        </div>
                    </div>
                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold text-center">Our Menu:</h2>
                        <div className="overflow-hidden h-[600px] relative rounded-lg">
                            <div 
                                className="flex transition-transform duration-500 ease-out"
                                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                            >
                                {menuArray.map((menu, index) => (
                                    <div 
                                        key={index}
                                        className="w-full flex-shrink-0"
                                    >
                                        <img 
                                            src={menu.src}
                                            className="w-full h-full object-contain"
                                        />
                                    </div>
                                ))}
                            </div>
                            <div className="flex items-center justify-center py-2 gap-5">
                                <button 
                                    onClick={prevSlide}
                                    className="p-2 rounded-full bg-black/50 hover:bg-black/70 transition-colors"
                                >
                                    <ArrowLeft className="w-6 h-6"/>
                                </button>
                                <button 
                                    onClick={nextSlide}
                                    className="p-2 rounded-full bg-black/50 hover:bg-black/70 transition-colors"
                                >
                                    <ArrowRight className="w-6 h-6"/>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MenuSection