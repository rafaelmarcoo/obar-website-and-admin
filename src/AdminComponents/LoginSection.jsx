import supabase from "../supabase-client";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const LoginSection = () => {
    const navigate = useNavigate();

    const [credentials, setCredentials] = useState({
        user: "",
        password: "",
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setCredentials({
            ...credentials,
            [name]: value,
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const { user, password } = credentials;
        try {
            const { data, error } = await supabase.auth.signInWithPassword({
                email: user,
                password: password,
            });
            
            if(error) {
                alert(error);
            } else {
                alert("Logged in successfully");
                navigate("/admin/bookings");
            }
        } catch(error) {
            alert(error);
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="bg-neutral-800 space-y-6 max-w-lg border border-orange-300 p-8 mx-auto flex items-center justify-center rounded-lg shadow-lg">
                <div className="text-center">
                    <h2 className="text-4xl font-cold text-orange-400">
                        Admin Login
                    </h2>
                    <form 
                        onSubmit={handleSubmit}
                        className="mt-8 flex flex-col space-y-6"
                    >
                        <div className="flex flex-col">
                            <label className="text-left text-lg font-semibold">Username:</label>
                            <input 
                                type="text"
                                name="user"
                                value={credentials.user}
                                onChange={handleChange}
                                className="p-1 mt-2 rounded border border-neutral-600 bg-neutral-800 text-white focus:outline focus:ring-2 focus:ring-orange-300"
                            />
                            <label className="mt-5 text-left text-lg font-semibold">Password:</label>
                            <input 
                                type="password"
                                name="password"
                                value={credentials.password}
                                onChange={handleChange}
                                className="p-1 mt-2 rounded border border-neutral-600 bg-neutral-800 text-white focus:outline focus:ring-2 focus:ring-orange-300"
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full p-3 mt-4 bg-orange-400 font-semibold rounded-lg hover:bg-orange-700 transition duration-200"
                        >
                            Log In
                        </button>
                    </form>
                </div>
            </div>
        </div>
  )
}

export default LoginSection