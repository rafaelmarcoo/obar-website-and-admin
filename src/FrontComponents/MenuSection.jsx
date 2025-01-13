import { ArrowLeft, ArrowRight } from "lucide-react";
import special from "../assets/specials/1.jpg";
import { menuArray } from "../constants";

const MenuSection = () => {

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
                        <div className="overflow-hidden relative rounded-lg">
                            <div 
                                className="flex transition-transform duration-500 ease-out"
                            >
                                {menuArray.map((menu, index) => (
                                    <div 
                                        key={index}
                                        className="w-full flex-shrink-0"
                                    >
                                        <img 
                                            key={index}
                                            src={menu.src}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    
                                ))}
                            </div>
                            <div className="flex items-center justify-center py-2 gap-2">
                                <ArrowLeft />
                                <ArrowRight />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MenuSection