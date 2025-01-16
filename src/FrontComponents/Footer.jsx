import { Home } from "lucide-react"

const Footer = () => {
  return (
    <footer className="w-full py-6 bg-neutral-950 px-6 sm:px-6m x-auto">
        <div className="max-w-7xl mx-auto border-t border-neutral-600">
            <div className="flex flex-row justify-between mt-6">
                <h2>
                    This website + admin setup is developed by
                    <a 
                        href="https://rafael-manubay.vercel.app/"
                        className="bg-gradient-to-r from-blue-300 to-blue-600 bg-clip-text text-transparent hover:text-red-400 transition-colors duration-200">
                        {" "}
                        Rafael Marco Manubay
                    </a>
                </h2>
                <a
                    className="hover:text-blue-400 transition-colors duration-200"
                >
                    <Home />
                </a>
            </div>
        </div>
    </footer>
  )
}

export default Footer