import { useState } from "react"
import Logo2 from "../assets/Logo/Logo1.jpg";
import { navItems } from "../constants";
import { X, Menu } from "lucide-react";

const Navbar = () => {
    const [menuBar, setMenuBar] = useState(false)
    const toggleMenuBar = () => {
        setMenuBar(!menuBar);
    };

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
        <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg">
            <div className="flex justify-between items-center ml-5 mr-5 p-3 border-b border-neutral-300">
                <img 
                    src={Logo2} 
                    alt="logo"
                    className="rounded-full w-20 h-20"
                />
                <div className="hidden space-x-6 lg:flex">
                    {navItems.map((item, index)=> (
                        <a 
                            key={index} 
                            href={item.href}
                            onClick={(e) => handleScroll(e, link.href)}
                            className="text-xl"
                        >
                            {item.label}
                        </a>
                    ))}
                </div>
                <div className="hidden lg:flex justify-center items-center text-xl">
                    <a 
                        className="bg-gradient-to-r from-red-300 to-red-600 p-2 rounded-md"
                        href="#contact">
                        Book Now!
                    </a>
                </div>
                <div className="lg:hidden md:flex flex-col justify-end">
                    <button onClick={toggleMenuBar}>
                        {menuBar ? <X /> : <Menu />}
                    </button>
                </div>
            </div>
            {menuBar && (
                    <div className="lg:hidden backdrop-blur-lg w-full p-12 flex flex-col justify-center items-center bg-neutral-800 space-y-6">
                        {navItems.map((item, index)=> (
                            <a 
                                key={index} 
                                href={item.href}
                                onClick={(e) => handleScroll(e, link.href)}
                                className="tracking-tighter text-xl"
                            >
                                {item.label}
                            </a>
                        ))}
                    </div>
                )}
        </nav>
    )
}

export default Navbar