import CardServices from "./CardServices"

function Services() {
  return (
    <div className="py-16 overflow-x-hidden">
        <div className="container mx-auto px-4">
            <div className="grid grid-cols-12 items-center">
                <div className="lg:col-span-4 col-span-12 flex flex-col gap-4">
                    <span className="text-[#F85E9F] font-bold leading-tight text-center lg:text-start text-base sm:text-2xl">SERVICES</span>
                    <h1 className="font-bold sm:text-5xl text-3xl leading-tight text-[#222831] text-center lg:text-start">Our top value categories for you</h1>
                </div>
                <div className="lg:col-span-8 col-span-12 flex flex-col sm:flex-row gap-5 lg:w-screen sm:w-auto lg:mt-0 sm:mt-16 mt-8">
                    <CardServices servicesImg="/img/destination.png" title="Best Tour Guide" text="What looked like a small patch of purple grass, above five feet." />
                    <CardServices servicesImg="/img/booking.png" title="Easy Booking" text="Square, was moving across the sand in their direction." />
                    <CardServices servicesImg="/img/cloudy.png" title="Weather Forecast" text="What looked like a small patch of purple grass, above five feet." />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Services
