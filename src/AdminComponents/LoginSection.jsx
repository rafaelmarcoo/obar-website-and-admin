const LoginSection = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
        <div className="bg-neutral-800 space-y-6 max-w-md border border-orange-300 p-8 mx-auto flex items-center justify-center rounded-lg shadow-lg">
            <div className="text-center">
                <h2 className="text-4xl font-cold text-orange-400">
                    Admin Login
                </h2>
                <form className="mt-8 flex flex-col space-y-6">
                    <div className="flex flex-col">
                        <label className="text-left text-lg font-semibold">Username:</label>
                        <input className="p-1 mt-2 rounded border border-neutral-600 bg-neutral-800 text-white focus:outline focus:ring-2 focus:ring-orange-300"/>
                        <label className="mt-5 text-left text-lg font-semibold">Password:</label>
                        <input className="p-1 mt-2 rounded border border-neutral-600 bg-neutral-800 text-white focus:outline focus:ring-2 focus:ring-orange-300"/>
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