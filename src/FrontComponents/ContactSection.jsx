const ContactSection = () => {

    return (
        <div className="w-full py-12 bg-neutral-950">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                    <div className="space-y-6">
                        <h2 className="text-2xl font-bold text-center">
                            Find Us!
                        </h2>
                        <div className="overflow-hidden">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3192.767727047948!2d174.7678528!3d-36.8480385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d0d47bec93bfb5b%3A0xa36962ea4ec61942!2sObar%20%26%20OBar%20Snack!5e0!3m2!1sen!2snz!4v1736908812807!5m2!1sen!2snz" width="600" height="450" style={{border:"0"}} allowFullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactSection