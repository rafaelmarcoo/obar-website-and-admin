import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"
import supabase from "../supabase-client";
import { ArrowLeft, ArrowRight } from "lucide-react";

const BookingsSection = () => {
    const navigate = useNavigate();
    const handleLogout = () => {
        sessionStorage.removeItem('token');
        navigate("/admin")
    }

    const [bookings, setBookings] = useState([]);
    const[selectedDate, setSelectedDate] = useState(() => {
        const today = new Date();
        return today.toISOString().split("T")[0];
    });
    
    const fetchData = async (date) => {
        try {
            const { data, error } = await supabase
                .from("bookings")
                .select("*")
                .eq("date", date);
            if(error) {
                throw error;
            }

            setBookings(data);
        } catch(error) {
            alert(error);
        }
    };

    useEffect(() => {
        fetchData(selectedDate);
    }, [selectedDate]);

    const handleNextDate = () => {
        const newDate = new Date(selectedDate);
        newDate.setDate(newDate.getDate() + 1);
        setSelectedDate(newDate.toISOString().split("T")[0]);
    }

    const handlePreviousDate = () => {
        const newDate = new Date(selectedDate);
        newDate.setDate(newDate.getDate() - 1);
        setSelectedDate(newDate.toISOString().split("T")[0]);
    }

    return (
        <div className="text-lg max-w-7xl mx-auto px-4">
            <div className="text-bold text-center mt-10">
                <h2 className="text-4xl">
                    Bookings for date:
                </h2>
                <h2 className="flex justify-center items-center text-2xl mt-4 p-2"> 
                    <ArrowLeft 
                        onClick={handlePreviousDate}
                        className="h-6 w-6 mr-5 hover:text-blue-500 hover:bg-neutral-400 rounded-full transition-colors duration-200 cursor-pointer" 
                    /> 
                    <span className="bg-gradient-to-r from-blue-300 to-blue-700 bg-clip-text text-transparent">{selectedDate}</span> 
                    <ArrowRight 
                        onClick={handleNextDate}
                        className="h-6 w-6 ml-5 hover:text-blue-500 hover:bg-neutral-400 rounded-full transition-colors duration-200 cursor-pointer"
                    /> 
                </h2>
                
                {bookings.length > 0 ? (
                    <div className="mt-10 overflow-x-auto">
                        <table className="table-auto border-collapse border border-gray-300 mx-auto w-full lg:w-2/3 shadow-md">
                            <thead className="bg-blue-800 text-white">
                                <tr>
                                    <th className="p-2 border border-gray-200">Time</th>
                                    <th className="p-2 border border-gray-200">Pax</th>
                                    <th className="p-2 border border-gray-200">Name</th>
                                </tr>
                            </thead>
                            <tbody>
                                {bookings.map((booking, index) => (
                                    <tr 
                                        key={index}
                                        className={`${
                                            index % 2 === 0
                                                ? "bg-gray-600 text-white"
                                                : "bg-gray-300 text-black"
                                        } hover:bg-orange-500 transition-colors duration-200`}
                                    >
                                        <td className="p-2 border border-gray-200 text-center">{booking.time}</td>
                                        <td className="p-2 border border-gray-200 text-center">{booking.pax}</td>
                                        <td className="p-2 border border-gray-200 text-center">{booking.name}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                ) : (
                    <div>
                        <h2 className="mt-10">No Bookings</h2>
                    </div>
                )}
            </div>
            <button 
                onClick={handleLogout}
                className="p-2 mt-6 bg-gradient-to-r from-red-300 to-red-600 rounded-lg shadow-md hover:scale-105 transition-transform duration:200"
            >
                Logout
            </button>
        </div>
    )
}

export default BookingsSection