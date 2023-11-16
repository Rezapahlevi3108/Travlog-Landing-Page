import CardTravel from "./CardTravel"

function TravelPoint() {
  return (
    <div className="mt-32 px-4 lg:px-0">
        <div className="grid grid-cols-12">
            <div className="lg:col-span-7 col-span-12">
                <img src="/img/img-travel.png" alt="" />
            </div>
            <div className="lg:col-span-4 col-span-12 mt-16 lg:mt-0">
                <div className="flex flex-col gap-4">
                    <span className="text-[#F85E9F] font-bold leading-tight text-center lg:text-start text-base sm:text-2xl">TRAVEL POINT</span>
                    <h1 className="font-bold sm:text-5xl text-3xl leading-tight text-[#222831] text-center lg:text-start">We helping you find your dream location</h1>
                </div>
                <p className="text-center lg:text-start text-[#222831] opacity-50 text-base md:text-[18px] font-inter mt-8">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC.</p>
                <div className="grid grid-cols-12 gap-8 mt-16">
                    <div className="col-span-12 sm:col-span-6">
                        <CardTravel number="500+" title="Holiday Package" />
                    </div>
                    <div className="col-span-12 sm:col-span-6">
                        <CardTravel number="100" title="Luxury Hotel" />
                    </div>
                    <div className="col-span-12 sm:col-span-6">
                        <CardTravel number="7" title="Premium Airlines" />
                    </div>
                    <div className="col-span-12 sm:col-span-6">
                        <CardTravel number="2k+" title="Happy Customer" />
                    </div>
                </div>
            </div>
            <div className="lg:col-span-1 col-span-12"></div>
        </div>
    </div>
  )
}

export default TravelPoint
