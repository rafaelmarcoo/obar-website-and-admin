import { Phone, MapPinned } from "lucide-react"
import { useState } from "react"
import supabase from "../supabase-client";

const ContactSection = () => {
    const [bookingForm, setBookingForm] = useState({
        name: "",
        pax: "",
        email: "",
        phone: "",
        date: "",
        time: "",
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setBookingForm({
            ...bookingForm,
            [name]: value,
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const isConfirmed = window.confirm("Place booking for " + bookingForm.name + " for " + bookingForm.pax + " pax\n" + bookingForm.date + " " + bookingForm.time);
        if(isConfirmed) {
            const { data, error } = await supabase
            .from("bookings")
            .insert([bookingForm])
            .single();

            if(error) {
                alert("Error booking: ", error);
            } else {
                alert("Thank you for booking! See you soon!");
                setBookingForm({
                    name: "",
                    pax: "",
                    email: "",
                    phone: "",
                    date: "",
                    time: "",
                });
            }
        }
        
    }

    return (
        <div id="contact" className="w-full py-12 bg-neutral-950">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold text-center">
                            Find Us!
                        </h2>
                        <div className="overflow-hidden">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3192.767727047948!2d174.7678528!3d-36.8480385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d0d47bec93bfb5b%3A0xa36962ea4ec61942!2sObar%20%26%20OBar%20Snack!5e0!3m2!1sen!2snz!4v1736908812807!5m2!1sen!2snz" width="600" height="500" style={{border:"0"}} allowFullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div> 
                        <div>
                            <h2 className="text-3xl font-medium py-5 text-center justify-center items-center flex hover:text-red-400 transition-colors duration-200 focus:outline-offset-2">
                                <MapPinned className="w-6 h-6 flex-shrink-0" />
                                <span className="mr-8">
                                    7 Bacons Lane Unit 114B, 15 Chancery Street Auckland, Auckland, BD 1010
                                </span>
                            </h2>
                            <h2 className="mt-4 text-3xl font-medium text-center justify-center items-center flex hover:text-orange-400 transition-colors duration-200">
                                <Phone className="w-6 h-6 mr-3"></Phone> 
                                <span className="pb-1">09 216 3524</span>
                            </h2>
                        </div>
                    </div>
                    <div className="space-y-6 border border-orange-300 rounded-lg p-5">
                        <h2 className="text-3xl font-bold text-center mt-5">Book a table with us!</h2>
                        <form 
                            className="flex flex-col space-y-6"
                            onSubmit={handleSubmit}
                        >
                            <label>Full Name</label>
                            <input 
                                type="text"
                                name="name"
                                onChange={handleChange}
                                value={bookingForm.name}
                                className="p-1 border border-neutral-500 rounded-lg focus:border-4 focus:outline-none focus:outline-offset-4 transition-all" 
                                required
                            />
                            <label>For how many people?</label>
                            <input 
                                type="number"
                                name="pax"
                                onChange={handleChange}
                                value={bookingForm.pax}
                                className="p-1 border border-neutral-500 rounded-lg focus:border-4 focus:outline-none focus:outline-offset-4 transition-all" 
                                required
                            />
                            <label>Email Address</label>
                            <input 
                                type="email"
                                name="email"
                                onChange={handleChange}
                                value={bookingForm.email}
                                className="p-1 border border-neutral-500 rounded-lg focus:border-4 focus:outline-none focus:outline-offset-4 transition-all" 
                                required
                            />
                            <label>Phone Number</label>
                            <input 
                                type="number"
                                name="phone"
                                onChange={handleChange}
                                value={bookingForm.phone}
                                className="p-1 border border-neutral-500 rounded-lg focus:border-4 focus:outline-none focus:outline-offset-4 transition-all" 
                                required
                            />
                            <label>Date</label>
                            <input 
                                type="date"
                                name="date"
                                onChange={handleChange}
                                value={bookingForm.date}
                                className="p-1 border border-neutral-500 rounded-lg focus:border-4 focus:outline-none focus:outline-offset-4 transition-all" 
                                required
                            />
                            <label>Time</label>
                            <input 
                                type="time"
                                name="time"
                                onChange={handleChange}
                                value={bookingForm.time}
                                className="p-1 border border-neutral-500 rounded-lg focus:border-4 focus:outline-none focus:outline-offset-4 transition-all" 
                                required
                            />
                            <button type="submit "className="mt-3 p-3 bg-gradient-to-r from-red-300 to-red-600 rounded-md hover:scale-105 transition-transform">
                                Book Table
                            </button>
                        </form>
                    </div>
                </div>
                
            </div>
            <div className="text-center mt-20">
                    <h3 className="text-xl font-bold">
                        Opening Hours:
                    </h3>
                    <ul className="text-lg">
                        <li><span className="text-gradient bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent">Wednesday:</span> 11 am–4 pm, 5 pm–1 am</li>
                        <li><span className="text-gradient bg-gradient-to-r from-green-500 to-teal-500 bg-clip-text text-transparent">Thursday:</span> 11 am–4 pm, 5 pm–1 am</li>
                        <li><span className="text-gradient bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent">Friday:</span> 11 am–4 pm, 5 pm–2 am</li>
                        <li><span className="text-gradient bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">Saturday:</span> 11 am–4 pm, 5 pm–2 am</li>
                        <li><span className="text-gradient bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent">Sunday:</span> 5 pm–1 am</li>
                        <li><span className="text-gradient bg-gradient-to-r from-indigo-500 to-blue-500 bg-clip-text text-transparent">Monday:</span> 11 am–4 pm, 5 pm–1 am</li>
                        <li><span className="text-gradient bg-gradient-to-r from-teal-500 to-green-500 bg-clip-text text-transparent">Tuesday:</span> 11 am–4 pm, 5 pm–1 am</li>
                    </ul>
                </div>
        </div>
    )
}

export default ContactSection